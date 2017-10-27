import React, { Component } from 'react';
import HelloWorld from './components/HelloWorld.js';
import Search from './components/Search.js';
import SearchContainer from './containers/SearchContainer.js'
import './Home.css';


class Home extends Component {
  render(){
    return (
      <div>
        <header>
          <h1>Welcome, to Giffaw in React</h1>
        </header>
        <HelloWorld />
        <SearchContainer />
      </div>
    )
  }
}

export default Home;
