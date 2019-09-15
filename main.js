const {app, BrowserWindow} = require('electron')
const url = require('url')
const path = require('path')

function createWindow() {
    const win = new BrowserWindow({width: 1024, height: 768})
    win.loadURL(url.format ({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true
    }))

}
app.on('ready', createWindow)