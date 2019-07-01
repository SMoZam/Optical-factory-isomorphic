import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Link } from "react-router-dom";

import "./DemandesSection.css"

class DemandesSection extends Component {
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
            backgroundColor: "#ffffff",
            paddingBottom: "1%"
        }
        return (
            <React.Fragment>
                {this.props.homeData.map(el => {
                    return (
                        <section className="demandes-section">

                            <div className="demandes-section-wrapper" >
                                {this.props.goAnime ?
                                    <ScrollAnimation animateIn="fadeInLeft" duration={this.props.goAnime ? "1" : "0"} offset="400" animateOnce="false" style={{
                                        opacity: "0",
                                        transition: 'easeIn'
                                    }} >
                                        <img src={el.data.body[7].primary.image.url} alt="demandesSectionImg" />
                                    </ScrollAnimation>

                                    :
                                    <img src={el.data.body[7].primary.image.url} alt="demandesSectionImg" />
                                    // <div></div>
                                }

                                {this.props.goAnime ?
                                    <ScrollAnimation animateIn="slideOutRight" duration={this.props.goAnime ? "4" : "0"} initiallyVisible={this.props.goAnime ? "true" : "false"} animateOnce="true">
                                        <div className="animation-overlay" >
                                        </div>
                                    </ScrollAnimation>
                                    :
                                    <div></div>}

                                <div className="demandes-section-left-container" style={styles} >
                                    <h4>{el.data.body[7].primary.headline_before[0].text}</h4>
                                    <h3>{el.data.body[7].primary.headline[0].text}</h3>
                                    <p  >{el.data.body[7].primary.description[0].text}</p>
                                    <Link className="btn" to="/lequipe">{el.data.body[7].primary.button_label[0].text}</Link>
                                </div>

                            </div>
                            <br className="clearBoth" />



                        </section>)
                })}
            </React.Fragment>

        );
    }
}

export default DemandesSection;