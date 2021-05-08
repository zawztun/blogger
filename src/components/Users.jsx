import React, { Component } from 'react'
 import {connect} from 'react-redux';
//  import {fetchUser} from './actions'

class Users extends Component {
    // componentDidMount() {
    //     this.props.fetchUser(this.props.userId)
    // }
    render() {
        //const user = this.props.users.find((user)=>user.id === this.props.userId); // fixed in mapstatTo
        const {user} = this.props;
        if(!user){
            return null;
        }
       return <div>{user.name}</div>  
}
}

const mapStateToProps = (state, ownProps) => {
    return {user: state.users.find(user => user.id === ownProps.userId)}
}

export default connect(mapStateToProps)(Users)
