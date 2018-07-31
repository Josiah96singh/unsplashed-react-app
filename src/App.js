import React, { Component } from "react";

import axios from "axios";
import "./App.css";

import ListPictures from "./Components/ListImages";
import SearchedImages from "./Components/SearchedImages";

import Search from "grommet/components/Search";
import Button from "grommet/components/Button";
import Tabs from "grommet/components/Tabs";
import Tab from "grommet/components/Tab";

import { default as GrommetApp } from "grommet/components/App";
import createHistory from "history/createBrowserHistory";

const history = createHistory();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      PopularPictures: [],
      LatestPictures: [],
      Query: "",
      SearchedPictures: []
    };
    this.listPopularPhotos = this.listPopularPhotos.bind(this);
    this.listLatestPhotos = this.listLatestPhotos.bind(this);
    this.inputChanged = this.inputChanged.bind(this);
    this.SearchPhotos = this.SearchPhotos.bind(this);
  }

  componentDidMount() {
    this.listPopularPhotos();
    this.listLatestPhotos();
  }

  inputChanged(event) {
    this.setState({ Query: event.target.value });
  }

  listPopularPhotos() {
    axios
      .get(
        "https://api.unsplash.com/photos?&order_by=popular&per_page=40&client_id=e00fad45637e673839f2297d9443d65ccc65b78c2a0c2d48b199150d00d5b382"
      )
      .then(data => {
        this.setState({ PopularPictures: data.data });
        console.log(this.state.PopularPictures);
      });
  }

  listLatestPhotos() {
    axios
      .get(
        "https://api.unsplash.com/photos?&order_by=latest&per_page=40&client_id=e00fad45637e673839f2297d9443d65ccc65b78c2a0c2d48b199150d00d5b382"
      )
      .then(data => {
        this.setState({ LatestPictures: data.data });
        // console.log(this.state.LatestPictures);
      });
  }

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

  render() {
    return (
      <div className="App">
        <GrommetApp>
          <Search
            className="SearchBar"
            inline={true}
            value={this.state.Query}
            onDOMChange={this.inputChanged}
          />

          <div className="SearchButton">
            <Button
              className="Search"
              label="Search"
              primary={true}
              onClick={this.SearchPhotos}
            />
          </div>

          <div className="Tabs">
            <Tabs>
              <Tab title="Popular">
                <div className="imagebox">
                  <ListPictures images={this.state.PopularPictures} />
                </div>
              </Tab>
              <Tab title="Latest">
                <div className="imagebox">
                  <ListPictures images={this.state.LatestPictures} />
                </div>
              </Tab>
            </Tabs>
          </div>
        </GrommetApp>
      </div>
    );
  }
}

export default App;
