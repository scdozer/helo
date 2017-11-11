import React, { Component } from 'react';
import './Auth.css';
import logo from './../../assets/logo.png';
export default class Auth extends Component{

  render(){
    return (
      <div className="Auth">
        <div className="Login-box">
          <img src={logo} alt="Helo App"/>
          <h1>Helo</h1>
          <a href="http://localhost:3005/auth"><button>Login/Register</button></a>
        </div>
      </div>
    )
  }
}

// function mapStateToProps( state ) {
// 	if(!state) return {};
//   return{
//     state
//   }
// }
//
// export default connect( mapStateToProps, {addUserId} )( Login );
