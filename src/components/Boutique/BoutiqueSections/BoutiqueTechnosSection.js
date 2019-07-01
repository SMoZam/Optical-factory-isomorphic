import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
// import { Link } from "react-router-dom";

import "../../HomePage/Sections/TechnosSection.css"

class BoutiqueTechnosSection extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        const { boutiqueData } = this.props;

        const styles = {
            background: `url("../images/section_background.jpg")`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundColor: "#ffffff"
        }
        return (

            <section className="technos-section boutique-technos-section" >

                <div className="technos-section-wrapper boutique-technos-section-wrapper" >
                    <ScrollAnimation animateIn="slideOutRight" duration={this.props.goAnime ? "4" : "0"} initiallyVisible={this.props.goAnime ? "true" : "false"} animateOnce="true">
                        <div className="tech-animation-overlay" >
                        </div>
                    </ScrollAnimation>
                    <div className="technos-section-left-container" style={styles} >
                        <h4>{boutiqueData.body[4].primary.headline_before[0].text}</h4>
                        <h3>{boutiqueData.body[4].primary.headline[0].text}</h3>
                        <p  >{boutiqueData.body[4].primary.description[0].text}</p>
                        {/* <Link className="btn" to="/verre/gammeverres">{boutiqueData.body[4].primary.button_label[0].text}</Link> */}
                        <a className="btn" href="https://www.opticalfactory-eshop.com/">{boutiqueData.body[4].primary.button_label[0].text}</a>
                    </div>
                    <ScrollAnimation animateIn="fadeInRight" duration={this.props.goAnime ? "1" : "0"} offset="400" animateOnce="false">
                        <div className="mySlider mySlider3 " >
                            <figure>
                                <div className="mySlide mySlide3">
                                    <img src={boutiqueData.body[4].primary.image.url} alt="technosSectionImg" />
                                </div>
                                <div className="mySlide mySlide3">
                                    <img src="" alt="styleSectionImg" />
                                </div>
                            </figure>
                        </div>
                    </ScrollAnimation>

                </div>

                <br className="clearBoth" />
            </section>


        )
    }
}

export default BoutiqueTechnosSection;