import React, { Component } from 'react';

class BlogDots extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
    // this.handleActiveButton = this.handleActiveButton.bind(this);
  }



  // clicked = ()=> {
  // this.setState({active: !this.state.active  })
  // }

  render() {

    return (
      <React.Fragment>
        <div className="blog-next-dot" onClick={this.props.goToNext}>
          <img src="/images/arrow.svg" alt=""/>
          {/* <svg xmlns="http://www.w3.org/2000/svg"  >
            <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
            </svg> */}
        </div>
        <img className="blog-separation-dot" src="/images/horizontal_line.png" alt="horizontal_line" />
        <div className="blog-previous-dot" onClick={this.props.goToPrevious}>
          <img src="/images/arrow.svg" alt="" />
          {/* <svg xmlns="http://www.w3.org/2000/svg" >
            <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
            </svg> */}
        </div>
      </React.Fragment>

    );
  }
}

export default BlogDots;