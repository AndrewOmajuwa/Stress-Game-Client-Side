import React, { Component } from 'react'
import {connect} from 'react-redux'
import {succesUser} from '../actions/user'
import CreateUser from './CreateUser'


class UserFormContainer extends Component {
  state = {
    name: ''
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.succesUser(this.state.name)
  }

  onChange = (event) => {
    this.setState({
    [event.target.name]: event.target.value
    })
  }
  
  render() {
    return (
      <div className='container'>
        <CreateUser 
          onSubmit={this.onSubmit} 
          onChange={this.onChange} 
          values={this.state}
        />
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, {succesUser})(UserFormContainer)