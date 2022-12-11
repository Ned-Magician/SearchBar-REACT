import React from "react";
class SearchBar extends React.Component {
  state = { term: "" };
  onSubmitForm = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div>
        <form className="ui form" onSubmit={this.onSubmitForm}>
          <div className="field">
            <label className="ui center aligned header item">
              Search Images
            </label>
            <br />
            <div className="ui icon input">
              <i className="search icon"></i>
              <input
                style={{ margin: "10px 0" }}
                type="text"
                placeholder="Search here ..."
                value={this.state.term}
                onChange={(event) =>
                  this.setState({ term: event.target.value })
                }
              />
            </div>
          </div>
        </form>
        <br />
        <br />
      </div>
    );
  }
}

export default SearchBar;
