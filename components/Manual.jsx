const {
    Card,
    CardHeader,
    CardTitle,
    CardText,
    CardMedia,
    Divider,
    RaisedButton
} = require('material-ui')

module.exports.Manual = class Manual extends React.Component {
    render() {
        return (
            <div className="Manual">
                <h2>General overview</h2>
                <p>
                    React + Electron is a bundle which can be used to quickly develop cross-platform application on Linux, Windows and Mac with JavaScript. It uses the latest web technologies such as ES2015 and React's JSX to help the code be smaller, faster and cleaner, and is bundled with script to ease the testing and launching process.
                </p>
                <Card initiallyExpanded={true} expandable={true}>
                    <CardMedia expandable={false}>
                        <img src="resources/img/material2.jpg"/>
                    </CardMedia>

                    <CardTitle title="Main tools" actAsExpander={true} showExpandableButton={true}/>

                    <CardText expandable={true}>
                        <p>
                            React + Electron bundle is a base project for building applications using NodeJS, ReactJS and ElectronJS. Each of those tools have been selected for specific reasons, and are pre-configured to seamlessly work together in the bundle.
                        </p>
                        <ul>
                            <li>
                                <b>NodeJS:
                                </b>
                                <p>
                                    NodeJS was selected for the ease-of-use of its package system, and it's compatibility with Electron.
                                </p>
                            </li>
                            <li>
                                <b>ReactJS:
                                </b>
                                <p>
                                    Facebook's ReactJS was selected for component creation over Google's Angular 2 in order to use ES2015 instead of TypeScript. The choice of ReactJS will be further justified in the future by adding the possibility to switch from ElectronJS to React Native in order to support mobile devices.
                                </p>
                                <p>
                                    Using React is completely optional, though highly recommended.
                                </p>
                            </li>
                            <li>
                                <b>ElectronJS:
                                </b>
                                <p>
                                    Finally, GitHub's ElectronJS was chosen as the window manager for its high cross-platform portability.
                                </p>
                            </li>
                        </ul>
                    </CardText>
                </Card>
                <br/>
                <Card initiallyExpanded={false} expandable={true}>
                    <CardTitle title="Other tools and details" actAsExpander={true} showExpandableButton={true}/>

                    <CardHeader title="Babel" expandable={true}/>

                    <CardText expandable={true}>
                        <p>
                            In order to take full advantage of React's abilities, the packaged is bundled with Babel in order to compile JSX code and ES2015 code.
                        </p>
                    </CardText>

                    <CardHeader title="NoDemon" expandable={true}/>

                    <CardText expandable={true}>
                        <p>
                            As it is using JSX and ES2015 to improve code efficiency and lisibility, the bundle - and every apps created by using it - need to be compiled. This can be achieve through the
                            <code>npm run compile</code>
                            command.
                        </p>
                        <p>
                            During an active development session, running this command for every little change made to a file can prove cumbersome. For this reason, the NoDemon tool is included in the bundle and can be used to automatically compile upon change by launching in a terminal the
                            <code>npm run auto-compile</code>
                            command.
                        </p>
                    </CardText>

                    <CardHeader title="Material UI" expandable={true}/>

                    <CardText expandable={true}>
                        <p>
                            React + Electron bundle comes pre-packed with the Material-UI Node package, which helps developers create applications in React following Google's Material Design guidelines.
                        </p>
                        <p>
                            Material-UI provides a full set of React Compoment usually found in Material apps, such as Cards, Buttons, AppBar, Floating Action Buttons...
                        </p>
                    </CardText>

                    <CardHeader title="Folder organization" expandable={true}/>

                    <CardText expandable={true}>
                        <p>
                            The project follows this folder/file organization:
                        </p>
                        <ul className="folder-organization">
                            <li>
                                <p>InstallFolder</p>
                                <ul>
                                    <li>
                                        <p>
                                            app
                                        </p>
                                        <i>
                                            The app folder contains the actual Electron application. All the files inside this folder should be generated/added through the
                                            <code>
                                                npm run compile
                                            </code>
                                            command. It should not have to be modified manually.
                                        </i>
                                        <ul>
                                            <li>
                                                <p>js</p>
                                                <ul>
                                                    <li>
                                                        <i>Compiled JS files are stored here. Do not add files manually</i>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <p>react</p>
                                                <ul>
                                                    <li>
                                                        <i>Compiled React Components are stored here. Do not add files manually</i>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <p>css</p>
                                                <ul>
                                                    <li>
                                                        <i>All CSS files from /style are copied here. Do not add files manually</i>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <p>index.html</p>
                                                <i>Main HTML file, containing the loading script. It does not have to be modified</i>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <p>components</p>
                                        <ul>
                                            <li>
                                                <i>Place your JSX files for React Components here</i>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <p>src</p>
                                        <ul>
                                            <li>
                                                <i>Place all other JSX files here</i>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <p>style</p>
                                        <ul>
                                            <li>
                                                <i>Place all your CSS files here</i>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <p>.babelrc</p>
                                        <i>Babel configuration file to use ES2015 and React's JSX. If you don't wan't to use React, edit that file to remove the React translator to speed up the compile process</i>
                                    </li>
                                    <li>
                                        <p>index.js</p>
                                        <i>index.js is the entry point of the Electron app. It sets up the Main process and kicks off the Renderer process (app/index.html and app/js/main.js).</i>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </CardText>
                </Card>

                <br/>
                <Divider/>

                <h2>
                    Getting Started
                </h2>
                <p>
                    In this section, we will go over the requirements and basis needed to use ReactElectron.
                </p>
                <p>
                    The first thing is to be sure that all basic tools and languages are mastered. ReactElectron is built with Node and ES2015 in mind. Make sure you know how to use NodeJS and understand ES2015 syntax. If this is the case, then you can proceed to learning the tools.
                </p>
                <Card initiallyExpanded={true} expandable={true}>

                    <CardMedia expandable={false}>
                        <img src="resources/img/material3.png"/>
                    </CardMedia>

                    <CardTitle actAsExpander={true} showExpandableButton={true} title="Get to know the tools"/>

                    <CardText expandable={true}>
                        <p>
                            This section is not there to download the necessary tools, since all of them are already included in the bundle, but rather to give the links to the original resources in order to find their manuals and Getting Started in case they aren't mastered yet.
                        </p>
                        <p>
                            All the following tools are needed/recommended to use React + Electron correctly:
                        </p>
                        <br/>
                        <span style={{
                            display: "block",
                            textAlign: "center",
                            width: "100%"
                        }}>
                            <RaisedButton label="NodeJS" primary={true} style={{
                                margin: "0 16px"
                            }} target="_blank" href="https://nodejs.org/en/"/>

                            <RaisedButton label="ReactJS" primary={true} style={{
                                margin: "0 16px"
                            }} target="_blank" href="https://facebook.github.io/react/"/>

                            <RaisedButton label="ElectronJS" primary={true} style={{
                                margin: "0 16px"
                            }} target="_blank" href="http://electron.atom.io/"/>

                            <RaisedButton label="Material-UI" primary={true} style={{
                                margin: "0 16px"
                            }} target="_blank" href="http://www.material-ui.com/"/>
                        </span>
                    </CardText>
                </Card>

                <br/>

                <Card initiallyExpanded={false} expandable={true}>
                    <CardTitle actAsExpander={true} showExpandableButton={true} title="Create a project"/>

                    <CardText expandable={true}>
                        <p>
                            Creating a React + Electron project is as easy as copying the ReactElectron project and modifying the
                            <code>src/main.jsx</code>
                            file.
                            <code>src/main.jsx</code>
                            is the entry point of the Renderer process. In other words, it is everything shown to the user, the content of the webpage
                        </p>
                        <p>
                            Further modifications can be done in the index.js files to add OS-oriented functionalities, as in any ElectronJS app. It is inside this file, for instance, that the window title can be modified.
                        </p>
                        <p>
                            It is also a good idea to look into the
                            <code>
                                package.json
                            </code>
                            file to change the project's name and version.
                        </p>
                        <br/>
                        <p>
                            Using React, there is no need of ever updating the HTML file. Everything from logic to display can be done directly through components, that can then be added and displayed from the
                            <code>src/main.jsx</code>
                            file.
                        </p>
                        <p>
                            In this file we start by creating a target element that will serve as our React rendering target. We then add it to the
                            <code>body</code>
                            of code, in preparation for displaying our components.
                        </p>
                    </CardText>

                    <CardMedia expandable={true}>
                        <img src="resources/img/first_code.png"/>
                    </CardMedia>

                    <CardText expandable={true}>
                        <br/>
                        <p>
                            Then, once the target element is added to our
                            <code>body</code>, we render our React components in it, thus completely removing the need to ever open the HTML root file.
                        </p>
                        <p>For instance, here is the code used to render this Manual page:</p>
                    </CardText>

                    <CardMedia expandable={true}>
                        <img src="resources/img/second_code.png"/>
                    </CardMedia>

                    <CardText expandable={true}>
                        <br/>
                        <p>
                            React allows us to keep a somewhat HTML-like code, but directly inside our JavaScript files and logic.
                        </p>
                    </CardText>
                </Card>

                <br/>

                <Card initiallyExpanded={false} expandable={true}>
                    <CardTitle actAsExpander={true} showExpandableButton={true} title="The NPM commands"/>

                    <CardText expandable={true}>
                        <p>
                            A set of default NPM commands are already included in the
                            <code>package.json</code>
                            file. These commands will help developping the application.
                        </p>
                        <ul>
                            {[
                                {
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
                                }
                            ].map(function(elem) {
                                return (
                                    <li key={elem.name}>
                                        <b>{elem.name}:</b>
                                        <p>{elem.description}</p>
                                        <p>
                                            Usage: {(elem.special_usage !== undefined)
                                                ? elem.special_usage.map(function(u) {
                                                    return (
                                                        <span key={u}>
                                                            <code>{u}</code>
                                                            or</span>
                                                    )
                                                })
                                                : ""}
                                            <code>npm run {elem.name}</code>
                                        </p>
                                    </li>
                                )
                            })}
                        </ul>
                    </CardText>
                </Card>

                <br/>

                <Card initiallyExpanded={false} expandable={true}>
                    <CardTitle actAsExpander={true} showExpandableButton={true} title="Add custom JS and resources"/>

                    <CardHeader title="load() and require()" expandable={true}/>

                    <CardText expandable={true}>
                        <p>
                            In the default "index.html" page, a
                            <code>
                                load
                            </code>
                            function is defined to help load files programatically. This aims to never have to edit any HTML file in the process of creating an application, and instead kipping all the logic of our application inside JSX files.
                        </p>
                        <p>
                            The load function can be used to load JavaScript or CSS files. When loading a JS file, it adds the complete source code to the page and executes it. For a CSS file, it adds the complete CSS file, which configurations will merge with any selector already present.
                        </p>
                        <br/>
                        <p>
                            When loading JS files, it is a better practice to rely on module export/import system of Node using the
                            <code>
                                require
                            </code>
                            function as usual.
                            <code>
                                load
                            </code>
                            should only be use for behavior not achievable through
                            <code>
                                require
                            </code>
                        </p>
                    </CardText>

                    <CardHeader title="The compilation process" expandable={true}/>

                    <CardText expandable={true}>
                        <p>
                            In order to be sure that our application is coherent and clean, React + Electron requires that the "app" folder is never modified directly.
                        </p>
                        <p>
                            Instead, meaningful resources should be added to their respective folders at the project's root, either
                            <code>components</code>,
                            <code>src</code>
                            or
                            <code>res</code>.
                        </p>
                        <br/><br/>
                        <p>
                            <code>components</code>
                            should contain all React components used in the app (see Add content via React for more information).
                        </p>
                        <br/>
                        <p>
                            <code>src</code>
                            is there to contain all JSX files. Here the X extension is not meant for actual JSX files as in React components, but serves as a differentiator between source JS which can be written in ES2015 or React, and compiled JS files found in the
                            <code>app/js</code>folder. The compiled JS files can then be loaded using the
                            <code>load</code>
                            or - preferably - the
                            <code>require</code>
                            functions, depending on how they were developped. To load a JS file using the <code>load</code> function, use the following syntax: <code>load('js', filename)</code>. This will act exactly as adding the script file in the header.
                        </p>
                        <br/>
                        <p>
                            <code>res</code>
                            is where all the resources for the application should go. All CSS files will end up in
                            <code>app/css</code>
                            folder, whereas all other files will end up in
                            <code>app/resources</code>. Any sub directory organization will be kept in both destination folders. The reason behind this separation is to leverage the power of
                            <code>load</code>: all files situated in
                            <code>app/css</code>
                            can directly be added to the DOM style list by calling
                            <code>load('css', filename)</code>
                        </p>
                    </CardText>
                </Card>

                <br/>

                <Card initiallyExpanded={false} expandable={true}>
                    <CardTitle actAsExpander={true} showExpandableButton={true} title="Add content via React"/>

                    <CardText expandable={true}>
                        <p>
                            Adding React components in React+Electron is as easy as just putting the component file in
                            <code>components</code>. Upon compile, it will end up in
                            <code>app/react</code>
                            as a compiled JS file.
                        </p>
                        <p>
                            In order to use it in your application, you have two possibilities.
                        </p>
                        <p>
                            The recommended way is to correctly export the component in its description file, by adding the following line:
                            <code className="block">
                                module.exports.ComponentName = ComponentName
                            </code>
                            if the file contains multiple variables to export, or
                            <code className="block">
                                module.exports.default = ComponentName
                            </code>
                            if the file contains just a single component.
                        </p>
                        <p>
                            Your component can then be used by calling
                            <code className="block">const ComponentName = require('react/component-name')</code>
                            if the component was exported using default, or
                            <code className="block">const {"{ComponentName} "}
                                = require('react/component-name')</code>
                            if the component was exported using its name.
                        </p>
                        <br/>
                        <p>
                            The second possibility, if for instance the component file cannot be openened to add the required lines, is to use the
                            <code>load</code>
                            function.
                        </p>
                        <p>
                            The load function is configured to automatically load a React component by using the following syntax:
                            <code>load('react', 'component-name')</code>.
                        </p>
                        <p>
                            While this is working, the
                            <code>require</code>
                            way should always be preferred.
                        </p>
                    </CardText>
                </Card>
            </div>
        )
    }
}
