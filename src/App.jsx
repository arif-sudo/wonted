import React, { Component } from 'react'
import Hero from './components/Hero'
import Hero2 from './components/Hero2'
import Hero3 from './components/Hero3'
import Hero4 from './components/Hero4'
import Hero5 from './components/Hero5'

class App extends Component {
  render() {
    return (
      <>
      <Hero />
      <Hero2/>
      <Hero3/>
      <Hero4 />
      <Hero5 />
      </>
    )
  }
}

export default App
