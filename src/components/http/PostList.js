import React, { Component } from 'react'
import Axios from 'axios';

class PostList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: [],
            errorMsg: ''
        }
    }

    componentDidMount() {
        Axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                console.log(response)
                this.setState({ posts: response.data })
            })
            .catch(error => {
                console.log(error)
                this.setState({ errorMsg: 'Error occur!' })
            })
    }

    render() {
        const { posts, errorMsg } = this.state
        return (
            <div>
                <h2>List of posts</h2>
                {
                    posts.length ?
                        posts.map(post => <div key={post.id}>{post.title}</div>)
                        : null
                }
                {
                    errorMsg ? <div>{errorMsg}</div> : null
                }
            </div>
        )
    }
}

export default PostList
