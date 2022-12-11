import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0 };
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpan);
  }
  setSpan = () => {
    const clientHeight = this.imageRef.current.clientHeight;
    const spans = Math.ceil(clientHeight / 10 + 1);
    this.setState({ spans: spans });
  };
  render() {
    const { urls, description } = this.props.image;
    return (
      <div className=" " style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img
          className="ui centered image medium rounded"
          ref={this.imageRef}
          src={urls.regular}
          alt={description}
        />
      </div>
    );
  }
}

export default ImageCard;
