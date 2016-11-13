import React from 'react'
import Slide from './Slide'

class Slider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      i: 0,
      l: this.props.slides.length
    }
    this.slideLeft = this.shift.bind(this, -1)
    this.slideRight = this.shift.bind(this, 1)
  }
  shift(shift) {
    const current = this.state.i
    let i = this.state.i + shift
    this.setState({i})
  }
  render() {
    return <div className="container">
      <div
        className="slides"
        style={{
          transform: `translateX(${-this.state.i * 100}%)`
        }}
      >
        {this.props.slides.map((slide, i) => {
          return <Slide
            key={i}
            slide={slide}/>
        })}
      </div>

      {this.state.i > 0 && <div
        className="arrow left"
        onClick={this.slideLeft}
      />}

      {this.state.i + 1 < this.state.l && <div
        className="arrow right"
        onClick={this.slideRight}
      />}
    </div>
  }
}

export default Slider