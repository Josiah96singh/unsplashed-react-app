import React, { Component } from "react";
import "../App.css";
import Button from "grommet/components/Button";
import StackGrid, { transitions } from "react-stack-grid";
import Search from "grommet/components/Search";

import createHistory from "history/createBrowserHistory";

const history = createHistory();

class SearchedImages extends Component {
  onNavigate = () => {
    history.goBack();
  };
  render(props) {
    return (
      <div>
        <div className="BackSpace">
          <div className="BackHeader">
            <h1>Results</h1>
          </div>
          <Button
            className="Backbtn"
            label="Home"
            primary={true}
            onClick={this.onNavigate}
          />
        </div>
        <StackGrid
          gutterWidth={10}
          gutterHeight={10}
          columnWidth={300}
          monitorImagesLoaded={true}
        >
          {this.props.location.state.state.Pictures.map(data => (
            <div key={data.id}>
              <img
                className="images"
                width={300}
                src={data.urls.regular}
                alt="Unsplash"
              />
            </div>
          ))}
        </StackGrid>
      </div>
    );
  }
}

export default SearchedImages;
