import React, { Component } from 'react';

class Message extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }

    // asychronize callback
    incrementByRegularObject() {
        this.setState({
            count: this.state.count + 1
        }, () => console.log('Callback value', this.state.count)
        )
        console.log(this.state.count)
    }

    // asychronize callback add according to prevState
    incrementByFunction() {
        this.setState((prevState) => ({
            count: prevState.count + 1
        }), () => console.log('Callback value', this.state.count)
        )
        console.log(this.state.count)
    }

    incrementFive1() {
        this.incrementByRegularObject()
        this.incrementByRegularObject()
        this.incrementByRegularObject()
        this.incrementByRegularObject()
        this.incrementByRegularObject()
    }

    incrementFive2() {
        this.incrementByFunction()
        this.incrementByFunction()
        this.incrementByFunction()
        this.incrementByFunction()
        this.incrementByFunction()
    }

    render() {
        return (
            <div>
                <h1>count: {this.state.count}</h1>
                <button onClick={() => this.incrementFive1()}>increment</button>
                <button onClick={() => this.incrementFive2()}>incrementFive</button>
            </div>

        )
    }
}

export default Message