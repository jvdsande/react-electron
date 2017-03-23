let React = require('react')

class HelloWorld extends React.Component {
  constructor() {
    super()

    this.setState = this.setState.bind(this)

    this.state = {}
  }


  render() {
    let name = this.props.name.name || "World"

    return (<div>Hello {this.state.name || name}!</div>)
  }
}


module.exports.HelloWorld = HelloWorld;
