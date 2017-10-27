import React, { Component } from 'react';
import Search from '../components/Search.js';
import Results from '../components/Results.js';

class SearchContainer extends Component {
  constructor (props) {
    super()
    this.state = {
      gifQuery: "",
      hasSubmitted: false,
      results: []
    }
  }
  storeQuery (e) {
    console.log("query storing!");
    this.setState({gifQuery: e.target.value});
  }
  submitQuery (e) {
    e.preventDefault();
    this.setState({gifQuery: e.target.value});
    console.log("state of gif query:" + this.state.gifQuery);
    let searchResults = { "data": [
        {
          "type": "gif",
          "id": "iuHaJ0D7macZq",
          "url": "http://giphy.com/gifs/cat-day-tomorrow-iuHaJ0D7macZq",
          "source": "https://www.reddit.com/r/CatGifs/comments/5f0h9a/tomorrow_is_legs_day/",
          "rating": "pg",
          "images": {
            "fixed_height": {
              "url": "http://media4.giphy.com/media/iuHaJ0D7macZq/200.gif"
            }
          }
        }
      ]
    }
    this.setState({hasSubmitted: true,
      results: searchResults.data});
  }
  render() {
      return (
        <div className="SearchContainer">
          <Search
            submitQuery={(e) => this.submitQuery(e)}
            storeQuery={(e) => this.storeQuery(e)}
            gifQuery={this.state.gifQuery}
          />
          <Results searchResults={this.state.results}/>
        </div>
      );
    }
}

export default SearchContainer;
