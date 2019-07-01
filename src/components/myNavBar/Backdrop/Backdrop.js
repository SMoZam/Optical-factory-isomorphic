import React, { Component } from 'react';


import './Backdrop.css'

class Backdrop extends Component {
    state = {  }
    render() { 
        return ( 
            <div  onClick={this.props.click} className="backdrop" />
         );
    }
}
 
export default Backdrop;
