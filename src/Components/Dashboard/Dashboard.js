import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Header from './../Header/Header';
import './Dashboard.css';

export default class Dashboard extends Component{

  render(){
    return (
      <div className="Dashboard">
        <Header location={this.props.location.pathname}/>


        <div className='Dashboard-Main'>
          <div className='Dashboard-content'>
            <div className='Dashboard-user'>
              <img
                className='Dashboard-user-image'
                src='http://via.placeholder.com/129x129'
                alt=''/>
              <div className='Dashboard-user-info'>
                <div className='Dashboard-user-info-name'>First <br/> Last</div>
                <Link to='/profile'>
                  <button className='Dashboard-user-info-button'>Edit Profile</button>
                </Link>
              </div>
            </div>
            <div className='Dashboard-welcome'>Welcome to Helo! Find recommended friends
              based on your similarities, and even search for them by name. The more you
              update your profile, the better recommendations we can make!</div>
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
