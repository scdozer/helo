import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Header.css';
import home from './../../assets/home.png';
import search from './../../assets/search.png';


export default class Header extends Component{

  render(){
    return (
      <div className="Header">
        <ul className="list-inline">
          <li><h1>Helo</h1></li>
          <Link to='/'><li><img src={home} alt="home"/></li></Link>
          <Link to='/search'><li><img src={search} alt="search"/></li></Link>
        </ul>

        <h2>Dashboard</h2>
        <h2>Logout</h2>

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
