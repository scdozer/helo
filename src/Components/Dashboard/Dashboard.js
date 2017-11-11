import React, { Component } from 'react';
import Header from './../Header/Header';
import './Dashboard.css';

export default class Dashboard extends Component{
  
  render(){
    return (
      <div className="Dashboard">
        <Header />
        Dashboard
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