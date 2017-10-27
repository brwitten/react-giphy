import React, { Component } from 'react';

class Search extends Component {
  render () {
    return (
      <div className="Search">
        <form onSubmit={this.props.submitQuery}>
          <input type="text"
                placeholder="Search here!" value={this.props.gifQuery} onChange={this.props.storeQuery}/>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default Search;
