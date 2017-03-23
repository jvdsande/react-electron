const {ipcRenderer} = require('electron')
const {AppBar} = require('material-ui')


class WindowControls extends React.Component {
    onClose() {
        ipcRenderer.send('win-close')
    }
    onMinimize() {
        ipcRenderer.send('win-minimize')
    }
    onMaximize() {
        ipcRenderer.send('win-maximize')
    }
    render() {
        return (
            <div id="window-controls">
                <div id="window-control-minimize" onClick={this.onMinimize}></div>
                <div id="window-control-maximize" onClick={this.onMaximize}></div>
                <div id="window-control-close" onClick={this.onClose}></div>
            </div>
        )
    }
}

class AppBarControls extends React.Component {
  render() {
    return(
      <AppBar style={{
        "WebkitAppRegion": "drag"
      }} {...this.props} iconElementRight={<WindowControls />}/>
    )
  }
}

module.exports.AppBarControls = AppBarControls;
