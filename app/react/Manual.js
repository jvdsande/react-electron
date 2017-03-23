"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _require = require('material-ui');

var Card = _require.Card;
var CardHeader = _require.CardHeader;
var CardTitle = _require.CardTitle;
var CardText = _require.CardText;
var CardMedia = _require.CardMedia;
var Divider = _require.Divider;
var RaisedButton = _require.RaisedButton;


module.exports.Manual = function (_React$Component) {
    _inherits(Manual, _React$Component);

    function Manual() {
        _classCallCheck(this, Manual);

        return _possibleConstructorReturn(this, (Manual.__proto__ || Object.getPrototypeOf(Manual)).apply(this, arguments));
    }

    _createClass(Manual, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "Manual" },
                React.createElement(
                    "h2",
                    null,
                    "General overview"
                ),
                React.createElement(
                    "p",
                    null,
                    "React + Electron is a bundle which can be used to quickly develop cross-platform application on Linux, Windows and Mac with JavaScript. It uses the latest web technologies such as ES2015 and React's JSX to help the code be smaller, faster and cleaner, and is bundled with script to ease the testing and launching process."
                ),
                React.createElement(
                    Card,
                    { initiallyExpanded: true, expandable: true },
                    React.createElement(
                        CardMedia,
                        { expandable: false },
                        React.createElement("img", { src: "resources/img/material2.jpg" })
                    ),
                    React.createElement(CardTitle, { title: "Main tools", actAsExpander: true, showExpandableButton: true }),
                    React.createElement(
                        CardText,
                        { expandable: true },
                        React.createElement(
                            "p",
                            null,
                            "React + Electron bundle is a base project for building applications using NodeJS, ReactJS and ElectronJS. Each of those tools have been selected for specific reasons, and are pre-configured to seamlessly work together in the bundle."
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                React.createElement(
                                    "b",
                                    null,
                                    "NodeJS:"
                                ),
                                React.createElement(
                                    "p",
                                    null,
                                    "NodeJS was selected for the ease-of-use of its package system, and it's compatibility with Electron."
                                )
                            ),
                            React.createElement(
                                "li",
                                null,
                                React.createElement(
                                    "b",
                                    null,
                                    "ReactJS:"
                                ),
                                React.createElement(
                                    "p",
                                    null,
                                    "Facebook's ReactJS was selected for component creation over Google's Angular 2 in order to use ES2015 instead of TypeScript. The choice of ReactJS will be further justified in the future by adding the possibility to switch from ElectronJS to React Native in order to support mobile devices."
                                ),
                                React.createElement(
                                    "p",
                                    null,
                                    "Using React is completely optional, though highly recommended."
                                )
                            ),
                            React.createElement(
                                "li",
                                null,
                                React.createElement(
                                    "b",
                                    null,
                                    "ElectronJS:"
                                ),
                                React.createElement(
                                    "p",
                                    null,
                                    "Finally, GitHub's ElectronJS was chosen as the window manager for its high cross-platform portability."
                                )
                            )
                        )
                    )
                ),
                React.createElement("br", null),
                React.createElement(
                    Card,
                    { initiallyExpanded: false, expandable: true },
                    React.createElement(CardTitle, { title: "Other tools and details", actAsExpander: true, showExpandableButton: true }),
                    React.createElement(CardHeader, { title: "Babel", expandable: true }),
                    React.createElement(
                        CardText,
                        { expandable: true },
                        React.createElement(
                            "p",
                            null,
                            "In order to take full advantage of React's abilities, the packaged is bundled with Babel in order to compile JSX code and ES2015 code."
                        )
                    ),
                    React.createElement(CardHeader, { title: "NoDemon", expandable: true }),
                    React.createElement(
                        CardText,
                        { expandable: true },
                        React.createElement(
                            "p",
                            null,
                            "As it is using JSX and ES2015 to improve code efficiency and lisibility, the bundle - and every apps created by using it - need to be compiled. This can be achieve through the",
                            React.createElement(
                                "code",
                                null,
                                "npm run compile"
                            ),
                            "command."
                        ),
                        React.createElement(
                            "p",
                            null,
                            "During an active development session, running this command for every little change made to a file can prove cumbersome. For this reason, the NoDemon tool is included in the bundle and can be used to automatically compile upon change by launching in a terminal the",
                            React.createElement(
                                "code",
                                null,
                                "npm run auto-compile"
                            ),
                            "command."
                        )
                    ),
                    React.createElement(CardHeader, { title: "Material UI", expandable: true }),
                    React.createElement(
                        CardText,
                        { expandable: true },
                        React.createElement(
                            "p",
                            null,
                            "React + Electron bundle comes pre-packed with the Material-UI Node package, which helps developers create applications in React following Google's Material Design guidelines."
                        ),
                        React.createElement(
                            "p",
                            null,
                            "Material-UI provides a full set of React Compoment usually found in Material apps, such as Cards, Buttons, AppBar, Floating Action Buttons..."
                        )
                    ),
                    React.createElement(CardHeader, { title: "Folder organization", expandable: true }),
                    React.createElement(
                        CardText,
                        { expandable: true },
                        React.createElement(
                            "p",
                            null,
                            "The project follows this folder/file organization:"
                        ),
                        React.createElement(
                            "ul",
                            { className: "folder-organization" },
                            React.createElement(
                                "li",
                                null,
                                React.createElement(
                                    "p",
                                    null,
                                    "InstallFolder"
                                ),
                                React.createElement(
                                    "ul",
                                    null,
                                    React.createElement(
                                        "li",
                                        null,
                                        React.createElement(
                                            "p",
                                            null,
                                            "app"
                                        ),
                                        React.createElement(
                                            "i",
                                            null,
                                            "The app folder contains the actual Electron application. All the files inside this folder should be generated/added through the",
                                            React.createElement(
                                                "code",
                                                null,
                                                "npm run compile"
                                            ),
                                            "command. It should not have to be modified manually."
                                        ),
                                        React.createElement(
                                            "ul",
                                            null,
                                            React.createElement(
                                                "li",
                                                null,
                                                React.createElement(
                                                    "p",
                                                    null,
                                                    "js"
                                                ),
                                                React.createElement(
                                                    "ul",
                                                    null,
                                                    React.createElement(
                                                        "li",
                                                        null,
                                                        React.createElement(
                                                            "i",
                                                            null,
                                                            "Compiled JS files are stored here. Do not add files manually"
                                                        )
                                                    )
                                                )
                                            ),
                                            React.createElement(
                                                "li",
                                                null,
                                                React.createElement(
                                                    "p",
                                                    null,
                                                    "react"
                                                ),
                                                React.createElement(
                                                    "ul",
                                                    null,
                                                    React.createElement(
                                                        "li",
                                                        null,
                                                        React.createElement(
                                                            "i",
                                                            null,
                                                            "Compiled React Components are stored here. Do not add files manually"
                                                        )
                                                    )
                                                )
                                            ),
                                            React.createElement(
                                                "li",
                                                null,
                                                React.createElement(
                                                    "p",
                                                    null,
                                                    "css"
                                                ),
                                                React.createElement(
                                                    "ul",
                                                    null,
                                                    React.createElement(
                                                        "li",
                                                        null,
                                                        React.createElement(
                                                            "i",
                                                            null,
                                                            "All CSS files from /style are copied here. Do not add files manually"
                                                        )
                                                    )
                                                )
                                            ),
                                            React.createElement(
                                                "li",
                                                null,
                                                React.createElement(
                                                    "p",
                                                    null,
                                                    "index.html"
                                                ),
                                                React.createElement(
                                                    "i",
                                                    null,
                                                    "Main HTML file, containing the loading script. It does not have to be modified"
                                                )
                                            )
                                        )
                                    ),
                                    React.createElement(
                                        "li",
                                        null,
                                        React.createElement(
                                            "p",
                                            null,
                                            "components"
                                        ),
                                        React.createElement(
                                            "ul",
                                            null,
                                            React.createElement(
                                                "li",
                                                null,
                                                React.createElement(
                                                    "i",
                                                    null,
                                                    "Place your JSX files for React Components here"
                                                )
                                            )
                                        )
                                    ),
                                    React.createElement(
                                        "li",
                                        null,
                                        React.createElement(
                                            "p",
                                            null,
                                            "src"
                                        ),
                                        React.createElement(
                                            "ul",
                                            null,
                                            React.createElement(
                                                "li",
                                                null,
                                                React.createElement(
                                                    "i",
                                                    null,
                                                    "Place all other JSX files here"
                                                )
                                            )
                                        )
                                    ),
                                    React.createElement(
                                        "li",
                                        null,
                                        React.createElement(
                                            "p",
                                            null,
                                            "style"
                                        ),
                                        React.createElement(
                                            "ul",
                                            null,
                                            React.createElement(
                                                "li",
                                                null,
                                                React.createElement(
                                                    "i",
                                                    null,
                                                    "Place all your CSS files here"
                                                )
                                            )
                                        )
                                    ),
                                    React.createElement(
                                        "li",
                                        null,
                                        React.createElement(
                                            "p",
                                            null,
                                            ".babelrc"
                                        ),
                                        React.createElement(
                                            "i",
                                            null,
                                            "Babel configuration file to use ES2015 and React's JSX. If you don't wan't to use React, edit that file to remove the React translator to speed up the compile process"
                                        )
                                    ),
                                    React.createElement(
                                        "li",
                                        null,
                                        React.createElement(
                                            "p",
                                            null,
                                            "index.js"
                                        ),
                                        React.createElement(
                                            "i",
                                            null,
                                            "index.js is the entry point of the Electron app. It sets up the Main process and kicks off the Renderer process (app/index.html and app/js/main.js)."
                                        )
                                    )
                                )
                            )
                        )
                    )
                ),
                React.createElement("br", null),
                React.createElement(Divider, null),
                React.createElement(
                    "h2",
                    null,
                    "Getting Started"
                ),
                React.createElement(
                    "p",
                    null,
                    "In this section, we will go over the requirements and basis needed to use ReactElectron."
                ),
                React.createElement(
                    "p",
                    null,
                    "The first thing is to be sure that all basic tools and languages are mastered. ReactElectron is built with Node and ES2015 in mind. Make sure you know how to use NodeJS and understand ES2015 syntax. If this is the case, then you can proceed to learning the tools."
                ),
                React.createElement(
                    Card,
                    { initiallyExpanded: true, expandable: true },
                    React.createElement(
                        CardMedia,
                        { expandable: false },
                        React.createElement("img", { src: "resources/img/material3.png" })
                    ),
                    React.createElement(CardTitle, { actAsExpander: true, showExpandableButton: true, title: "Get to know the tools" }),
                    React.createElement(
                        CardText,
                        { expandable: true },
                        React.createElement(
                            "p",
                            null,
                            "This section is not there to download the necessary tools, since all of them are already included in the bundle, but rather to give the links to the original resources in order to find their manuals and Getting Started in case they aren't mastered yet."
                        ),
                        React.createElement(
                            "p",
                            null,
                            "All the following tools are needed/recommended to use React + Electron correctly:"
                        ),
                        React.createElement("br", null),
                        React.createElement(
                            "span",
                            { style: {
                                    display: "block",
                                    textAlign: "center",
                                    width: "100%"
                                } },
                            React.createElement(RaisedButton, { label: "NodeJS", primary: true, style: {
                                    margin: "0 16px"
                                }, target: "_blank", href: "https://nodejs.org/en/" }),
                            React.createElement(RaisedButton, { label: "ReactJS", primary: true, style: {
                                    margin: "0 16px"
                                }, target: "_blank", href: "https://facebook.github.io/react/" }),
                            React.createElement(RaisedButton, { label: "ElectronJS", primary: true, style: {
                                    margin: "0 16px"
                                }, target: "_blank", href: "http://electron.atom.io/" }),
                            React.createElement(RaisedButton, { label: "Material-UI", primary: true, style: {
                                    margin: "0 16px"
                                }, target: "_blank", href: "http://www.material-ui.com/" })
                        )
                    )
                ),
                React.createElement("br", null),
                React.createElement(
                    Card,
                    { initiallyExpanded: false, expandable: true },
                    React.createElement(CardTitle, { actAsExpander: true, showExpandableButton: true, title: "Create a project" }),
                    React.createElement(
                        CardText,
                        { expandable: true },
                        React.createElement(
                            "p",
                            null,
                            "Creating a React + Electron project is as easy as copying the ReactElectron project and modifying the",
                            React.createElement(
                                "code",
                                null,
                                "src/main.jsx"
                            ),
                            "file.",
                            React.createElement(
                                "code",
                                null,
                                "src/main.jsx"
                            ),
                            "is the entry point of the Renderer process. In other words, it is everything shown to the user, the content of the webpage"
                        ),
                        React.createElement(
                            "p",
                            null,
                            "Further modifications can be done in the index.js files to add OS-oriented functionalities, as in any ElectronJS app. It is inside this file, for instance, that the window title can be modified."
                        ),
                        React.createElement(
                            "p",
                            null,
                            "It is also a good idea to look into the",
                            React.createElement(
                                "code",
                                null,
                                "package.json"
                            ),
                            "file to change the project's name and version."
                        ),
                        React.createElement("br", null),
                        React.createElement(
                            "p",
                            null,
                            "Using React, there is no need of ever updating the HTML file. Everything from logic to display can be done directly through components, that can then be added and displayed from the",
                            React.createElement(
                                "code",
                                null,
                                "src/main.jsx"
                            ),
                            "file."
                        ),
                        React.createElement(
                            "p",
                            null,
                            "In this file we start by creating a target element that will serve as our React rendering target. We then add it to the",
                            React.createElement(
                                "code",
                                null,
                                "body"
                            ),
                            "of code, in preparation for displaying our components."
                        )
                    ),
                    React.createElement(
                        CardMedia,
                        { expandable: true },
                        React.createElement("img", { src: "resources/img/first_code.png" })
                    ),
                    React.createElement(
                        CardText,
                        { expandable: true },
                        React.createElement("br", null),
                        React.createElement(
                            "p",
                            null,
                            "Then, once the target element is added to our",
                            React.createElement(
                                "code",
                                null,
                                "body"
                            ),
                            ", we render our React components in it, thus completely removing the need to ever open the HTML root file."
                        ),
                        React.createElement(
                            "p",
                            null,
                            "For instance, here is the code used to render this Manual page:"
                        )
                    ),
                    React.createElement(
                        CardMedia,
                        { expandable: true },
                        React.createElement("img", { src: "resources/img/second_code.png" })
                    ),
                    React.createElement(
                        CardText,
                        { expandable: true },
                        React.createElement("br", null),
                        React.createElement(
                            "p",
                            null,
                            "React allows us to keep a somewhat HTML-like code, but directly inside our JavaScript files and logic."
                        )
                    )
                ),
                React.createElement("br", null),
                React.createElement(
                    Card,
                    { initiallyExpanded: false, expandable: true },
                    React.createElement(CardTitle, { actAsExpander: true, showExpandableButton: true, title: "The NPM commands" }),
                    React.createElement(
                        CardText,
                        { expandable: true },
                        React.createElement(
                            "p",
                            null,
                            "A set of default NPM commands are already included in the",
                            React.createElement(
                                "code",
                                null,
                                "package.json"
                            ),
                            "file. These commands will help developping the application."
                        ),
                        React.createElement(
                            "ul",
                            null,
                            [{
                                name: "start",
                                description: "The start command runs the main Electron application.",
                                special_usage: ["npm start"]
                            }, {
                                name: "compile",
                                description: 'The compile command copies the content from "/style" to "/app/css", compiles every JSX file from "/src" to "/app/js" and from "/components" to "/app/react".' + " It must be ran before start in order to see the changes."
                            }, {
                                name: "build",
                                description: "The build command is a helper command that first calls compile and then calls start."
                            }, {
                                name: "auto-compile",
                                description: "This command uses NoDemon to run compile every time a source file changes. When auto-compile is running in a terminal, the page can be refreshed or start relaunched without having to bother running the compile command"
                            }, {
                                name: "package-win",
                                description: "The package-win command compiles the project using Electron-Packager and ASAR for Win32 and Win64 platforms. This can be run on any platform."
                            }, {
                                name: "package-linux",
                                description: "The package-linux command compiles the project using Electron-Packager and ASAR for Linux in both 32 bits and 64 bits. It can only be run from a Linux or OS X host."
                            }, {
                                name: "package-osx",
                                description: "The package-osx command compiles the project using Electron-Packager and ASAR for OS X. It can only be run from a Linux or OS X host."
                            }].map(function (elem) {
                                return React.createElement(
                                    "li",
                                    { key: elem.name },
                                    React.createElement(
                                        "b",
                                        null,
                                        elem.name,
                                        ":"
                                    ),
                                    React.createElement(
                                        "p",
                                        null,
                                        elem.description
                                    ),
                                    React.createElement(
                                        "p",
                                        null,
                                        "Usage: ",
                                        elem.special_usage !== undefined ? elem.special_usage.map(function (u) {
                                            return React.createElement(
                                                "span",
                                                { key: u },
                                                React.createElement(
                                                    "code",
                                                    null,
                                                    u
                                                ),
                                                "or"
                                            );
                                        }) : "",
                                        React.createElement(
                                            "code",
                                            null,
                                            "npm run ",
                                            elem.name
                                        )
                                    )
                                );
                            })
                        )
                    )
                ),
                React.createElement("br", null),
                React.createElement(
                    Card,
                    { initiallyExpanded: false, expandable: true },
                    React.createElement(CardTitle, { actAsExpander: true, showExpandableButton: true, title: "Add custom JS and resources" }),
                    React.createElement(CardHeader, { title: "load() and require()", expandable: true }),
                    React.createElement(
                        CardText,
                        { expandable: true },
                        React.createElement(
                            "p",
                            null,
                            "In the default \"index.html\" page, a",
                            React.createElement(
                                "code",
                                null,
                                "load"
                            ),
                            "function is defined to help load files programatically. This aims to never have to edit any HTML file in the process of creating an application, and instead kipping all the logic of our application inside JSX files."
                        ),
                        React.createElement(
                            "p",
                            null,
                            "The load function can be used to load JavaScript or CSS files. When loading a JS file, it adds the complete source code to the page and executes it. For a CSS file, it adds the complete CSS file, which configurations will merge with any selector already present."
                        ),
                        React.createElement("br", null),
                        React.createElement(
                            "p",
                            null,
                            "When loading JS files, it is a better practice to rely on module export/import system of Node using the",
                            React.createElement(
                                "code",
                                null,
                                "require"
                            ),
                            "function as usual.",
                            React.createElement(
                                "code",
                                null,
                                "load"
                            ),
                            "should only be use for behavior not achievable through",
                            React.createElement(
                                "code",
                                null,
                                "require"
                            )
                        )
                    ),
                    React.createElement(CardHeader, { title: "The compilation process", expandable: true }),
                    React.createElement(
                        CardText,
                        { expandable: true },
                        React.createElement(
                            "p",
                            null,
                            "In order to be sure that our application is coherent and clean, React + Electron requires that the \"app\" folder is never modified directly."
                        ),
                        React.createElement(
                            "p",
                            null,
                            "Instead, meaningful resources should be added to their respective folders at the project's root, either",
                            React.createElement(
                                "code",
                                null,
                                "components"
                            ),
                            ",",
                            React.createElement(
                                "code",
                                null,
                                "src"
                            ),
                            "or",
                            React.createElement(
                                "code",
                                null,
                                "res"
                            ),
                            "."
                        ),
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement(
                            "p",
                            null,
                            React.createElement(
                                "code",
                                null,
                                "components"
                            ),
                            "should contain all React components used in the app (see Add content via React for more information)."
                        ),
                        React.createElement("br", null),
                        React.createElement(
                            "p",
                            null,
                            React.createElement(
                                "code",
                                null,
                                "src"
                            ),
                            "is there to contain all JSX files. Here the X extension is not meant for actual JSX files as in React components, but serves as a differentiator between source JS which can be written in ES2015 or React, and compiled JS files found in the",
                            React.createElement(
                                "code",
                                null,
                                "app/js"
                            ),
                            "folder. The compiled JS files can then be loaded using the",
                            React.createElement(
                                "code",
                                null,
                                "load"
                            ),
                            "or - preferably - the",
                            React.createElement(
                                "code",
                                null,
                                "require"
                            ),
                            "functions, depending on how they were developped. To load a JS file using the ",
                            React.createElement(
                                "code",
                                null,
                                "load"
                            ),
                            " function, use the following syntax: ",
                            React.createElement(
                                "code",
                                null,
                                "load('js', filename)"
                            ),
                            ". This will act exactly as adding the script file in the header."
                        ),
                        React.createElement("br", null),
                        React.createElement(
                            "p",
                            null,
                            React.createElement(
                                "code",
                                null,
                                "res"
                            ),
                            "is where all the resources for the application should go. All CSS files will end up in",
                            React.createElement(
                                "code",
                                null,
                                "app/css"
                            ),
                            "folder, whereas all other files will end up in",
                            React.createElement(
                                "code",
                                null,
                                "app/resources"
                            ),
                            ". Any sub directory organization will be kept in both destination folders. The reason behind this separation is to leverage the power of",
                            React.createElement(
                                "code",
                                null,
                                "load"
                            ),
                            ": all files situated in",
                            React.createElement(
                                "code",
                                null,
                                "app/css"
                            ),
                            "can directly be added to the DOM style list by calling",
                            React.createElement(
                                "code",
                                null,
                                "load('css', filename)"
                            )
                        )
                    )
                ),
                React.createElement("br", null),
                React.createElement(
                    Card,
                    { initiallyExpanded: false, expandable: true },
                    React.createElement(CardTitle, { actAsExpander: true, showExpandableButton: true, title: "Add content via React" }),
                    React.createElement(
                        CardText,
                        { expandable: true },
                        React.createElement(
                            "p",
                            null,
                            "Adding React components in React+Electron is as easy as just putting the component file in",
                            React.createElement(
                                "code",
                                null,
                                "components"
                            ),
                            ". Upon compile, it will end up in",
                            React.createElement(
                                "code",
                                null,
                                "app/react"
                            ),
                            "as a compiled JS file."
                        ),
                        React.createElement(
                            "p",
                            null,
                            "In order to use it in your application, you have two possibilities."
                        ),
                        React.createElement(
                            "p",
                            null,
                            "The recommended way is to correctly export the component in its description file, by adding the following line:",
                            React.createElement(
                                "code",
                                { className: "block" },
                                "module.exports.ComponentName = ComponentName"
                            ),
                            "if the file contains multiple variables to export, or",
                            React.createElement(
                                "code",
                                { className: "block" },
                                "module.exports.default = ComponentName"
                            ),
                            "if the file contains just a single component."
                        ),
                        React.createElement(
                            "p",
                            null,
                            "Your component can then be used by calling",
                            React.createElement(
                                "code",
                                { className: "block" },
                                "const ComponentName = require('react/component-name')"
                            ),
                            "if the component was exported using default, or",
                            React.createElement(
                                "code",
                                { className: "block" },
                                "const ",
                                "{ComponentName} ",
                                "= require('react/component-name')"
                            ),
                            "if the component was exported using its name."
                        ),
                        React.createElement("br", null),
                        React.createElement(
                            "p",
                            null,
                            "The second possibility, if for instance the component file cannot be openened to add the required lines, is to use the",
                            React.createElement(
                                "code",
                                null,
                                "load"
                            ),
                            "function."
                        ),
                        React.createElement(
                            "p",
                            null,
                            "The load function is configured to automatically load a React component by using the following syntax:",
                            React.createElement(
                                "code",
                                null,
                                "load('react', 'component-name')"
                            ),
                            "."
                        ),
                        React.createElement(
                            "p",
                            null,
                            "While this is working, the",
                            React.createElement(
                                "code",
                                null,
                                "require"
                            ),
                            "way should always be preferred."
                        )
                    )
                )
            );
        }
    }]);

    return Manual;
}(React.Component);