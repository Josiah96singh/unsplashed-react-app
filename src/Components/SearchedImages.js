import React, { Component } from "react";
import "../App.css";
import StackGrid from "react-stack-grid";

class SearchedImages extends Component {
  render(props) {
    return (
      <div className="pictures-inner-container">
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
