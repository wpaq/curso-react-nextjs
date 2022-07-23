import "./styles.css";

import { Component } from "react";

export class SearchInput extends Component {
  render() {
    const { searchValue, handleChange } = this.props;

    return (
      <input
        type="search"
        className="search-input"
        onChange={handleChange}
        value={searchValue}
        placeholder="Type your search"
      />
    );
  }
}
