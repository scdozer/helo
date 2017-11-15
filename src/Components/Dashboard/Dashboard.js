import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Header from './../Header/Header';
import './Dashboard.css';

export default class Dashboard extends Component{

  render(){
    return (
      <div className="DashboardComponent">
        <Header location={this.props.location.pathname}/>


        <div className='Dashboard'>
        <div className='Dashboard-content'>
          <div className='Dashboard-header'>
            <div className='Dashboard-user'>
              <img
                className='Dashboard-user-image'
                src='http://via.placeholder.com/129x129'
                alt=''/>
              <div className='Dashboard-user-info'>
                <div className='Dashboard-user-info-name'>FirstName LastName</div>
                <Link to='/profile'>
                  <button className='Dashboard-user-info-button'>Edit Profile</button>
                </Link>
              </div>
            </div>
            <div className='Dashboard-welcome'>Welcome to Helo! Find recommended friends
              based on your similarities, and even search for them by name. The more you
              update your profile, the better recommendations we can make!</div>
          </div>
          <div className='Dashboard-recommended'>
            <div className='Dashboard-recommended-header'>
              <div className='Dashboard-recommended-header-title'>Recommended Friends</div>
              <div className='Dashboard-recommended-header-dropdown'>
                <div className='Dashboard-recommended-header-dropdown-label'>Sorted By</div>
                <div className='Dashboard-recommended-header-dropdown-box'>
                  <select className="select-style">
                    <option value="1">First Name</option>
                    <option value="2">Last Name</option>
                    <option value="3">Gender</option>
                    <option value="4">Hobby</option>
                    <option value="5">Hair Color</option>
                    <option value="6">Eye Color</option>
                    <option value="7">Birthday</option>
                  </select>
                </div>
              </div>
            </div>
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
