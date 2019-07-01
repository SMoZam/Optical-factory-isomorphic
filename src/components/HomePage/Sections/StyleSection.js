import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Link } from "react-router-dom";

import "./StyleSection.css"

class StyleSection extends Component {
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
            <section className="style-section"  >
                {this.props.homeData.map(el => {
                    return (
                        <div className="style-section-wrapper" >
                            <ScrollAnimation animateIn="fadeInLeft" duration="1" offset="600" animateOnce="false">
                                <div className="mySlider" >
                                    <figure>
                                        <div className="mySlide">
                                            <img src={el.data.body[1].items[0].image.url} alt="styleSectionImg" />
                                        </div>
                                        <div className="mySlide">
                                            <img src={el.data.body[1].items[1].image.url} alt="styleSectionImg" />
                                        </div>
                                    </figure>
                                </div>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="slideOutRight" duration="4" delay="210" initiallyVisible="true" animateOnce="true">
                                <div className="animation-overlay" >
                                </div>
                            </ScrollAnimation>
                            <div className="style-section-left-container"  style={styles}  >
                                <h4>{el.data.body[1].primary.headline_before[0].text}</h4>
                                <h3>{el.data.body[1].primary.headline[0].text}</h3>
                                <p  >{el.data.body[1].primary.description[0].text}</p>
                                <Link className="btn" to="/marques">{el.data.body[1].primary.button_label[0].text}</Link>
                            </div>
                        </div>)
                })}

                <br className="clearBoth" />
                

            </section>
        );
    }
}

export default StyleSection;