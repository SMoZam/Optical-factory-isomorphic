import React, { Component } from 'react';

// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import api from "../../api.js";

import { Helmet } from "react-helmet";


import "./Equipe.css"
import OpticalFactoryAnimation from '../OpticalFactoryAnimation.js';

class NewEquipe extends Component {
    constructor(props) {
        super(props);

        this.state = {
            equipeData: [],
            isDataReceived: false,
            FacebookData: [],
            metaDescription: "",
            metaTitle: "",
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0);

        api.get("/equipe")
            .then(response => {
                // console.log("equipedata",response.data.results )

                const metaTitle = response.data.results[0].data.title[0].text;
                const metaDescription = response.data.results[0].data.meta_description[0].text;
                const FacebookData = response.data.results[0].data.body1;

                this.setState({ FacebookData, metaDescription, metaTitle, equipeData: response.data.results, isDataReceived: true })
            })
            .catch(err => {
                console.log(err);
                alert("Sorry! Something went wrong!")
            });
    }

    render() {
        const { equipeData } = this.state;
        const { metaTitle, metaDescription, FacebookData } = this.state;
        // console.log(equipeData)


        if (equipeData[0]) {
            var equipeList = equipeData[0].data.body[0].items.map((oneProduct) => {
                return (
                    <li>
                        <div className='marques-list-item-large' >
                            {oneProduct.portrait_large.url
                                ? <img src={oneProduct.portrait_large.url} alt="desktop" />
                                : [
                                    oneProduct.portrait_medium.url
                                        ? <img src={oneProduct.portrait_medium.url} alt="desktop" />
                                        : <img src={oneProduct.portrait.url} alt="desktop" />

                                ]
                            }
                            <div className="marques-list-overlay equipe-list-overlay">
                                <h2> {oneProduct.team_member[0].text}</h2>
                            </div>
                        </div>
                    </li>
                )
            });
        }



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


                {equipeData[0] ?
                    (
                        <section className="lequipe">
                            {equipeData.map(oneData =>
                                <div key={oneData.id} className="lequipe-wrapper">
                                    <div style={{
                                        background: `url(${oneData.data.hero_background.url}) no-repeat center`,
                                        backgroundPosition: '50% 50%',
                                        backgroundSize: 'cover'
                                    }} className="head-banner">
                                        <h1>{oneData.data.hero_page_title[0].text}</h1>
                                    </div>

                                    <div className="container">
                                        <div className="our-misssion">

                                            <div className="text">
                                                <h2>{oneData.data.body[0].primary.headline_equipe[0].text}</h2>
                                                <p> {oneData.data.body[0].primary.paragraph_equipe[0].text} </p>
                                            </div>


                                        </div>
                                        <div className="marques-list">
                                            {equipeList}
                                        </div>

                                        <div className="link-lunettes-container">
                                            <a href="https://www.opticalfactory-eshop.com/" className="btn" >Découvrir notre E-shop</a>
                                        </div>
                                    </div>

                                </div>


                            )}
                        </section>)
                    : (
                        <OpticalFactoryAnimation />
                    )}
            </React.Fragment>
        );
    }
}

export default NewEquipe;