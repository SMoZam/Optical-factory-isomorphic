import React from 'react';

const PremierTraitement = (props) => {


    const verreList = props.traitementArray.map((oneProduct) => {
        return <li>
            <div className="verre-list-header verre-list-header-traitement">
                {oneProduct.ImageLogo ?
                    <img src={oneProduct.ImageLogo[0].url} alt="product " /> :
                    <img alt="product " />}
                <div>
                    <h4>{oneProduct.GammeTraitement}</h4>
                    <h5>{oneProduct.MarqueTraitement}</h5>
                </div>

            </div>
            <div className="verre-list-paragraphe">
                <h3>{oneProduct.HeadLineTraitementCard}</h3>
                <p>{oneProduct.TextTraitementCard}</p>
            </div>
        </li>
    });
    return (

        <React.Fragment>
            <div className="verre-section-text premier-traitement-text" >
                <p>Vos verres sont  essentiels à une bonne vision.
                     Les différents traitements, options et technologies
                      permettent de vous offrir la meilleure performance
                       visuelle. Vous trouverez ci-dessous notre gamme
                        de traitements.
                </p>
                <h3>Nos Traitements  :</h3>

            </div>
            <ul className="verre-list" >
                {verreList}
            </ul>
        </React.Fragment>
    );
}

export default PremierTraitement;