![App Icon](./icons/256x256.png)

# Sayad Ganj - سیدگنج
The First Balochi Dictionary - بلوچی ءِ واّلی بزانت بلد

A Desktop version of Sayad Ganj / سیدگنج built with ElectronJS + ReactJS + TailwindCSS
## Screenshots


<img src="./screenshots/darkmode.gif" width="400" height="350" alt="App Screenshot GIF" />
<img src="./screenshots/lightmode.gif" width="400" height="350" alt="App Screenshot GIF"/>


# Development
## Run

```bash
  git clone https://github.com/umairayub79/SayadGanj-Desktop.git
  cd ./SayadGanj-Desktop
  npm install
  npm run electron:start
```
Runs the app in the development mode. A brand new window will be opened by electron automatically.

note: if you get a 'module not found' error that's because this project uses SQLite3 and SQLite3 is not a 'native' module so we need to rebuild it:

```bash
  npm run rebuild-sqlite3
```

If you are on a MacOSX, you might need to have XCode and its tools installed. Also, on Windows, you may need to have some of the .NET Framework properly installed to build that native module.

## Packaging for Production
To package the app for mac : 
```
npm run electron:package:mac
```
To package the app for windows : 
```
npm run electron:package:win
```
To package the app for linux : 
```
npm run electron:package:linux
```
## To-do

- [x] Random Word
- [x] Search
- [x] Search History
- [x] Copy to Clipboard
- [x] Restructure Database
- [x] Favorites
- [x] Dark Mode
- [ ] Virtual Keyboard
- [ ] Ability to change the default font

## Contributing

Contributions are always welcome!


## Feedback

If you have any feedback, please reach out to me at umairayub79@gmail.com


## License

[MIT](https://choosealicense.com/licenses/mit/)
