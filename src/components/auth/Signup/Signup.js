import React from 'react';
import Signupform from './Form/signupform.js';

export default class Signup extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <Signupform/>
      </div>
      )
    }
}


//this component will be replaced with redux-form
