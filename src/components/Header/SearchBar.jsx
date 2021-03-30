import "./Header.css";
import React from "react";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Divider from "@material-ui/core/Divider";

class SearchBar extends React.Component {
  state = { query: "" };
  handleChange = (e) => {
    this.setState({ query: e.target.value });
  };
  
  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSearchSubmit(this.state.query.replace("/", "&"));
  };

  render() {
    return (
      <div className="searchbar">
        <Paper
          className="paper"
          component="form"
          variant="outlined"
          onSubmit={this.onFormSubmit}
          elevation={3}
        >
          <InputBase
            className="paperinput"
            onChange={this.handleChange}
            value={this.state.query}
          />

          <IconButton className="papersearch" type="submit" aria-label="search">
            <Divider className="divider" orientation="vertical" />
            <SearchIcon className="searchButton" />
          </IconButton>
        </Paper>
      </div>
    );
  }
}

export default SearchBar;
