import React, { Component } from 'react'
import {Consumer} from '../Context';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';

export default class Welcome extends Component {

  render() {
    return (
      <Consumer>
          { value => {
             const { email } = value; 
              return(
                <div className="container">
                    <h1>Welcome {value.person.email}!</h1>
                    <div className="row">
                        <div className="col-md-6">
                            <Form onSubmit={value.addAvatar}>
                                <FormGroup check >
                                    <Label check>
                                    <Input type="radio" name="avatar"  value='male'/>{' '}
                                        male
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                    <Input type="radio" name="avatar"  value='female'/>{' '}
                                        female
                                    </Label>
                                </FormGroup>
                                <Button type="submit">Next</Button>
                            </Form>
                        </div>
                    </div>
                </div>
              )
          }}
      </Consumer>
    )
  }
}
