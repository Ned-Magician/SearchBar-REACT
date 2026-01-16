import React from "react";
import Unsplash from "../Api/Unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = { images: [] };
  onSearchSubmit = async (term) => {
    const responce = await Unsplash.get("/search/photos", {
      params: { query: term },
    });
    this.setState({ images: responce.data.results });
  };
  render() {
    return (
      <div
        className="ui container ui secondary segment"
        style={{ marginTop: "50px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length} Images <hr />
        <ImageList images={this.state.images} />
          </div>
    );  
  }
}
export default App;
