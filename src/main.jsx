/*  Import CSS styles */
load('css', 'style')

/*  Import React */
const React = require('react')
const ReactDOM = require('react-dom')

/*  Import material-ui  */
const {MuiThemeProvider, getMuiTheme, colors} = require('material-ui/styles')
const {AppBar, Divider} = require('material-ui')
require("react-tap-event-plugin")()

/*  Import React components */
const {AppBarControls} = require('./react/AppBarControls')
const {Manual} = require('./react/Manual')

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: colors.indigo500,
        primary2Color: colors.indigo500,
        primary3Color: colors.indigo500
    }
})

let target = document.createElement("div")
document.body.appendChild(target)

let ReactRoot = ReactDOM.render(
    <MuiThemeProvider muiTheme={muiTheme}>
    <div>
        <AppBarControls title="React + Electron Bundle"
                showMenuIconButton={false}
        />

        <div id="content">
            <Manual/>
        </div>
    </div>
</MuiThemeProvider>, target)
