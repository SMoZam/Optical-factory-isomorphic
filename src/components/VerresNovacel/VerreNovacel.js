import React, { Component } from 'react';

import { Switch, Route } from 'react-router-dom';
import { NavLink } from "react-router-dom";

import OpticalFactoryAnimation from "../OpticalFactoryAnimation"

import api from "../../api.js";

import "./Verres.css"

import PremierTraitement from '../Traitements/PremierTraitement.js';
import GammesVerres from './GammesVerres.js';

class VerreNovacel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            VerreData: [],
            TraitementData: [],
            verreBanner: [],
            isDataReceived: false,
        };

    }
    componentDidMount() {
        window.scrollTo(0, 0);
        api.get("/novacel-verres")
            .then(response => {
                this.setState({ VerreData: response.data, isDataReceived: true })
            })
            .catch(err => {
                console.log(err);
                alert("Sorry! Something went wrong!")
            });
        api.get("/novacel-traitements")
            .then(response => {
                this.setState({ TraitementData: response.data, isDataReceived: true })
            })
            .catch(err => {
                console.log(err);
                alert("Sorry! Something went wrong!")
            });
        api.get("/verre_banner")
            .then(response => {
                console.log("verre novacel", response.data.results[1])
                this.setState({ verreBanner: response.data.results, isDataReceived: true })
            })
            .catch(err => {
                console.log(err);
                alert("Sorry! Something went wrong!")
            });

    }
    render() {
        const { match } = this.props;
        const { VerreData, TraitementData, verreBanner } = this.state;


        const gammeVerreArray = VerreData;
        const traitementArray = TraitementData;

        return (
            <React.Fragment>
                {verreBanner[1] ?
                    <div style={{ backgroundImage: `url(${verreBanner[1].data.hero_background.url})` }} className="head-banner lunettes-genre-head-banner">
                        <h1>{verreBanner[1].data.hero_page_title[0].text}</h1>
                    </div>
                    :
                    <OpticalFactoryAnimation />
                }


                {verreBanner[1] ?
                    <section>
                        <div className="specialite-text-wrapper">
                            <div className="text">
                                <h2 style={{ marginLeft: "10%" }}>{verreBanner[1].data.histoire_headline[0].text}</h2>
                                <p>{verreBanner[1].data.histoire_paragraph[0].text} </p>
                            </div>
                        </div>
                    </section>
                    :
                    <OpticalFactoryAnimation />
                }
                <section>
                    <div className="btn-link-container" >
                        <NavLink className="btn"
                            activeClassName="active-link"
                            to={`${match.url}/gammeverres`} >
                            Nos gammes de verre
                        </NavLink>
                        <NavLink className="btn"
                            activeClassName="active-link"
                            to={`${match.url}/traitements`} >
                            Les traitements proposés
                        </NavLink>
                    </div>

                    <Switch>
                        <Route path={`${match.url}/gammeverres`}
                            render={() => <GammesVerres match={this.props.match} gammeVerreArray={gammeVerreArray} />} />
                        <Route path={`${match.url}/traitements`}
                            render={() => <PremierTraitement traitementArray={traitementArray} />} />
                    </Switch>
                </section>
            </React.Fragment>
        );
    }
}

export default VerreNovacel;