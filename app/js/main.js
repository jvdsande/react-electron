'use strict';

/*  Import CSS styles */
load('css', 'style');

/*  Import React */
var React = require('react');
var ReactDOM = require('react-dom');

/*  Import material-ui  */

var _require = require('material-ui/styles');

var MuiThemeProvider = _require.MuiThemeProvider;
var getMuiTheme = _require.getMuiTheme;
var colors = _require.colors;

var _require2 = require('material-ui');

var AppBar = _require2.AppBar;
var Divider = _require2.Divider;

require("react-tap-event-plugin")();

/*  Import React components */

var _require3 = require('./react/AppBarControls');

var AppBarControls = _require3.AppBarControls;

var _require4 = require('./react/Manual');

var Manual = _require4.Manual;


var muiTheme = getMuiTheme({
    palette: {
        primary1Color: colors.indigo500,
        primary2Color: colors.indigo500,
        primary3Color: colors.indigo500
    }
});

var target = document.createElement("div");
document.body.appendChild(target);

var ReactRoot = ReactDOM.render(React.createElement(
    MuiThemeProvider,
    { muiTheme: muiTheme },
    React.createElement(
        'div',
        null,
        React.createElement(AppBarControls, { title: 'React + Electron Bundle',
            showMenuIconButton: false
        }),
        React.createElement(
            'div',
            { id: 'content' },
            React.createElement(Manual, null)
        )
    )
), target);