import React, { Component } from 'react';

import {Link} from "react-router-dom";

import "./MaisonSection.css"



class MobileMaisonSection extends Component {
    state = {}
    render() {
        const { homeData } = this.props;

        return (
            <React.Fragment>
                <div className="maison-section-wrapper2 boutique-item-maison-section" >
                    <p>{homeData[0].data.body[6].primary.headline_before[0].text}</p>
                    <img src={homeData[0].data.body[6].primary.headline_year.url} alt="SectionImg2" />
                </div>
                <img className="maison-section-img6" src={homeData[0].data.body[6].primary.banner_image.mobile.url} alt="SectionImg4" />
                <p className="second-text boutique-second-text" > {homeData[0].data.body[6].primary.paragraph[0].text} </p>
                <Link to="/boutique" style={{marginLeft: "10%"}} className="btn">{homeData[0].data.body[6].primary.button[0].text}</Link>
                
            </React.Fragment>);
    }
}

export default MobileMaisonSection;