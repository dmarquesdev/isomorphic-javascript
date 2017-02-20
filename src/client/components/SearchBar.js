import React, { Component } from 'react';

import Icon from './Icon';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      searchType: 'name'
    };
  }

  onSearchClick() {
    console.log('Search!');
  }

  onSearchChange(event) {
    const searchTerm = event.target.value;
    this.setState({ searchTerm });
  }

  render() {
    return (
      <div className="search-bar">
        <div className="form-group">
          <div className="input-group">
            <input
              id="search-bar-input"
              type="text"
              className="form-control"
              placeholder="Insira uma pesquisa..."
              value={this.state.searchTerm}
              onChange={this.onSearchChange.bind(this)}
            />
            <div className="input-group-btn">
              <button
                className="btn btn-primary"
                onClick={this.onSearchClick.bind(this)}
              >
                <Icon name="search" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
