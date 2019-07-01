import React, { Component } from 'react';

// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import api from "../../api.js";

import { Helmet } from "react-helmet";


import "./Equipe.css"
import OpticalFactoryAnimation from '../OpticalFactoryAnimation.js';

class Lequipe extends Component {
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


                                        <div className="our-members">
                                            <div>
                                                <img src={oneData.data.body[0].items[0].portrait.url} width="300px" alt={oneData.data.body[0].items[0].team_member[0].text} />
                                                <h4>{oneData.data.body[0].items[0].team_member[0].text}</h4>
                                                <p>{oneData.data.body[0].items[0].fonction[0].text}</p>
                                            </div>
                                            <div>
                                                <img src={oneData.data.body[0].items[1].portrait.url} width="300px" alt={oneData.data.body[0].items[0].team_member[0].text} />
                                                <h4>{oneData.data.body[0].items[1].team_member[0].text}</h4>
                                                <p>{oneData.data.body[0].items[1].fonction[0].text}</p>
                                            </div>
                                            <div>
                                                <img src={oneData.data.body[0].items[2].portrait.url} width="300px" alt={oneData.data.body[0].items[0].team_member[0].text} />
                                                <h4>{oneData.data.body[0].items[2].team_member[0].text}</h4>
                                                <p>{oneData.data.body[0].items[2].fonction[0].text}</p>
                                            </div>
                                        </div>
                                        <div className="our-members" style={{ marginTop: "-3%" }} >
                                            <div>
                                                <img src={oneData.data.body[0].items[3].portrait.url} width="300px" alt={oneData.data.body[0].items[3].team_member[0].text} />
                                                <h4>{oneData.data.body[0].items[3].team_member[0].text}</h4>
                                                <p>{oneData.data.body[0].items[3].fonction[0].text}</p>
                                            </div>
                                            <div>
                                                <img src={oneData.data.body[0].items[4].portrait.url} width="300px" alt={oneData.data.body[0].items[4].team_member[0].text} />
                                                <h4>{oneData.data.body[0].items[4].team_member[0].text}</h4>
                                                <p>{oneData.data.body[0].items[4].fonction[0].text}</p>
                                            </div>
                                            <div>
                                                <img src={oneData.data.body[0].items[5].portrait.url} width="300px" alt={oneData.data.body[0].items[5].team_member[0].text} />
                                                <h4>{oneData.data.body[0].items[5].team_member[0].text}</h4>
                                                <p>{oneData.data.body[0].items[5].fonction[0].text}</p>
                                            </div>
                                        </div>
                                        <div className="our-members" style={{ marginTop: "-3%" }} >
                                            <div>
                                                <img src={oneData.data.body[0].items[6].portrait.url} width="300px" alt={oneData.data.body[0].items[6].team_member[0].text} />
                                                <h4>{oneData.data.body[0].items[6].team_member[0].text}</h4>
                                                <p>{oneData.data.body[0].items[6].fonction[0].text}</p>
                                            </div>
                                            <div>
                                                <img src={oneData.data.body[0].items[7].portrait.url} width="300px" alt={oneData.data.body[0].items[7].team_member[0].text} />
                                                <h4>{oneData.data.body[0].items[7].team_member[0].text}</h4>
                                                <p>{oneData.data.body[0].items[7].fonction[0].text}</p>
                                            </div>
                                           
                                        </div>
                                        <div className="link-lunettes-container">
                                            <a href="#0" className="btn" >Découvrir notre E-shop</a>
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

export default Lequipe;