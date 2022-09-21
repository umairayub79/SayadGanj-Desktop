const electron = require('electron');
const { app, BrowserWindow, ipcMain } = electron;

const path = require('path');
const isDev = require('electron-is-dev');
const sqlite3 = require('sqlite3');


let mainWindow;
let splashWindow;


// Initializing a new dنatabase
const database = new sqlite3.Database(
    isDev
        ? path.join(__dirname, '../db/dev.db') // my root folder if in dev mode
        : path.join(process.resourcesPath, './db/data.db'), // the resources path if in production build
    (err) => {
        if (err) {
            console.log(`Database Error: ${err}`);
        } else {
            console.log('Database Loaded');
        }
    }

);

function createWindow() {
    splashWindow = new BrowserWindow({
        width: 500,
        height: 300,
        frame: false,
        alwaysOnTop: true,
    });
    splashWindow.loadFile(
        isDev
            ? path.join(app.getAppPath(), './public/splash.html') // Loading it from the public folder for dev
            : path.join(app.getAppPath(), './build/splash.html')
    );
    
    splashWindow.center()
    mainWindow = new BrowserWindow({
        width: 900,
        height: 800,
        minHeight: 700,
        minWidth: 900,
        frame: false,
        show: false,
        webPreferences: {
            // The preload file where we will perform our app communication
            preload: isDev
                ? path.join(app.getAppPath(), './public/preload.js') // Loading it from the public folder for dev
                : path.join(app.getAppPath(), './build/preload.js'), // Loading it from the build folder for production
            worldSafeExecuteJavaScript: true, // If you're using Electron 12+, this should be enabled by default and does not need to be added here.
            contextIsolation: true, // Isolating context so our app is not exposed to random javascript executions making it safer.
        },
    });

    mainWindow.setMenu(null)

    // Loading a webpage inside the electron window we just created
    mainWindow.loadURL(
        isDev
            ? 'http://localhost:3000' // Loading localhost if dev mode
            : `file://${path.join(app.getAppPath(), '/build/index.html')}` // Loading build file if in production
    );


    mainWindow.on('closed', () => mainWindow = null);

    mainWindow.on('maximize', () => {
        mainWindow.webContents.send("winState", "maximized");
    })

    mainWindow.on('unmaximize', () => {
        mainWindow.webContents.send("winState", "unmaximized");
    })


    // In development mode, if the window has loaded, then load the dev tools.
    if (isDev) {
        mainWindow.webContents.on('did-frame-finish-load', () => {
            mainWindow.webContents.openDevTools({ mode: 'detach' });
        });
    }
    

    splashWindow.webContents.once('did-finish-load', function () {
        setTimeout(() => {
            splashWindow.close()
            mainWindow.show()
    }, 2000);
    })
}


// IPC handlers

ipcMain.handle('findAll', async (event, arg) => {
    const sql = `SELECT * FROM sayad WHERE full_word LIKE ? `;
    return new Promise(function (resolve, reject) {
        database.all(sql, [`${arg}%`], function (err, result) {
            if (err) {
                console.log(err)
                reject(err)
            } else {
                resolve(result)
            }
        });
    });
});


ipcMain.handle('findOne', async (event, arg) => {
    const sql = `SELECT * FROM sayad WHERE id = ? `;
    return new Promise(function (resolve, reject) {
        database.all(sql, [arg], function (err, result) {
            if (err) {
                console.log(err)
                reject(err)
            } else {
                resolve(result[0])
            }
        });
    });
});

ipcMain.handle('randomWord', async (event, arg) => {
    const sql = "SELECT * FROM sayad ORDER BY RANDOM() LIMIT 1";
    return new Promise(function (resolve, reject) {
        database.all(sql, [], function (err, result) {
            if (err) {
                console.log(err)
                reject(err)
            } else {
                resolve(result[0])
            }
        });
    });
});

ipcMain.handle('minimize-event', () => {
    mainWindow.minimize()
})

ipcMain.handle('maximize-event', () => {
    mainWindow.maximize()
})

ipcMain.handle('unmaximize-event', () => {
    mainWindow.unmaximize()
})

ipcMain.handle('close-event', () => {
    app.quit()
})

app.on('browser-window-focus', () => {
    mainWindow.webContents.send('winFocusState', 'focused')
})

app.on('browser-window-blur', () => {
    mainWindow.webContents.send('winFocusState', 'blurred')
})

// When the app is ready to load
app.whenReady().then(async () => {
    await createWindow(); // Create the mainWindow
});

// Exiting the app
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

// Activating the app
app.on('activate', () => {
    if (mainWindow.getAllWindows().length === 0) {
        createWindow();
    }
});

// Logging any exceptions
process.on('uncaughtException', (error) => {
    console.log(`Exception: ${error}`);
    if (process.platform !== 'darwin') {
        app.quit();
    }
});