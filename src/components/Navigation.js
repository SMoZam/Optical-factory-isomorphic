import React, { Component } from 'react';

import posed from 'react-pose';

import { NavLink } from "react-router-dom";

const Navbar = posed.nav({
    open: {
        delayChildren: 500,
        staggerChildren: 100
    },
    closed: {
        delay: 100,
    }
});
const Item = posed.a({
    open: { opacity: 1 },
    closed: { opacity: 0 }
});


class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            navLinkColor: "",
            openDropdown: "",
        };
        // example how to bind object in React ES6
        this.openSelectedDropdown = this.openSelectedDropdown.bind(this);
        this.closeSelectedDropdown = this.closeSelectedDropdown.bind(this);
    }

    componentDidMount() {
        setTimeout(this.animate, 500);
    }

    animate = () => this.setState({ isOpen: !this.state.isOpen });

    closeSelectedDropdown() {
        this.setState({ openDropdown: "" });
    }

    openSelectedDropdown(e) {
        e.preventDefault();
        const openDropdown = e.target.id;
        this.setState({ openDropdown });
    }

    render() {
        const { isOpen } = this.state;

        return (
            <React.Fragment>
                <Navbar className="myNav" pose={isOpen ? 'open' : 'closed'}>
                    <Item className="one-link" id="openService" onMouseEnter={this.openSelectedDropdown} >
                        <a href="https://www.opticalfactory-eshop.com/">E-shop</a>
                    </Item>
                    {/* <Item className="one-link" id="openService" onMouseEnter={this.openSelectedDropdown}>
                        <NavLink to="/marques">Marques</NavLink>
                    </Item> */}

                    <Item className="one-link">
                        <div id="openMarque"
                            onMouseEnter={(event) => {
                                this.openSelectedDropdown(event);
                                this.props.dropdownMouseEnter()
                            }}
                            className="one-dropdown-link" to="/marques">
                            <NavLink id="openMarque"
                                style={{ color: this.props.navLinkColor }}
                                onMouseEnter={(event) => {
                                    this.openSelectedDropdown(event);
                                    this.props.dropdownMouseEnter()
                                }}
                                activeClassName="active-link"
                                className="one-link" to="/marques">Marques</NavLink>
                            <div id="openMarque"
                                style={{ backgroundColor: this.props.linkContainerColor }}
                                className={this.state.openDropdown === "openMarque" ? "active-dropdown-link-container" : "dropdown-link-container"}
                                onMouseLeave={() => {
                                    this.closeSelectedDropdown();
                                    this.props.dropdownMouseLeave()
                                }} >
                                <div className="triangle"
                                    style={{ marginLeft: "-5%" }}>
                                    <NavLink activeClassName="active-link" className="one-link" to="/marques">Notre Sélection</NavLink>
                                    <NavLink activeClassName="active-link" className="one-link" to="/toutes-les-marques">Toutes les marques</NavLink>
                                </div>

                            </div>
                        </div>
                    </Item>

                    <Item className="one-link">
                        <div id="openLunettes"
                            onMouseEnter={(event) => {
                                this.openSelectedDropdown(event);
                                this.props.dropdownMouseEnter()
                            }}
                            className="one-dropdown-link"
                            to="/boutique">
                            <NavLink id="openLunettes"
                                onMouseEnter={(event) => {
                                    this.openSelectedDropdown(event);
                                    this.props.dropdownMouseEnter()
                                }}
                                activeClassName="active-link"
                                className="one-link" to="#0">Lunettes</NavLink>
                            <div id="openLunettes"
                                style={{ backgroundColor: this.props.linkContainerColor }}
                                className={this.state.openDropdown === "openLunettes" ? "active-dropdown-link-container" : "dropdown-link-container"}
                                onMouseLeave={() => {
                                    this.closeSelectedDropdown();
                                    this.props.dropdownMouseLeave()
                                }} > >
                                <div className="triangle" style={{ marginLeft: "-13%" }} >
                                    <a activeClassName="active-link" className="one-link" href="https://www.opticalfactory-eshop.com/collections/lunettes-femme">Femme</a>
                                    <a activeClassName="active-link" className="one-link" href="https://www.opticalfactory-eshop.com/collections/lunettes-homme">Homme</a>
                                </div>
                            </div>
                        </div>
                    </Item>
                    <Item className="one-link">
                        <div id="openVerre"
                            onMouseEnter={(event) => {
                                this.openSelectedDropdown(event);
                                this.props.dropdownMouseEnter()
                            }}
                            className="one-dropdown-link"
                            to="/boutique">
                            <NavLink id="openVerre"
                                onMouseEnter={(event) => {
                                    this.openSelectedDropdown(event);
                                    this.props.dropdownMouseEnter()
                                }}
                                activeClassName="active-link"
                                className="one-link" to="#0">Verres</NavLink>
                            <div id="openVerre" style={{ backgroundColor: this.props.linkContainerColor }}
                                className={this.state.openDropdown === "openVerre" ? "active-dropdown-link-container" : "dropdown-link-container"}
                                onMouseLeave={() => {
                                    this.closeSelectedDropdown();
                                    this.props.dropdownMouseLeave()
                                }} >
                                <div className="triangle" style={{ marginLeft: "-13%" }} >
                                    <NavLink activeClassName="active-link" className="one-link" to="/verre/gammeverres">Essilor</NavLink>
                                    <NavLink activeClassName="active-link" className="one-link" to="/verre-novacel/gammeverres">Novacel</NavLink>
                                </div>
                            </div>
                        </div>
                    </Item>
                    <Item className="one-link" id="openService" onMouseEnter={this.openSelectedDropdown} >
                        <NavLink to="/services">Services</NavLink>
                    </Item>

                    <Item className="one-link">
                        <div id="openBoutique"
                            onMouseEnter={(event) => {
                                this.openSelectedDropdown(event);
                                this.props.dropdownMouseEnter()
                            }}
                            className="one-dropdown-link" to="/boutique">
                            <NavLink id="openBoutique"
                                onMouseEnter={(event) => {
                                    this.openSelectedDropdown(event);
                                    this.props.dropdownMouseEnter()
                                }}
                                activeClassName="active-link"
                                className="one-link" to="#0">Les boutiques</NavLink>
                            <div id="openBoutique"
                                style={{ backgroundColor: this.props.linkContainerColor }}
                                className={this.state.openDropdown === "openBoutique" ? "active-dropdown-link-container" : "dropdown-link-container"}
                                onMouseLeave={() => {
                                    this.closeSelectedDropdown();
                                    this.props.dropdownMouseLeave()
                                }} >
                                <div className="triangle"
                                    style={{ marginLeft: "-8%" }}>
                                    <NavLink activeClassName="active-link" className="one-link" to="/lequipe">Les équipes</NavLink>
                                    <NavLink activeClassName="active-link" className="one-link" to="/boutique">Des lieux uniques</NavLink>
                                </div>

                            </div>
                        </div>
                    </Item>

                    <Item className="one-link" id="openService" onMouseEnter={this.openSelectedDropdown} >
                        <NavLink to="/blog">Blog</NavLink>
                    </Item>
                    <Item className="last-link">
                        <NavLink to="/contact">Nous Contacter</NavLink>
                    </Item>
                </Navbar>
            </React.Fragment>
        );
    }
}


export default Navigation;