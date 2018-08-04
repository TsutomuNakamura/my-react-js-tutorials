import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {name: "Tsutomu"};
  }
  render() {
    setTimeout(
      () => { this.setState({title: "Welcome Tsutomu!"}); },
      2000
    );
    return (
      <div>
        <Header title={this.state.title} />
        <Header title={"Thank you"} />
        <Footer />
      </div>
    );
  }
}
