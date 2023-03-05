import React, { Component } from 'react';

const hero2menu = [
  ['Experience', "https://wonted-react.vercel.app/assets/icons/ebook.svg"],
  ['Motivation', "https://wonted-react.vercel.app/assets/icons/dice-multiple.svg",],
  ['Goals', "https://wonted-react.vercel.app/assets/icons/goal.svg"],
  ['Vision', "https://wonted-react.vercel.app/assets/icons/brand-target.svg"]

];


class Hero2Item extends Component {
  render() {
    return (
      <div className="col-sm-6 mb-4 mt-3">
        <div className="p-4 bg-light hero2-box">
          <div className="icon mb-3">
            <img class="img-fluid ebook" src={this.props.img} alt="icon" width="40" height="40" />
          </div>
          <h3 className='my-3 hero2-myh3'>{this.props.title}</h3>
          <p className='hero2-myp'>Lorem ipsum dolor sit amet ametus conso tetur ading elitor fugit piatur iusto provid.</p>
        </div>
      </div>
    )
  }
}
class Hero2 extends Component {
  render() {
    return (
      <div className="hero2 p-5">
        <div className="container">
          <div className="row">
            <div className="col-12  my-5 d-flex align-items-center flex-column">
              <span className='hero2-titlespan'>WHY WONTED?</span>
              <h2 className='hero2-title'>What you will achieve by this book</h2>
              <div className="triangle my-3"></div>
            </div>
          </div>
          <div className="row gx-5">
            <div className="col-lg-6 mb-3 mb-lg-0">
              <div className="row">
                <div className="col-sm-12">
                  <div className="myBanner">
                    <img className='img-fluid' src="https://wonted-react.vercel.app/assets/images/achive2.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row">

                {hero2menu.map((item) => <Hero2Item title={item[0]} img={item[1]} />)}

              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Hero2