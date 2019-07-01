import React, { Component } from 'react';
import { Link } from "react-router-dom";

import ControlledSlider from '../../DotsSlider/ControlledSlider';
import OpticalFactoryAnimation from '../../OpticalFactoryAnimation';

import "./MonturesSection.css"

class MonturesSection extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {

        const { demandesSectionData } = this.props;
        let sliderdata;
        if (demandesSectionData[0]) {
            sliderdata = [
                {
                    Image1: [{ url: demandesSectionData[0].data.body[2].items[0].image_slider.url }],
                    Image2: [{ url: demandesSectionData[0].data.body[2].items[1].image_slider.url }],
                    Image3: [{ url: demandesSectionData[0].data.body[2].items[2].image_slider.url }],
                    Image4: [{ url: demandesSectionData[0].data.body[2].items[3].image_slider.url }],
                    // Image5: [{ url: demandesSectionData[0].data.body[2].items[4].image_slider.url }],
                    Image1Mobile: [{ url: demandesSectionData[0].data.body[2].items[0].image_slider.mobile.url }],
                    Image2Mobile: [{ url: demandesSectionData[0].data.body[2].items[1].image_slider.mobile.url }],
                    Image3Mobile: [{ url: demandesSectionData[0].data.body[2].items[2].image_slider.mobile.url }],
                    Image4Mobile: [{ url: demandesSectionData[0].data.body[2].items[3].image_slider.mobile.url }],
                    // Image5Mobile: [{ url: demandesSectionData[0].data.body[2].items[4].image_slider.mobile.url }],
                    Tab1Title: demandesSectionData[0].data.body[2].items[0].headline_slider[0].text,
                    Tab2Title: demandesSectionData[0].data.body[2].items[1].headline_slider[0].text,
                    Tab3Title: demandesSectionData[0].data.body[2].items[2].headline_slider[0].text,
                    Tab4Title: demandesSectionData[0].data.body[2].items[3].headline_slider[0].text,
                    // Tab5Title: demandesSectionData[0].data.body[2].items[4].headline_slider[0].text,
                }
            ]
        }

        return (
            <React.Fragment>
                {demandesSectionData[0] ?
                    <section className="montures-section">
                        <div className="montures-section-wrapper" >
                            <p>  {demandesSectionData[0].data.body[2].primary.slider_paragraph[0].text}</p>
                            <Link className="btn" to="/lunettes">{demandesSectionData[0].data.body[2].primary.slider_button[0].text}</Link>
                        </div>
                        <div className="monture-section-slider" >
                            <ControlledSlider sliderData={sliderdata} />
                        </div>
                    </section>
                    :
                    <OpticalFactoryAnimation />}
            </React.Fragment>

        );
    }
}

export default MonturesSection;