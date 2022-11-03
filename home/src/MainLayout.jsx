import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import "./base.scss"
import "./index.scss";
import "./grid.scss"
import "./responsive.scss"
import Header from "home/Header";
import Footer from "home/Footer";
import PDPContent from "pdp/PDPContent";
import HomeContent from "home/HomeContent";
import CartContent from "cart/CartContent";


export default function MainLayout() {
    return (
        <Router>
            <div className="app">
                <Header />
                <div className="container-df">
                    <div className="grid wide">

                        <Routes >
                            <Route exact path="/" element={<HomeContent />}></Route>
                            <Route path="/products/:id" element={<PDPContent />}></Route>
                            <Route path="/cart" element={<CartContent />}></Route>
                            
                        </Routes>
                    </div>
                </div>
                <Footer />
            </div>
        </Router>
    )
};
