import React, { Component } from 'react'

class Hero5 extends Component {
  render() {
    return (
        <div className="hero5 p-5">
            <div className="container">
                <div className="row mt-5">
                    <div className="col-lg-12 d-flex align-items-center flex-column">
                        <span className='hero5-titlespan'>PRICING</span>
                        <h2 className='hero5-title'>Pricing based on their version</h2>
                        <div className="triangle my-3"></div>
                    </div>
                </div>
                <div className="row d-flex mt-5">
                    <div className="col-md-6 col-lg-4 text-center hero5item">
                        <div className=" py-5 px-4  bg-white  ">
                            <h3 className=' fs-3 hero5-title'>E-book</h3>
                            <h2 className=' fs-1 hero5-title'>$05</h2>
                            <ul className='my-5 p-0 d-flex flex-column align-items-center' style={{'listStyle': 'none'}}>
                                <li className='hero5-myli py-2'>Complete Book </li><hr className='w-75 m-1' />
                                <li className='hero5-myli py-2'>PDF and EPUB</li><hr className='w-75 m-1' />
                                <li className='hero5-myli py-2'>Hardcover Book</li><hr className='w-75 m-1' />
                                <li className='hero5-myli py-2'>Access to Downalds</li><hr className='w-75 m-1' />
                            </ul>
                            <a href="/" className='btn hero5-mya position-relative   'style={{'letterSpacing': '0'}}>BUY NOW</a>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 text-center hero5item">
                        <div className=" py-5 px-4  bg-white  ">
                            <h3 className=' fs-3 hero5-title uniquetitle'>Bundle</h3>
                            <h2 className=' fs-1 hero5-title'>$15</h2>
                            <ul className='my-5 p-0 d-flex flex-column align-items-center' style={{'listStyle': 'none'}}>
                                <li className='hero5-myli py-2'>Complete Book </li><hr className='w-75 m-1' />
                                <li className='hero5-myli py-2'>PDF and EPUB</li><hr className='w-75 m-1' />
                                <li className='hero5-myli py-2'>Hardcover Book</li><hr className='w-75 m-1' />
                                <li className='hero5-myli py-2'>Access to Downalds</li><hr className='w-75 m-1' />
                            </ul>
                            <a href="/" className='btn hero5-mya position-relative   'style={{'letterSpacing': '0'}}>BUY NOW</a>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 text-center hero5item">
                        <div className=" py-5 px-4  bg-white  ">
                            <h3 className=' fs-3 hero5-title '>Hardcover</h3>
                            <h2 className=' fs-1 hero5-title'>$10</h2>
                            <ul className='my-5 p-0 d-flex flex-column align-items-center' style={{'listStyle': 'none'}}>
                                <li className='hero5-myli py-2'>Complete Book </li><hr className='w-75 m-1' />
                                <li className='hero5-myli py-2'>PDF and EPUB</li><hr className='w-75 m-1' />
                                <li className='hero5-myli py-2'>Hardcover Book</li><hr className='w-75 m-1' />
                                <li className='hero5-myli py-2'>Access to Downalds</li><hr className='w-75 m-1' />
                            </ul>
                            <a href="/" className='btn hero5-mya position-relative   'style={{'letterSpacing': '0'}}>BUY NOW</a>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    )
  }
}

export default Hero5