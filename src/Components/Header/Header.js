import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Header.css';
import home from './../../assets/home.png';
import search from './../../assets/search.png';


export default class Header extends Component{
  constructor(props){
    super(props);
    this.state={
      location: ''
    }
  }

  componentDidMount(props){
    this.setState({
      location: this.props.location
    })
  }

  render(){
    return (
      <div className="Header">
        <ul className="list-inline">
          <li><h1>Helo</h1></li>
          <Link to='/'><li><img src={home} alt="home"/></li></Link>
          <Link to='/search'><li><img src={search} alt="search"/></li></Link>
        </ul>

        <h2>
          { (() => {
            switch (this.state.location) {
              case "/": return 'Dashboard';
              case '/profile': return 'Profile';
              case '/search': return 'Search';
              default:      return "Dashboard";
            }
          }) ()}
        </h2>

        {/* <a href="http://localhost:3005/auth/logout"> */}
        <a href="http://localhost:3005/auth/logout">
          <h2>Logout</h2>
        </a>

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
