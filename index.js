const {app, BrowserWindow, ipcMain} = require('electron')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win

function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({width: 800, height: 600, minWidth: 800, minHeight: 600, frame: false, icon: __dirname+'/app/resources/icon.png'})
  win.maximize()
  win.setTitle("React + Electron Bundle")

  // and load the index.html of the app.
  win.loadURL(`file://${__dirname}/app/index.html`)

  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null
  })
}

ipcMain.on("ask-files", function(from, msg) {
  // Load main JS file
  from.sender.send("load-file", ["js","main"])
})

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  app.quit()
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})


// Handle closing, minimizing and maximizing from inside the code
ipcMain.on('win-close', function() {
  win.close()
})

ipcMain.on('win-minimize', function() {
  win.minimize()
})

ipcMain.on('win-maximize', function() {
  win.isMaximized()?win.unmaximize():win.maximize()
})


// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
