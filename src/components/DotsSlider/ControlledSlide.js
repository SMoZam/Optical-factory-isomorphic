import React from 'react'

function ControlledSlide( props ) {
  // const styles = {
  //   background: `url(${content.image})`,
  //   backgroundSize: 'cover',
  //   backgroundRepeat: 'no-repeat',
  //   // backgroundPosition: 'center',

  // }
  return <div className="controlled-slide">
    {/* <img src={content.image} alt="content"/> */}
    {props.displayMobile ?
      <img src={props.content.imageMobile} alt="slide mobile" /> :
      <img src={props.content.image} alt="slide" />
    }
  </div>
}

export default ControlledSlide

