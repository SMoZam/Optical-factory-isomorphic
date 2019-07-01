import React from 'react';

const Unifocaux = (props) => {

    const verreList = props.unifocauxArray.map((oneProduct) => {
        return <li>
            <div className="verre-list-header">
                {oneProduct.ImageLogo ?
                    <img src={oneProduct.ImageLogo[0].url} alt="product " /> :
                    <img alt="product " />}
                <div>
                    <h4>{oneProduct.GammeVerre}</h4>
                    <h5>{oneProduct.MarqueVerre}</h5>
                </div>

            </div>
            <div className="verre-list-paragraphe">
                <h3>{oneProduct.HeadLineVerreCard}</h3>
                <p>{oneProduct.TextVerreCard}</p>
            </div>
        </li>

    });
    return (

        <React.Fragment>
            <div className="verre-section-text" >
                <p>Les verres unifocaux standards sont des verres sphériques ou asphériques permettant de corriger les défauts visuels comme la myopie, l'hypermétropie ou l'astigmatisme. Ils sont légers, résistants aux rayures et disponibles en matière minérale ou organique.</p>
                <h3>Nos Verres Unifocaux :</h3>

            </div>
            <ul className="verre-list" >
                {verreList}
            </ul>
        </React.Fragment>
    );
}

export default Unifocaux;