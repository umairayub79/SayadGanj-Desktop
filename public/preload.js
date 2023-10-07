const { ipcRenderer, contextBridge } = require('electron');

const WINDOW_API = {
   // Invoke Methods
   findAll: (args) => ipcRenderer.invoke('findAll', args).then((result) => {
      return result
   }), 
   suggestion: (args) => ipcRenderer.invoke('suggestion', args).then((result) => {
    return result
 }), 
   findOne: (args) => ipcRenderer.invoke('findOne', args).then((result) => {
      return result
   }),
   randomWord: (args) => ipcRenderer.invoke('randomWord', args).then((result) => {
      return result
   }),

   minimizeHandler: () =>  ipcRenderer.invoke('minimize-event'),
   maximizeHandler: () =>  ipcRenderer.invoke('maximize-event'),
   unmaximizeHandler: () =>  ipcRenderer.invoke('unmaximize-event'),
   closeHandler: () =>  ipcRenderer.invoke('close-event')
}

contextBridge.exposeInMainWorld('api', WINDOW_API)


const validChannels = ["winState","winFocusState"];
contextBridge.exposeInMainWorld("ipc", {
    send: (channel, data) => {
        if (validChannels.includes(channel)) {
            ipcRenderer.send(channel, data);
        }
    },
    on: (channel, func) => {
        if (validChannels.includes(channel)) {
            // Strip event as it includes `sender` and is a security risk
            //_ ipcRenderer.on(channel, (event, ...args) => func(...args));
            ipcRenderer.on(channel, (...args) => func(...args));
        }
    },
});