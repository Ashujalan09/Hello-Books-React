import React, { Component } from "react";
import "../../static/css/main.css";
import IndexNav from "../navbars/indexnav";

/**
 * Applicationshome page component
 */

class Index extends Component {
  render() {
    return (
      <React.Fragment>
        <IndexNav />
        <div className="header">
          <div className="bg-overlay">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="jumbotron">
                    <h1 className="display-4">Book It</h1>
                    <p className="lead">
                     Find and borrow
                      your favorite books.
                    </p>
                    <hr className="my-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Index;
