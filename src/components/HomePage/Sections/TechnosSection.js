import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Link } from "react-router-dom";

import "./TechnosSection.css"

class TechnosSection extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        const styles = {
            background: `url("../images/section_background.jpg")`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundColor: "#ffffff"
        }
        return (

            <section className="technos-section" >
                {this.props.homeData.map(el => {
                    return (
                        <div className="technos-section-wrapper" >
                            <ScrollAnimation animateIn="slideOutRight" duration={this.props.goAnime ? "4" : "0"} initiallyVisible={this.props.goAnime ? "true" : "false"} animateOnce="true">
                                <div className="tech-animation-overlay" >
                                </div>
                            </ScrollAnimation>
                            <div className="technos-section-left-container" style={styles} >
                                <h4 style={{ whiteSpace: "nowrap" }} >{el.data.body[3].primary.headline_before[0].text}</h4>
                                <h3>{el.data.body[3].primary.headline[0].text}</h3>
                                <p  >{el.data.body[3].primary.description[0].text}</p>
                                <Link className="btn" to="/verre-novacel/gammeverres">{el.data.body[3].primary.button_label[0].text}</Link>
                            </div>
                            <ScrollAnimation animateIn="fadeInRight" duration={this.props.goAnime ? "1" : "0"} offset="400" animateOnce="false">
                                <div className="mySlider" >
                                    <figure>
                                        <div className="mySlide">
                                            <img src={el.data.body[3].items[0].image.url} alt="technosSectionImg" />
                                        </div>
                                        <div className="mySlide">
                                            <img src={el.data.body[3].items[1].image.url} alt="styleSectionImg" />
                                        </div>
                                    </figure>
                                </div>
                            </ScrollAnimation>

                        </div>)
                })}


                <br className="clearBoth" />
            </section>


        )
    }
}

export default TechnosSection;