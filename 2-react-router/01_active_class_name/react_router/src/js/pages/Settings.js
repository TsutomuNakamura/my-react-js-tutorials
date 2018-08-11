import React from "react";

export default class Settings extends React.Component {
  render() {
    const type = (this.props.match.params.mode == "extra"? " (for experts)": "");
    return (
      <h1>Settings{type}</h1>
    );
  }
}

