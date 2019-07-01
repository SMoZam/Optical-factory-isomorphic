import React, { Component } from 'react';



import "../../HomePage/Sections/MaisonSection.css"

class BoutiqueMaisonSection extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {

        const { boutiqueData } = this.props;
        return (

            <React.Fragment>
                {/* <div className="maison-section-wrapper2 boutique-item-maison-section" >
                    <p>{boutiqueData.body[1].primary.headline[0].text}</p>
                    <img src={boutiqueData.body[1].primary.headline_year.url} alt="SectionImg2" />
                    <p className="second-text" > {boutiqueData.body[1].primary.paragraph[0].text} </p>
                </div> */}
                <img className="maison-section-img6" src={boutiqueData.body[1].primary.banner_image.url} alt="SectionImg4" />
            </React.Fragment>


        );
    }
}

export default BoutiqueMaisonSection;