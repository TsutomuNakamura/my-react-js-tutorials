import React from "react";
import { Link, withRouter } from "react-router-dom";

import Footer from "../components/layout/Footer";
import Nav from "../components/layout/Nav";

class Layout extends React.Component {
  render() {
    const { location } = this.props;
    const containerStyle = {
      marginTop: "60px"
    };
    return (
      <div>
        <Nav location={location} />
        <div class="container" style={containerStyle}>
          <div class="row">
            <div class="col-lg-12">
              {this.props.children}
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}
export default withRouter(Layout);
