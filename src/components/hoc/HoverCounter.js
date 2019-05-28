import React, { Component } from 'react'
import withCouter from './withCounter';

class HoverCounter extends Component {
    render() {
        const { count, incrementCount } = this.props
        return (
            <div>
                <h2 onMouseOver={incrementCount}>hovered {count} times</h2>
            </div>
        )
    }
}

export default withCouter(HoverCounter)