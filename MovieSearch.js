import React, { Component } from 'react';

class MovieSearch extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      search: '',
      field: '',
    };
    this.state = this.initialState;

  }

  handleRadioChange = (event) => {
    this.setState({
      searchType: event.target.value,
    });
  };

  handleSearchChange = (event) => {
    this.setState({
      searchText: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
  };

  render() {

    return (
      <form onSubmit={this.handleSubmit}>
        <div>
        <h2>Search</h2>
        <form> onSubmit={this.handleSubmit}>
            <input
                type="text"
                id="search"
                name"search"
                value={this.state.search}
                onChange={this.handleSearchChange}
                />
        <label>
          <input
            type="radio"
            value="title"
            checked={this.state.searchType === 'title'}
            onChange={this.handleRadioChange}
          />
          Title
          <input
            type="radio"
            value="actor"
            checked={this.state.searchType === 'actor'}
            onChange={this.handleRadioChange}
          />
          Actor
          <input
            type="radio"
            value="director"
            checked={this.state.searchType === 'director'}
            onChange={this.handleRadioChange}
          />
          Director
        </label>
        <input
          type="text"
          value={this.state.searchText}
          onChange={this.handleSearchChange}
        />
        </form>
      </div>
        }
    }   

}

export default MovieSearch;