'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _require = require('electron');

var ipcRenderer = _require.ipcRenderer;

var _require2 = require('material-ui');

var AppBar = _require2.AppBar;

var WindowControls = function (_React$Component) {
    _inherits(WindowControls, _React$Component);

    function WindowControls() {
        _classCallCheck(this, WindowControls);

        return _possibleConstructorReturn(this, (WindowControls.__proto__ || Object.getPrototypeOf(WindowControls)).apply(this, arguments));
    }

    _createClass(WindowControls, [{
        key: 'onClose',
        value: function onClose() {
            ipcRenderer.send('win-close');
        }
    }, {
        key: 'onMinimize',
        value: function onMinimize() {
            ipcRenderer.send('win-minimize');
        }
    }, {
        key: 'onMaximize',
        value: function onMaximize() {
            ipcRenderer.send('win-maximize');
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { id: 'window-controls' },
                React.createElement('div', { id: 'window-control-minimize', onClick: this.onMinimize }),
                React.createElement('div', { id: 'window-control-maximize', onClick: this.onMaximize }),
                React.createElement('div', { id: 'window-control-close', onClick: this.onClose })
            );
        }
    }]);

    return WindowControls;
}(React.Component);

var AppBarControls = function (_React$Component2) {
    _inherits(AppBarControls, _React$Component2);

    function AppBarControls() {
        _classCallCheck(this, AppBarControls);

        return _possibleConstructorReturn(this, (AppBarControls.__proto__ || Object.getPrototypeOf(AppBarControls)).apply(this, arguments));
    }

    _createClass(AppBarControls, [{
        key: 'render',
        value: function render() {
            return React.createElement(AppBar, _extends({ style: {
                    "WebkitAppRegion": "drag"
                } }, this.props, { iconElementRight: React.createElement(WindowControls, null) }));
        }
    }]);

    return AppBarControls;
}(React.Component);

module.exports.AppBarControls = AppBarControls;