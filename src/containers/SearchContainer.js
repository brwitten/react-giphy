import React, { Component } from 'react';
import Search from '../components/Search.js';

class SearchContainer extends Component {
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
    console.log("submitQuery!");
    e.preventDefault();
    this.setState({gifQuery: e.target.value});
    console.log("state of gif query:" + this.state.gifQuery);
  }
  render() {
      return (
        <div className="SearchContainer">
          <Search
            submitQuery={(e) => this.submitQuery(e)}
            storeQuery={(e) => this.storeQuery(e)}
            gifQuery={this.state.gifQuery}
          />
        </div>
      );
    }
}

export default SearchContainer;
