import React, { Component } from 'react';

import "./Specialites.css"

import api from "../../api.js";

import { Switch, Route, NavLink } from 'react-router-dom';

import { Helmet } from "react-helmet";


import Service1 from "./Service1.js";
import Service2 from "./Service2.js"
import Service3 from "./Service3.js"
import Service4 from "./Service4.js"

import OpticalFactoryAnimation from "../OpticalFactoryAnimation";
import ServicesStyleSection from './ServicesStyleSection';

class Specialites extends Component {
    state = {
        specialitiesData: [],
        isDataReceived: false,
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        api.get("/specialities")
            .then(response => {
                // console.log(response);

                const metaTitle = response.data.results[0].data.title[0].text;
                const metaDescription = response.data.results[0].data.meta_description[0].text;
                const FacebookData = response.data.results[0].data.body1;

                this.setState({ FacebookData, metaDescription, metaTitle, specialitiesData: response.data.results, isDataReceived: true })
            })
            .catch(err => {
                console.log(err);
                alert("Sorry! Something went wrong!")
            });
    }
    render() {

        const { specialitiesData } = this.state;
        const { match } = this.props;
        const { metaTitle, metaDescription, FacebookData } = this.state;

        
        return (

            <React.Fragment>

                <Helmet>
                    <title>{metaTitle}</title>
                    <meta name="description" content={metaDescription}></meta>
                    {/* <!-- Open Graph data --> */}
                    <meta property="og:title" content={FacebookData ? FacebookData[0].primary.title1[0].text : ""} />
                    <meta property="og:type" content={FacebookData ? FacebookData[0].primary.type[0].text : ""} />
                    <meta property="og:url" content={FacebookData ? FacebookData[0].primary.url[0].text : ""} />
                    <meta property="og:image" content={FacebookData ? FacebookData[0].primary.image.url : ""} />
                    <meta property="og:description" content={FacebookData ? FacebookData[0].primary.description[0].text : ""} />
                    <meta property="og:site_name" content={FacebookData ? FacebookData[0].primary.site_name[0].text : ""} />
                    {/* <meta property="fb:admins" content="Facebook numeric ID" /> */}
                    <link rel="canonical" href="https://courdy-opticien-production.herokuapp.com/blog" />
                </Helmet>

                {specialitiesData[0] ?
                    (
                        <div className="services-wrapper" >
                            {specialitiesData.map(oneData =>
                                <div key={oneData.id}>
                                    <section className="Specialites">
                                        <div key={oneData.id} className="lequipe-wrapper">
                                            <div style={{ backgroundImage: `url(${oneData.data.hero_background.url})` }} className="head-banner">
                                                <h1>{oneData.data.hero_page_title[0].text}</h1>
                                            </div>
                                        </div>
                                    </section>

                                    <section>
                                        <div className="link-container" >
                                            <NavLink className="one-navlink" activeClassName="active-link" exact to={`${match.url}`} > {oneData.data.body[0].items[0].service_tab_headline[0].text} </NavLink>
                                            <NavLink className="one-navlink center-navlink" activeClassName="active-link" to={`${match.url}/service2`} >  {oneData.data.body[0].items[1].service_tab_headline[0].text} </NavLink>
                                            <NavLink className="one-navlink center-navlink2" activeClassName="active-link" to={`${match.url}/service3`} >  {oneData.data.body[0].items[2].service_tab_headline[0].text} </NavLink>
                                            <NavLink className="one-navlink" activeClassName="active-link" to={`${match.url}/service4`} >  {oneData.data.body[0].items[3].service_tab_headline[0].text} </NavLink>
                                        </div>
                                        <div>
                                            <Switch>
                                                <Route exact path={`${match.url}`}
                                                    render={() => <Service1 data={oneData.data.body[0].items[0]} />} />
                                                <Route path={`${match.url}/service2`}
                                                    render={() => <Service2 data={oneData.data.body[0].items[1]} />} />
                                                <Route path={`${match.url}/service3`}
                                                    render={() => <Service3 data={oneData.data.body[0].items[2]} />} />
                                                <Route path={`${match.url}/service4`}
                                                    render={() => <Service4 data={oneData.data.body[0].items[3]} />} />
                                            </Switch>
                                        </div>
                                    </section>
                                    {/* <StyleSection homeData={specialitiesData} /> */}
                                    <ServicesStyleSection homeData={specialitiesData}/>
                                </div>
                            )}
                        </div>
                    )
                    : (
                        <OpticalFactoryAnimation />
                    )}
            </React.Fragment>
        );
    }
}

export default Specialites;