import React from 'react'

const ControlledSlide = ({ content }) => {
  const styles = {
    background: `url(${content.image})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundColor: "#ffffff"

  }

  return <div className="controlled-slide" style={styles}>
  </div>
}

export default ControlledSlide