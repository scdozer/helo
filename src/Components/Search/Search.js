import React, { Component } from 'react';
import Header from './../Header/Header';
import './Search.css';

export default class Search extends Component{
  
  render(){
    return (
      <div className="Search">
        <Header /> 
        Search
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