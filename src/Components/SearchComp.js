import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Search from "grommet/components/Search";
import Button from "grommet/components/Button";
import "../App.css";
import axios from "axios";
import { default as GrommetApp } from "grommet/components/App";

var classNames = require("classnames");

class SearchComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Query: "",
      SearchedPictures: []
    };
    this.inputChanged = this.inputChanged.bind(this);
    this.SearchPhotos = this.SearchPhotos.bind(this);
  }

  //Event invoking function
  inputChanged(event) {
    this.setState({ Query: event.target.value });
  }

  //Search function
  SearchPhotos(event) {
    axios
      .get(
        "https://api.unsplash.com/search/photos?page=1&query=" +
          this.state.Query +
          "&client_id=e00fad45637e673839f2297d9443d65ccc65b78c2a0c2d48b199150d00d5b382"
      )
      .then(response => {
        this.setState({ SearchedPictures: response.data.results });
        // console.log(this.state.SearchedPictures);
        this.props.history.push("/result", {
          state: {
            Pictures: this.state.SearchedPictures
          }
        });
      }).then;
    this.setState({ Query: "", SearchedPictures: [] });
    event.preventDefault();
  }

  //Routing back
  onNavigate = () => {
    this.props.history.push("/");
  };

  render() {
    const onSearch = this.props.location.pathname === "/result";
    return (
      <div
        className={classNames("App", {
          "search-bar-position-updated": onSearch
        })}
      >
        <GrommetApp>
          {onSearch && (
            <Button
              className="homeBtn"
              label="Home"
              primary={true}
              onClick={this.onNavigate}
            />
          )}

          <br />

          <Search
            className="searchInput"
            inline={true}
            value={this.state.Query}
            onDOMChange={this.inputChanged}
          />
          <br />
          <Button
            className="searchBtn"
            label="Search"
            primary={true}
            onClick={this.SearchPhotos}
          />
        </GrommetApp>
      </div>
    );
  }
}

export default withRouter(SearchComp);
