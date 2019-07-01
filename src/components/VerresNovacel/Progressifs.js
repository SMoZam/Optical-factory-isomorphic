import React from 'react';

const Progressifs = (props) => {

    const verreList = props.progressifsArray.map((oneProduct) => {
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
                <p>Les verres progressifs sont des verres qui corrigent la presbytie. Une personne presbyte voit flou de près mais bien de loin. Les verres progressifs permettent de voir net à toutes les distances avec la même paire de lunettes.</p>
                <h3>Nos Verres progressifs :</h3>

            </div>
            <ul className="verre-list" >
                {verreList}
            </ul>
        </React.Fragment>
    );
}

export default Progressifs;