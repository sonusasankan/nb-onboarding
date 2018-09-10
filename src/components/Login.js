import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import './Login.css';
import uuid from 'uuid';

import {Consumer} from '../Context';

 class Login extends Component {
  state = {
      id: '',
      email: '',
      password: '',
      avatar:''
  }
  
  onChange = (e) => {
      this.setState({
      [e.target.name]: e.target.value
      })
  }
  onSubmit = (dispatch, e) =>{
    e.preventDefault();
    const {id, email, password, avatar} = this.state;

    const newPerson = {
        id: uuid(),
        email,
        password,
        avatar
    }

    dispatch({ type:'ADD_CONTACT', payload: newPerson})

    this.props.history.push('/welcome')
  }

  render() {
    return (
       <Consumer>
           {value => {
               const { dispatch } = value;
               return(
                    <div className="no-login-form-wrap">
                        <h2>Sign In</h2>
                        <Form onSubmit={this.onSubmit.bind(this, dispatch)}>
                            <FormGroup>
                                <Label for="exampleEmail">Email</Label>
                                <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder"
                                value={this.state.email}
                                onChange={this.onChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="examplePassword">Set password</Label>
                                <Input type="password" name="password" id="examplePassword" placeholder="password placeholder"
                                value={this.state.password}
                                onChange={this.onChange} />
                            </FormGroup>
                            <Button type="submit">Submit</Button>
                        </Form>
                    </div>
               )
           }}
       </Consumer> 
    )
  }
}


export default Login;