import React, { Component } from 'react';


import { NavLink } from "react-router-dom"

import './SlideDrawer.css';


class SlideDrawer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openDropdown: "",
    }
    // this.openSelectedDropdown = this.openSelectedDropdown.bind(this);
    // this.closeSelectedDropdown = this.closeSelectedDropdown.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  // closeSelectedDropdown() {
  //   this.setState({ openDropdown: "" });
  // }

  // openSelectedDropdown(e) {
  //   e.preventDefault();
  //   const openDropdown = e.target.id;
  //   this.setState({ openDropdown });
  // }
  toggleDropdown(e) {
    e.preventDefault();
    const openDropdown = e.target.id;
    console.log("opendropdown:", e.target)
    if (this.state.openDropdown !== openDropdown) {
      this.setState({ openDropdown });
    }
    else {
      this.setState({ openDropdown: "" });

    }
  }

  render() {
    let drawerClasses = 'side-drawer';
    if (this.props.show) {
      drawerClasses = 'side-drawer open';
    }
    return (
      <nav className={drawerClasses}>
        <h3 onClick={this.props.click} >Fermer.</h3>
        <ul>


          <li className="principal-link" >
            <a href="https://www.opticalfactory-eshop.com/">E-shop</a>
          </li>



          <li id="openMarques" className="principal-link"
            onClick={this.toggleDropdown} >Marques</li>
          <div
            className={this.state.openDropdown === "openMarques" ? "mobile-active-dropdown-link-container" : "mobile-dropdown-link-container"}>
            <li className="secondary-link" ><NavLink onClick={this.props.click} to="/mobilemarques">Notre Sélection</NavLink></li>
            <li className="secondary-link" ><NavLink onClick={this.props.click} to="/toutes-les-marques">Toutes les marques</NavLink></li>
          </div>

          <li id="openLunettes" className="principal-link"
            onClick={this.toggleDropdown} >Lunettes</li>
          <div
            className={this.state.openDropdown === "openLunettes" ? "mobile-active-dropdown-link-container" : "mobile-dropdown-link-container"}>
            <li className="secondary-link" ><a activeClassName="active-link" className="one-link" href="https://www.opticalfactory-eshop.com/collections/lunettes-femme">Femme</a></li>
            <li className="secondary-link" ><a activeClassName="active-link" className="one-link" href="https://www.opticalfactory-eshop.com/collections/lunettes-homme">Homme</a></li>
          </div>



          <li id="openVerre" className="principal-link"
            onClick={this.toggleDropdown} >Verres</li>
          <div
            className={this.state.openDropdown === "openVerre" ? "mobile-active-dropdown-link-container" : "mobile-dropdown-link-container"} >
            <li className="secondary-link" ><NavLink onClick={this.props.click} to="/verre/gammeverres">Essilor</NavLink></li>
            <li className="secondary-link" ><NavLink onClick={this.props.click} to="/verre-novacel/gammeverres">Novacel</NavLink></li>
          </div>


          <li id="openBoutique" className="principal-link"
            onClick={this.toggleDropdown} >Les boutiques</li>
          <div
            className={this.state.openDropdown === "openBoutique" ? "mobile-active-dropdown-link-container" : "mobile-dropdown-link-container"} >
            <li className="secondary-link" ><NavLink onClick={this.props.click} to="/boutique">Des lieux uniques</NavLink></li>
            <li className="secondary-link" ><NavLink onClick={this.props.click} to="/lequipe">Les équipes</NavLink></li>
          </div>


          <li className="principal-link" > <NavLink onClick={this.props.click} to="/services">Services</NavLink> </li>
          <li className="principal-link" > <NavLink onClick={this.props.click} to="/blog">Blog</NavLink> </li>
          <li className="principal-link" > <NavLink className="last-one" onClick={this.props.click} to="/contact">Nous Contacter</NavLink></li>
        </ul >

      </nav>
    );
  }

};

export default SlideDrawer;