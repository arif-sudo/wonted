import React, { Component } from 'react'

const hero4img = [
    'https://wonted-react.vercel.app/assets/images/chapter-preview/1.jpg',
    'https://wonted-react.vercel.app/assets/images/chapter-preview/2.jpg',
    'https://wonted-react.vercel.app/assets/images/chapter-preview/3.jpg',
    'https://wonted-react.vercel.app/assets/images/chapter-preview/4.jpg'
]
class Hero4Menu extends Component {
    render() {
        return (
            <div className="col-lg-3  g-3">
                <img src={this.props.img} className="img-fluid" alt="" />
            </div>
        )
    }
}
class Hero4 extends Component {
    render() {
        return (
            <div className="hero4 p-5 mb-4">
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-lg-12 d-flex flex-column align-items-center">
                            <span className='hero4-titlespan'>CHAPTER PREVIEW</span>
                            <h2 className='hero4-title'>Read some chapter free</h2>
                            <div className="triangle my-3"></div>
                        </div>
                    </div>
                    <div className="row my-5">
                        {hero4img.map(item => <Hero4Menu img={item} />)}
                    </div>
                </div>
            </div>
        )
    }
}

export default Hero4