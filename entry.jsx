import Hello from './hello.jsx'
import React from 'react'
import ReactDOM from 'react-dom'

class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'React'
        }
    }

    changeName(event) {
        this.setState({
            name: event.target.value
        })
    }

    render() {
        return <div>
            <Hello name={this.state.name}/>
            <input type='text' value={this.state.name} onChange={this.changeName.bind(this)}/>
        </div>
    }
}

ReactDOM.render(
    <Form/>,
    document.body
)

