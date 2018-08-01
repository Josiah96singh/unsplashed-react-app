import React, { Component } from "react";
import StackGrid from "react-stack-grid";
import "../App.css";

class ListImages extends Component {
  render() {
    return (
      <StackGrid
        gutterWidth={10}
        gutterHeight={10}
        columnWidth={300}
        monitorImagesLoaded={true}
      >
        {this.props.images.map(data => (
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
    );
  }
}

export default ListImages;
