import React, {Component} from 'react'

class Hello extends Component {
    render() {
        const {name} = this.props
        return <div>
            <h1>Hello <span>{name}</span></h1>
        </div>
    }
}

export default Hello
