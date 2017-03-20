import React, { Component, PropTypes } from 'react';

import Icon from './Icon';

const ENTER_KEYCODE = 13;

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      searchType: 'name'
    };
  }

  onSearch() {
    this.props.onSearch(this.state.searchTerm);
  }

  onSearchChange(event) {
    const searchTerm = event.target.value;
    if (event.keyCode === ENTER_KEYCODE) {
      this.props.onSearch(searchTerm);
    } else {
      this.setState({ searchTerm });
    }
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
                onClick={this.onSearch.bind(this)}
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

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired
};

export default SearchBar;
