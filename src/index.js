import React from 'react'
import ReactDOM from 'react-dom'
import Slider from './Slider'

class SliderApp {
  constructor(props) {
    ReactDOM.render(
      <Slider
        slides={props.slides}/>, 
      props.node
    )
  }
}

module.exports = SliderApp