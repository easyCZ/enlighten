import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from './LoginActions';
import {Button} from 'react-toolbox/lib/button';
import Input from 'react-toolbox/lib/input';


class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: ''
    }
  }

  onSubmit(event) {
    event.preventDefault();
    if (this.state.name) this.props.login(this.state.name);
  }

  render() {
    return (
      <form onSubmit={(e) => this.onSubmit(e)}>
        <Input
          required
          floating={false}
          type='text'
          label='Name'
          name='name'
          value={this.state.name}
          onChange={(e) => this.setState({name: e})}
        />
        <Button label='Login' flat primary />
      </form>
    )
  }

}

export default connect(
  (state) => ({}),
  (dispatch) => ({ login: (username) => dispatch(login(username)) })
)(Login);