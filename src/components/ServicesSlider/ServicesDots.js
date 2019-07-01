import React, { Component } from 'react';
import OpticalFactoryAnimation from '../OpticalFactoryAnimation';

class ServicesDots extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeName: "Acétate",
      active: false
    }
    this.handleActiveButton = this.handleActiveButton.bind(this);
  }

  handleActiveButton(e) {
    e.preventDefault();

    const activeName = e.target.id;
    // console.log(activeName);
    // console.log("active name", this.state.activeName)
    this.setState({ activeName });
  }

  // clicked = ()=> {
  // this.setState({active: !this.state.active  })
  // }

  render() {
// console.log("dots", this.props.dotsTitles)
    return (
      <React.Fragment> 
      {this.props.dotsTitles[0]?
        <div className="materials-container">
          <div className="material-titles" style={{ color: 'black' }} onMouseEnter={this.props.goToBrune} onClick={this.props.goToBrune}>
            <div id="Acétate" onMouseEnter={this.handleActiveButton} onClick={this.handleActiveButton}
              className={this.state.activeName === "Acétate" ? "active-material" : "material"}
            > {this.props.dotsTitles[0].title1} </div>
          </div>

          <div className="material-titles" style={{ color: 'black' }} onMouseEnter={this.props.goToBlack} onClick={this.props.goToBlack}>
            <div id="Métal" onMouseEnter={this.handleActiveButton} onClick={this.handleActiveButton}
              className={this.state.activeName === "Métal" ? "active-material" : "material"}
            > {this.props.dotsTitles[0].title2} </div>
          </div>

          <div className="material-titles" style={{ color: 'black' }} onMouseEnter={this.props.goToPilote} onClick={this.props.goToPilote}>
            <div id="Pilote" name="Pilote" onMouseEnter={this.handleActiveButton} onClick={this.handleActiveButton}
              className={this.state.activeName === "Pilote" ? "active-material" : "material"}
            > {this.props.dotsTitles[0].title3} </div>
          </div>

           <div className="material-titles" style={{ color: 'black' }} onMouseEnter={this.props.goToCorne} onClick={this.props.goToCorne}  >
            <div id="Corne" name="Pilote" onMouseEnter={this.handleActiveButton} onClick={this.handleActiveButton}
              className={this.state.activeName === "Corne" ? "active-material" : "material"}
            > {this.props.dotsTitles[0].title4} </div>
          </div>

           <div className="material-titles" style={{ color: 'black' }} onMouseEnter={this.props.goToPapillon} onClick={this.props.goToPapillon} >
            <div id="Papillon" name="Pilote" onMouseEnter={this.handleActiveButton} onClick={this.handleActiveButton}
              className={this.state.activeName === "Papillon" ? "active-material" : "material"}
            > {this.props.dotsTitles[0].title5} </div>
          </div>

        </div> :
       <OpticalFactoryAnimation/>}
      
      </React.Fragment>


    );
  }
}

export default ServicesDots;