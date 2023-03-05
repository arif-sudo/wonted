import React, { Component } from "react";
import Header from "./Header";
import herophoto from "../img/hero.png";
export class Hero extends Component {
  render() {
    return (
      <div className="d-flex flex-column  align-items-center">
      
        <Header  />
      <div className="hero  pb-5">

        <div className="x1 circle"></div>
        <div className="x2 circle"></div>
        <div className="x3 circle"></div>
        <div className="x4 circle"></div>
        <div className="container myCont ">
          <div className="row">
            <div className="col-lg-6 col-sm-12 col-md-6 ">
              <p className="mt-5 menu-text"> LET'S MAKE THE BEST INVESTMENT</p>
              <h2 className="mt-5 menu-h1">There Is No Friend As Loyal As A Book</h2>
              <p className="mt-5 menu-p">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad
                harum quibusdam, assumenda quia explicabo.
              </p>
              <div className=" mb-3 mt-5  group-1">
                <input
                  type="text"
                  className="form-control inp1 rounded-0 "
                  placeholder="Your Email"
                  aria-describedby="button-addon2"
                />
                <button
                  className="btn btn1 rounded-0 text-white"
                  type="button"
                  id="button-addon2"
                >
                  Subscribe
                </button>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 col-md-6 d-flex flex-column align-items-center position-relative">
              <div className="left-box">
                <div className="text-center text-white">
                <h5 className="fs-4 fw-bold m-0">NY</h5>
                <span className="m-0">best seller</span>
                </div>
              </div>
              <img src={herophoto} className='img-fluid' alt="" />
            </div>
          </div>
        </div>
        
      </div>
      </div>
    );
  }
}

export default Hero;