import React from 'react'

class Slide extends React.Component {
  render() {
    const {title, url, image} = this.props.slide
    return <div
      className="slide"
      style={{
        backgroundImage: `url(${image})`
      }}>
      <div className="title">{title}</div>
    </div>
  }
}

export default Slide