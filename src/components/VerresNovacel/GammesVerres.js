import React, { Component } from 'react';

import Progressifs from "./Progressifs";
import Unifocaux from "./Unifocaux";
import Solaires from "./Solaires"


import { NavLink, Route, Switch } from "react-router-dom"

class GammesVerres extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };

    }

    render() {

        const {gammeVerreArray} = this.props;

        const progressifsArray = gammeVerreArray.filter(oneProduct => {
            return oneProduct.Categorie === "Progressifs"
        })

        const unifocauxArray = gammeVerreArray.filter(oneProduct => {
            return oneProduct.Categorie === "Unifocaux"
        })

        const solairesArray = gammeVerreArray.filter(oneProduct => {
            return oneProduct.Categorie === "Solaires"
        })



    return (
        <React.Fragment>
            <div className="link-container">
                <NavLink className="one-navlink" activeClassName="active-link" exact to={`/verre-novacel/gammeverres/`} > Progressifs </NavLink>
                <NavLink className="one-navlink center-navlink" activeClassName="active-link" exact to={`/verre-novacel/gammeverres/unifocaux`} > Unifocaux </NavLink>
                <NavLink className="one-navlink" activeClassName="active-link" exact to={`/verre-novacel/gammeverres/solaires`} > Solaires </NavLink>
            </div>
            <div className="gamme-verres-container" >
                <Switch>
                    <Route exact path={`/verre-novacel/gammeverres/`}
                        render={() => <Progressifs  progressifsArray={progressifsArray} />} />
                    <Route path={`/verre-novacel/gammeverres/unifocaux`}
                        render={() => <Unifocaux unifocauxArray={unifocauxArray}  />} />
                    <Route path={`/verre-novacel/gammeverres/Solaires`}
                        render={() => <Solaires solairesArray={solairesArray} />} />
                </Switch>
            </div>
        </React.Fragment>
    );
    } 
}

export default GammesVerres;