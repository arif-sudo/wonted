import React, { Component } from 'react'
const hero3Menu = [
  'Chapter-01',
  'Chapter-02',
  'Chapter-03',
  'Chapter-04',
  'Chapter-05',
  'Chapter-06',
  'Chapter-07',
]
class Hero3Menu extends Component {
 
  render() {
    return (
      <div className="accordion-item my-3">
  <h2 className="accordion-header" id="panelsStayOpen-headingThree">
    <button  className="accordion-button collapsed fs-5 hero3-btn" type="button" data-bs-toggle="collapse" data-bs-target={`#${this.props.item}`} aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
      {this.props.item}
    </button>
  </h2>
  <div id={this.props.item} className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
    <div className="accordion-body">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ea dolore amet laudantium quibusdam nobis labore molestiae odit voluptas velit!
    </div>
  </div>
</div>

    )
  }
}


class Hero3 extends Component {
  render() {
    return (
      <div className="hero3 p-5">
        <div className="container">
          <div className="row mt-5">
            <div className="col-lg-12 mb-5 d-flex flex-column align-items-center">
              <span className='hero3-titlespan'>CHAPTERS</span>
              <h2 className='hero3-title'>Chapters we've covered</h2>
              <div className="triangle my-3"></div>
            </div>
          </div>
          <div className="row gx-5 my-5">
            <div className="col-lg-6 d-flex flex-column align-items-center">
              <img className='img-fluid' src="https://wonted-react.vercel.app/assets/images/hero-2.png" alt="" />
            </div>
            <div className="col-lg-6">
              <div class="accordion" >
                {hero3Menu.map(item => <Hero3Menu item={item} />)}
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default Hero3