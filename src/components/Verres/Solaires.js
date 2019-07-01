import React from 'react';

const Solaires = (props) => {

    const verreList = props.solairesArray.map((oneProduct) => {
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
                <p>Ces verres peuvent être adaptés à la vue afin de garantir une vision optimale à l'extérieur. Ils sont disponibles en plusieurs couleurs et peuvent être associés à différents traitements pour votre confort visuel.</p>
                <h3>Nos Verres solaires :</h3>

            </div>
            <ul className="verre-list" >
                {verreList}
            </ul>
        </React.Fragment>
    );
}

export default Solaires;