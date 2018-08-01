import React, { Component } from "react";

import axios from "axios";
import "./App.css";

import ListPictures from "./Components/ListImages";

import Tabs from "grommet/components/Tabs";
import Tab from "grommet/components/Tab";

import { default as GrommetApp } from "grommet/components/App";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      PopularPictures: [],
      LatestPictures: []
    };
    this.listPopularPhotos = this.listPopularPhotos.bind(this);
    this.listLatestPhotos = this.listLatestPhotos.bind(this);
  }

  componentDidMount() {
    this.listPopularPhotos();
    this.listLatestPhotos();
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

  render() {
    return (
      <div className="App">
        <GrommetApp>
          <div className="body-content">
            <Tabs>
              <Tab title="Popular">
                <div className="pictures-outer-container">
                  <ListPictures images={this.state.PopularPictures} />
                </div>
              </Tab>
              <Tab title="Latest">
                <div className="pictures-outer-container">
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
