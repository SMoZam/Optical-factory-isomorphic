import React, { Component } from 'react';
import "./Boutique.css"
import api from "../../api.js";
import { Switch, Route, NavLink } from 'react-router-dom';


import BoutiqueItem1 from "./BoutiqueItem/BoutiqueItem1"
import BoutiqueItem2 from "./BoutiqueItem/BoutiqueItem2"
import BoutiqueItem3 from "./BoutiqueItem/BoutiqueItem3"



import OpticalFactoryAnimation from "../OpticalFactoryAnimation"

class Boutique extends Component {
    state = {
        boutiqueData: [],
        boutiqueBannerData: [],
        isDataReceived: false,
    }


    componentDidMount() {
        window.scrollTo(0, 0);

        api.get("/boutique")
            .then(response => {
                this.setState({ boutiqueData: response.data.results }, () => {
                    api.get("/boutique_banner")
                        .then(response => {
                            this.setState({ boutiqueBannerData: response.data.results, isDataReceived: true })
                        })
                        .catch(err => {
                            console.log(err);
                            alert("Sorry! Something went wrong!")
                        });

                })
            })
            .catch(err => {
                console.log(err);
                alert("Sorry! Something went wrong!")
            });

    }
    render() {

        const { boutiqueData, isDataReceived, boutiqueBannerData } = this.state;
        const { match } = this.props;
        // console.log("boutiqueBannerData:", boutiqueBannerData)
        return (

            <React.Fragment>
                {isDataReceived ?
                    (<div >

                        <div>
                            <section className="lequipe">
                                <div key={boutiqueBannerData[0].id} className="lequipe-wrapper">
                                    <div style={{ backgroundImage: `url(${boutiqueBannerData[0].data.banner.url})` }} className="head-banner blog-head-banner">
                                        <h2>Des</h2>
                                        <h1>{boutiqueBannerData[0].data.title[0].text}</h1>
                                    </div>
                                </div>
                            </section>
                            <section>
                                <div className="link-container">
                                    <NavLink className="one-navlink" activeClassName="active-link" exact to={`${match.url}`} > {boutiqueBannerData[0].data.boutique1[0].text}</NavLink>
                                    <NavLink className="one-navlink center-navlink" activeClassName="active-link" to={`${match.url}/boutique2`} > {boutiqueBannerData[0].data.boutique2[0].text} </NavLink>
                                    <NavLink className="one-navlink " activeClassName="active-link" to={`${match.url}/boutique3`} >  {boutiqueBannerData[0].data.boutique3[0].text} </NavLink>
                                </div>
                                <div>
                                    <Switch>
                                        <Route exact path={`${match.url}`}
                                            render={() => <BoutiqueItem1 data={boutiqueData[0].data} />} />
                                        <Route path={`${match.url}/boutique2`}
                                            render={() => <BoutiqueItem2 data={boutiqueData[1].data} />} />
                                        <Route path={`${match.url}/boutique3`}
                                            render={() => <BoutiqueItem3 data={boutiqueData[2].data} />} />

                                    </Switch>
                                </div>
                            </section>

                        </div>


                    </div>

                    )
                    : (
                        <OpticalFactoryAnimation />
                    )}
            </React.Fragment>


        );
    }
}

export default Boutique;