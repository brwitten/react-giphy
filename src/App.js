import React, { Component } from 'react';
import HelloWorld from './HelloWorld.js';

class App extends Component {
  render(){
    return (
      <div>
        <header>
          <h1>Welcome, to Giffaw in React</h1>
        </header>
        <HelloWorld />
      </div>
    )
  }
}

export default App;
