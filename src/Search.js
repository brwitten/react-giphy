import React, { Component } from 'react';

class Search extends Component {
  constructor (props) {
    super()
    this.state = {
      gifQuery: ""
    }
  }
  storeQuery (e) {
    console.log("query storing!");
    this.setState({gifQuery: e.target.value});
  }
  submitQuery (e) {
    this.setState({gifQuery: e.target.value});
    console.log("state of gif query:" + this.state.gifQuery);
  }
  render () {
    return (
      <div>
        <input type="text" placeholder="Search here!" value={this.state.gifQuery} onChange={(e) => this.storeQuery(e)}/>
        <button onClick={(e) => this.submitQuery(e)}>Submit</button>
      </div>
    )
  }
}

export default Search;
