import React, { Component } from 'react';


import "../../HomePage/Sections/MaisonSection.css"



class MobileBoutiqueMaisonSection extends Component {
    state = {}
    render() {
        const { boutiqueData } = this.props;

        return (
            <React.Fragment>
                {/* <div className="maison-section-wrapper2 boutique-item-maison-section" >
                    <p>{boutiqueData.body[1].primary.headline[0].text}</p>
                    <img src={boutiqueData.body[1].primary.headline_year.url} alt="SectionImg2" />
                </div> */}
                <img className="maison-section-img6" src={boutiqueData.body[1].primary.banner_image.mobile.url} alt="SectionImg4" />
                <p className="second-text boutique-second-text" > {boutiqueData.body[1].primary.paragraph[0].text} </p>
            </React.Fragment>);
    }
}

export default MobileBoutiqueMaisonSection;