import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './../Header/Header';
import './Profile.css';

export default class Profile extends Component{

  render(){
    return (
      <div className="ProfileComponent">
        <Header location={this.props.location.pathname}/>

        <div className='Profile'>
           <div className='Profile-content'>
             <div className='Profile-header'>
               <div className='Profile-user'>
                 <img
                   className='Profile-user-image'
                   src='http://via.placeholder.com/129x129'
                   alt=''/>
                 <div className='Profile-user-info'>
                   <div className='Profile-user-info-name'>FirstName LastName</div>
                 </div>
               </div>
               <div className='Profile-buttons'>
                 <button className='Profile-button-update'>Update</button>
                 <Link to="/">
                   <button className='Profile-button-cancel'>Cancel</button>
                 </Link>
               </div>
             </div>
             <div className='Profile-form'>
             </div>
           </div>
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
