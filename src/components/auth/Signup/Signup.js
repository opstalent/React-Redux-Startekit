import React from 'react';
import { Button, Checkbox, Form, Grid } from 'semantic-ui-react';

const styles = {
  root: {
    marginTop: '5%'
  }
}

export default class Signup extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
        <Grid centered style={styles.root}>
          <Grid.Column width={6}>
            <Form>
              <Form.Field>
                <label>Email</label>
                <input type="email" placeholder="Email here..." />
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <input type="password" placeholder="Password here..." />
              </Form.Field>
              <Form.Field>
                <label>Confirm Password</label>
                <input type="password" placeholder="Confirm Password here..." />
              </Form.Field>
              <Form.Field>
                <Checkbox label="I agree to the Terms and Conditions" />
              </Form.Field>
              <Button type="submit">Sign Up</Button>
            </Form>
          </Grid.Column>
        </Grid>
      )
    }
}


//this component will be replaced with redux-form
