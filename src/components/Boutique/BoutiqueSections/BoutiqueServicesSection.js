import React, { Component } from 'react';
import posed from 'react-pose';



import "../../HomePage/Sections/ServicesSection.css"

const ServiceSectionText = posed.div({
    pause: {
        opacity: 1,
    },
    play: {
        opacity: 1,
    }
});


class BoutiqueServicesSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPlaying: false,
            activeService: "Service1"
        }
    }

    playscale() {
        this.setState({ isPlaying: true })
    }
    stopscale() {
        this.setState({
            isPlaying: false,
        })
    }

    handleActiveService(e) {
        e.preventDefault();
        const activeService = e.target.id;
        this.setState({ activeService });
    }



    render() {

        const { boutiqueData } = this.props;
        const { activeService, isPlaying } = this.state;

        let BackgroundImage = boutiqueData.body[3].items[0].image_slider.url;


        if (activeService === "Service1") {
            BackgroundImage = boutiqueData.body[3].items[0].image_slider.url
        } else if (activeService === "Service2") {
            BackgroundImage = boutiqueData.body[3].items[1].image_slider.url
        } else if (activeService === "Service3") {
            BackgroundImage = boutiqueData.body[3].items[2].image_slider.url
        } else {
            BackgroundImage = boutiqueData.body[3].items[2].image_slider.url
        }



        return (
            <React.Fragment>

                <section className="services-section boutique-services-section"  >
                    <div className="services-section-text-wrapper" >
                        <p style={activeService === "Service0" ? { display: "block" } : { display: "none" }}>
                            {boutiqueData.body[3].items[0].paragraph_slider[0].text}</p>
                        <p style={activeService === "Service1" ? { display: "block" } : { display: "none" }} >
                            {boutiqueData.body[3].items[0].paragraph_slider[0].text}
                        </p>
                        <p style={activeService === "Service2" ? { display: "block" } : { display: "none" }} >
                            {boutiqueData.body[3].items[1].paragraph_slider[0].text}
                        </p>
                        <p style={activeService === "Service3" ? { display: "block" } : { display: "none" }} >
                            {boutiqueData.body[3].items[2].paragraph_slider[0].text}
                        </p>
                    </div>
                    <ServiceSectionText className="pose-style" pose={isPlaying ? 'play' : 'pause'} >
                        <div className="services-section-img" style={{
                            backgroundImage: `url(${BackgroundImage})`
                        }}
                        >
                            <div className="boutique-title-container">
                                <h2 id="Service1"
                                    className={activeService === "Service1" ? "active-service" : "not-active-service"}
                                    onClick={(event) => {
                                        this.playscale();
                                        this.handleActiveService(event)
                                    }}
                                    onMouseEnter={(event) => {
                                        this.playscale();
                                        this.handleActiveService(event)
                                    }}
                                    onMouseLeave={() => this.stopscale()}>{boutiqueData.body[3].items[0].headline_slider[0].text}</h2>
                                <h2 id="Service2"
                                    className={activeService === "Service2" ? "active-service" : "not-active-service"}
                                    onClick={(event) => {
                                        this.playscale();
                                        this.handleActiveService(event)
                                    }}
                                    onMouseEnter={(event) => {
                                        this.playscale();
                                        this.handleActiveService(event)
                                    }}
                                    onMouseLeave={() => this.stopscale()} >{boutiqueData.body[3].items[1].headline_slider[0].text}</h2>
                                <h2 id="Service3"
                                    className={activeService === "Service3" ? "active-service" : "not-active-service"}
                                    onClick={(event) => {
                                        this.playscale();
                                        this.handleActiveService(event)
                                    }}
                                    onMouseEnter={(event) => {
                                        this.playscale();
                                        this.handleActiveService(event)
                                    }}
                                    onMouseLeave={() => this.stopscale()} >{boutiqueData.body[3].items[2].headline_slider[0].text}</h2>
                            </div>



                        </div>
                    </ServiceSectionText>

                </section>
            </React.Fragment>

        );
    }
}

export default BoutiqueServicesSection;