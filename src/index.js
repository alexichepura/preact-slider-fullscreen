import { h, render } from 'preact'
import Slider from './Slider'

class SliderApp {
  constructor(props) {
    render(
      <Slider slides={props.slides}/>,
      props.node
    )
  }
}

module.exports = SliderApp