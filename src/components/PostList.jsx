import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchPostsAndUsers} from './actions';
import Users from './Users'

 class PostList extends Component {
        componentDidMount() {
            this.props.fetchPostsAndUsers()
        }

        renderList () {
            return this.props.posts.map(post=> {
                return (
                    <div  className = 'content' key = {post.id}>
                       <h2>{post.title}</h2> 
                     <Users userId= {post.userId}/>
                        </div>
                )
            })
        }

    render() {
        return (
            <div>
               {this.renderList()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps, {fetchPostsAndUsers})(PostList)
