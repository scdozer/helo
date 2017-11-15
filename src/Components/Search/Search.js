import React, { Component } from 'react';
import Header from './../Header/Header';
import './Search.css';

let fakeFriends = [
  {
    id: 1,
    name: 'Pee-wee',
    imageUrl: 'http://via.placeholder.com/120x120'
  }, {
    id: 2,
    name: 'Cowboy Curtis',
    imageUrl: 'http://via.placeholder.com/120x120'
  }, {
    id: 3,
    name: 'Captain Carl',
    imageUrl: 'http://via.placeholder.com/120x120'
  }
]

export default class Search extends Component{

  render(){
    return (
      <div className="SearchComponent">
        <Header location={this.props.location.pathname}/>

        <div className='Search'>
          <div className='Search-content'>
            <div className='Search-form'>
              <div className='Search-form-dropdown'>
                <select className="select-style">
                  <option value="1">First Name</option>
                  <option value="2">Last Name</option>
                </select>
              </div>
              <div className='Search-form-input'></div>
              <div className='Search-form-button-search'></div>
              <div className='Search-form-button-reset'></div>
            </div>
            <div className='Search-friends'>
              {fakeFriends.map((friend) => {
                return <div className='Search-friend-card'>
                  <img className='Search-friend-card-image' src={friend.imageUrl} alt=''/>
                  <div className='Search-friend-card-name'>{friend.name}</div>
                  <button className='Search-friend-card-button'>Add Friend</button>
                </div>
              })}
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
