const {app, dialog, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

let win;

function createWindow () {
    win = new BrowserWindow({
        width: 350, 
        height: 600,
        icon: path.join(__dirname, 'lib/assets/favicon-96x96.png')
    });
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'lib/src/index.html'),
        protocol: 'file:',
        slashes: true
    }));
    win.on('closed', () => {win = null;})
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (win == null) {
        createWindow();
    }
})

module.exports.selectDirectory = function () {
    selectDirectory();
}