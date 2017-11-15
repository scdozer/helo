import React, { Component } from 'react';
import Header from './../Header/Header';
import './Profile.css';

export default class Profile extends Component{

  render(){
    return (
      <div className="Profile">
        <Header location={this.props.location.pathname}/>
        Profile
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
