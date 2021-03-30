import React from "react";

class Result extends React.Component {
  render() {
    if (this.props.error !== "") {
      return (
        <div>
          <p>
            About {this.props.result.length} results ({this.props.time} seconds)
          </p>
          <p>{this.props.error}</p>
        </div>
      );
    }
    return (
      <div>
        <div>
          <p>
            About {this.props.result.length} results ({this.props.time} seconds)
          </p>
        </div>
        {this.props.result.map((n) => {
          return <li key={n}>{n}</li>;
        })}
      </div>
    );
  }
}

export default Result;
