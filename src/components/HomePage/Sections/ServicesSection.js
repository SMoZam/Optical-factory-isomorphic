import React, { Component } from 'react';
import posed from 'react-pose';
import { Link } from "react-router-dom";


import "./ServicesSection.css"

const ServiceSectionText = posed.div({
    pause: {
        opacity: 1,
    },
    play: {
        opacity: 1,
    }
});


class ServicesSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPlaying: false,
            activeService: "Service0"
        }
    }

    playscale() {
        this.setState({ isPlaying: true })
    }
    stopscale() {
        this.setState({
            isPlaying: false,
            // activeService: "Service0"
        })
    }

    handleActiveService(e) {
        e.preventDefault();
        const activeService = e.target.id;
        this.setState({ activeService });
    }



    render() {

        const { homeData } = this.props;
        const { activeService, isPlaying } = this.state;



        let BackgroundImage = homeData[0].data.body[4].items[2].image_slider.url;


        if (activeService === "Service1") {
            BackgroundImage = homeData[0].data.body[4].items[0].image_slider.url
        } else if (activeService === "Service2") {
            BackgroundImage = homeData[0].data.body[4].items[1].image_slider.url
        } else if (activeService === "Service3") {
            BackgroundImage = homeData[0].data.body[4].items[2].image_slider.url
        } else {
            BackgroundImage = homeData[0].data.body[4].items[3].image_slider.url
        }

        return (
            <React.Fragment>
                {homeData.map(el => {
                    return (
                        <section className="services-section" >
                            <div className="services-section-text-wrapper" >
                                <p style={activeService === "Service0" ? { display: "block" } : { display: "none" }}>
                                    {el.data.body[4].items[0].paragraph_slider[0].text}</p>
                                <p style={activeService === "Service1" ? { display: "block" } : { display: "none" }} >
                                    {el.data.body[4].items[0].paragraph_slider[0].text}
                                </p>
                                <p style={activeService === "Service2" ? { display: "block" } : { display: "none" }} >
                                    {el.data.body[4].items[1].paragraph_slider[0].text}
                                </p>
                                <p style={activeService === "Service3" ? { display: "block" } : { display: "none" }} >
                                    {el.data.body[4].items[2].paragraph_slider[0].text}
                                </p>
                                <p style={activeService === "Service4" ? { display: "block" } : { display: "none" }} >
                                    {el.data.body[4].items[3].paragraph_slider[0].text}
                                </p>
                            </div>
                            <ServiceSectionText className="pose-style" pose={isPlaying ? 'play' : 'pause'} >
                                <div className="services-section-img" style={{
                                    backgroundImage: `url(${BackgroundImage})`,
                                    transition: "all ease-out 0.5s"
                                }}
                                >
                                    <div className="boutique-title-container" style={{ marginBottom: "5%" }} >

                                        <Link to="/services" style={{ textDecoration: "none" }} >
                                            <div>
                                                <h2 id="Service1"
                                                    className={activeService === "Service1" ? "active-service" : "not-active-service"}
                                                    onMouseEnter={(event) => {
                                                        this.playscale();
                                                        this.handleActiveService(event)
                                                    }}
                                                    onMouseLeave={() => this.stopscale()}>{el.data.body[4].items[0].headline_slider[0].text}</h2>
                                            </div>
                                        </Link>

                                        <Link to="/services/service2" style={{ textDecoration: "none" }} >
                                            <h2 id="Service2"
                                                className={activeService === "Service2" ? "active-service" : "not-active-service"}
                                                onMouseEnter={(event) => {
                                                    this.playscale();
                                                    this.handleActiveService(event)
                                                }}
                                                onMouseLeave={() => this.stopscale()} >{el.data.body[4].items[1].headline_slider[0].text}</h2>
                                        </Link>


                                        <Link to="/services/service3" style={{ textDecoration: "none" }} >
                                            <h2 id="Service3"
                                                className={activeService === "Service3" ? "active-service" : "not-active-service"}
                                                onMouseEnter={(event) => {
                                                    this.playscale();
                                                    this.handleActiveService(event)
                                                }}
                                                onMouseLeave={() => this.stopscale()} >{el.data.body[4].items[2].headline_slider[0].text}</h2>
                                        </Link>

                                        <Link to="/services/service4" style={{ textDecoration: "none" }} >
                                            <h2 id="Service4"
                                                className={activeService === "Service4" ? "active-service" : "not-active-service"}
                                                onMouseEnter={(event) => {
                                                    this.playscale();
                                                    this.handleActiveService(event)
                                                }}
                                                onMouseLeave={() => this.stopscale()} >{el.data.body[4].items[3].headline_slider[0].text}</h2>
                                        </Link>


                                    </div>
                                </div>
                            </ServiceSectionText>

                        </section>)
                })}
            </React.Fragment>

        );
    }
}

export default ServicesSection;