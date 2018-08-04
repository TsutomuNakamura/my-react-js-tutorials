import React from "react";
import Title from "./Header/Title";

export default class Header extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <Title title={this.props.title} />
      </div>
    );
  }
}
