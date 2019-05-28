import React, { Component } from 'react'

/*
Tutorial 14 Binding Event Handlers
*/
class EventBind extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: 'Hello'
        }

        // Method 3: event bind to state in constructor
        this.clickHandler = this.clickHandler.bind(this)
    }

    // Method 4: event bind to state in function
    clickHandler = () => {
        this.setState({
            message: 'Good Bye'
        })
    }

    // Method 1, 2, 3
    // clickHandler() {
    //     this.setState({
    //         message: 'Good Bye'
    //     })
    // }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* Method 1: event bind to state in bind(this), it has performance implication */}
                {/* <button onClick={this.clickHandler.bind(this)}>click me</button> */}
                {/* Method 2: event bind to state in arrow function, it has performance implication */}
                {/* <button onClick={() => this.clickHandler}>click me</button> */}
                <button onClick={this.clickHandler}>click me</button>
            </div >
        )
    }
}

export default EventBind
