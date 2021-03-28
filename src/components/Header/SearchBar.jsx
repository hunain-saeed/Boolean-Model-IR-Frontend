import "./Header.css";
import React from "react";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Divider from "@material-ui/core/Divider";

function SearchBar() {
  const [name, setName] = React.useState("");
  function handleChange(e) {
    setName(e.target.value);
    
    console.log(name);
  }
  return (
    <div className="searchbar">
      <Paper
        className="paper"
        component="form"
        variant="outlined"
        elevation={3}
      >
        <InputBase
          className="paperinput"
          onChange={handleChange}
          value={name}
        />

        <IconButton className="papersearch" type="submit" aria-label="search">
          <Divider className="divider" orientation="vertical" />
          <SearchIcon className="searchButton" />
        </IconButton>
      </Paper>
    </div>
  );
}

export default SearchBar;
