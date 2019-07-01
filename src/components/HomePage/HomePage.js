import React, { Component } from 'react';

import 'react-animated-slider/build/horizontal.css';

import api from "../../api.js";
import "./HomePage.css"

import { Helmet } from "react-helmet";


import HeroSection from './Sections/HeroSection'

import HeroSlider from './Sections/HeroSlider.js';
import StyleSection from './Sections/StyleSection.js';
import TechnosSection from './Sections/TechnosSection.js';
import ServicesSection from './Sections/ServicesSection.js';
import DemandesSection from './Sections/DemandesSections.js';
import OpticalFactoryAnimation from '../OpticalFactoryAnimation.js';
import MonturesSection from './Sections/MonturesSections.js';
import MaisonSection from './Sections/MaisonSection.js';
import EshopSection from './Sections/EshopSection.js';
import MobileMaisonSection from './Sections/MobileMaisonSection.js';
import MobileServicesSection from './Sections/MobileServicesSection.js';
import BlogSlider from '../BlogSlider/BlogSlider.js';




class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            homeData: [],
            isDataReceived: false,
            goAnime: false,
            FacebookData: [],
            metaDescription: "",
            metaTitle: "",
        };
        this.myInput = React.createRef()
        // example how to bind object in React ES6
        // this.homePageWidth = this.homePageWidth.bind(this);
    }


    componentDidMount() {
        window.scrollTo(0, 0);
        api.get("/home")
            .then(response => {

                const metaTitle = response.data.results[0].data.title[0].text;
                const metaDescription = response.data.results[0].data.meta_description[0].text;
                const FacebookData = response.data.results[0].data.body1;
                this.setState({ FacebookData, metaDescription, metaTitle, homeData: response.data.results, isDataReceived: true })

                if (this.myInput.current.clientWidth >= 768) {
                    this.setState({ goAnime: true })
                } else {
                    this.setState({ goAnime: false })
                }
            })
            .catch(err => {
                console.log(err);
                alert("Sorry! Something went wrong!")
            });

    }



    render() {
        const { isDataReceived, homeData, goAnime } = this.state;
        const { metaTitle, metaDescription, FacebookData } = this.state;


        return (
            <React.Fragment>

                <Helmet>
                    <title>{metaTitle}</title>
                    <meta name="description" content={metaDescription}></meta>
                    {/* <!-- Open Graph data --> */}
                    <meta property="og:title" content={FacebookData[0] ? FacebookData[0].primary.title1[0].text : ""} />
                    <meta property="og:type" content={FacebookData[0] ? FacebookData[0].primary.type[0].text : ""} />
                    <meta property="og:url" content={FacebookData[0] ? FacebookData[0].primary.url[0].text : ""} />
                    <meta property="og:image" content={FacebookData[0] ? FacebookData[0].primary.image.url : ""} />
                    <meta property="og:description" content={FacebookData[0] ? FacebookData[0].primary.description[0].text : ""} />
                    <meta property="og:site_name" content={FacebookData[0] ? FacebookData[0].primary.site_name[0].text : ""} />
                    {/* <meta property="fb:admins" content="Facebook numeric ID" /> */}
                    <link rel="canonical" href="https://courdy-opticien-production.herokuapp.com/blog" />
                </Helmet>

                {isDataReceived ?
                    (
                        <div ref={this.myInput} className="home-page-container" >

                            {/* <HeroSlider homeData={homeData} isMobile={!goAnime} /> */}

                            <HeroSection homeData={homeData} isMobile={!goAnime} />

                            <StyleSection homeData={homeData} isMobile={!goAnime} />

                            <MonturesSection demandesSectionData={homeData} isMobile={!goAnime} />

                            <TechnosSection homeData={homeData} goAnime={this.state.goAnime} />

                            {!this.state.goAnime ?
                                <MobileServicesSection homeData={homeData} /> :
                                <ServicesSection homeData={homeData} isMobile={!goAnime} />
                            }

                            <EshopSection homeData={homeData} isMobile={!goAnime} />

                            {!this.state.goAnime ?
                                <MobileMaisonSection homeData={homeData} /> :
                                <MaisonSection homeData={homeData} />
                            }

                            <DemandesSection homeData={homeData} goAnime={this.state.goAnime} />

                            <BlogSlider />

                        </div>
                    )
                    : (
                        <OpticalFactoryAnimation />
                    )}
            </React.Fragment>
        );
    }
}

export default HomePage;