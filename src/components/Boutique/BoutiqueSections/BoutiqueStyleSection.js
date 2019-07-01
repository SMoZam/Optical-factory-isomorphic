import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Link } from "react-router-dom";

import "../../HomePage/Sections/StyleSection.css"

class BoutiqueStyleSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        // console.log("boutiquestyle props", this.props)

        const styles = {
            background: `url("../images/section_background.jpg")`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundColor: "#ffffff"
          }
        const {boutiqueData} = this.props;
        return (
            <section className="style-section boutique-style-section"  >
                        <div className="style-section-wrapper">
                            <ScrollAnimation animateIn="fadeInLeft" duration="1" offset="600" animateOnce="false">

                                <div className="mySlider mySlider3" >
                                    <figure>
                                        <div className="mySlide">
                                            <img src={boutiqueData.body[2].primary.image.url} alt="styleSectionImg" />
                                        </div>
                                        <div className="mySlide">
                                            <img src="" alt="styleSectionImg" />
                                        </div>
                                    </figure>
                                </div>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="slideOutRight" duration="4" delay="210" initiallyVisible="true" animateOnce="true">
                                <div className="animation-overlay" >
                                </div>
                            </ScrollAnimation>
                            <div className="style-section-left-container" style={styles}  >
                                <h4>{boutiqueData.body[2].primary.headline_before[0].text}</h4>
                                <h3>{boutiqueData.body[2].primary.headline[0].text}</h3>
                                <p   >{boutiqueData.body[2].primary.description[0].text}</p>
                                <Link className="btn" to="/marques">{boutiqueData.body[2].primary.button_label[0].text}</Link>
                            </div>
                        </div>
                

                <br className="clearBoth" />
               

            </section>
        );
    }
}

export default BoutiqueStyleSection;