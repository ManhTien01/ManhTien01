import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import "./base.scss"
import "./index.scss";
import "./grid.scss"
import "./responsive.scss"
import Header from "home/Header";
import Footer from "home/Footer";
import PDPContent from "./PDPContent";
    

const App = () => (
  <Router>
    <div className="app">
      <Header />
      <div className="container-df">
        <div className="grid wide">
          
        <Routes >
           <Route path="/products/:id" element={ <PDPContent />}></Route>
        
        </Routes>
        </div>
      </div>
      <Footer />
    </div>
  </Router>
);
ReactDOM.render(<App />, document.getElementById("app"));
