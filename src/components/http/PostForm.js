import React, { Component } from 'react'
import Axios from 'axios';

class PostForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userId: '',
            title: '',
            body: ''
        }
    }

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        Axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
            .then(resp => console.log(resp))
            .catch(e => console.log(e))
    }

    render() {
        const { userId, title, body } = this.state
        return (
            <div>
                <h2>post form to json placeholder</h2>
                <form onSubmit={this.submitHandler}>
                    <div>
                        userId:<input type="text" name="userId" value={userId} onChange={this.changeHandler} />
                    </div>
                    <div>
                        title:<input type="text" name="title" value={title} onChange={this.changeHandler} />
                    </div>
                    <div>
                        body:<input type="text" name="body" value={body} onChange={this.changeHandler} />
                    </div>
                    <button type="submit">submit</button>
                </form>
            </div>
        )
    }
}

export default PostForm
