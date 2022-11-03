import React from "react";
import ReactDOM from "react-dom";

import "./base.scss"
import "./index.scss";
import "./grid.scss"
import "./responsive.scss"
import Header from "home/Header";
import Footer from "home/Footer";
import CartContent from "./CartContent";

const App = () => (
  <div className="app">
    <Header />
    <div className="container-df">
      <div className="grid wide">
        <div className="row-df sm-gutter content">
          <div className="col-df l-12 m-0 c-0">
            <CartContent />
          </div>


        </div>
      </div>
    </div>
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
