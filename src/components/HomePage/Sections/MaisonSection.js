import React, { Component } from 'react';
// import posed from 'react-pose';
import { Link } from "react-router-dom";


import "./MaisonSection.css"

// const ServiceSectionText = posed.div({
//     pause: {
//         opacity: 1,
//     },
//     play: {
//         opacity: 0.5,
//     }
// });


class MaisonSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPlaying: false,
            activeService: "Service0"
        }
    }

    render() {

        const { homeData } = this.props;
        return (
            
            
            <React.Fragment>
                {homeData.map(el => {
                    return (
                        <React.Fragment>
                          <div className="maison-section-wrapper2" >
                                <p>{el.data.body[6].primary.headline_before[0].text}</p>
                                <img src={el.data.body[6].primary.headline_year.url} alt="SectionImg2" />
                                <p style={{borderImage: `url("../images/vertical_line.svg") 50  round`,
                            border: "2px solid transparent"}} className="second-text" > {el.data.body[6].primary.paragraph[0].text} </p>
                               
                                <div className="maison-section-wrapper2-overlay">
                                    <Link to="/boutique" className="btn">{el.data.body[6].primary.button[0].text}</Link>
                                </div>
                            </div>
                            <img className="maison-section-img4" src={el.data.body[6].primary.banner_image.url} alt="SectionImg4" /> 
                            </React.Fragment>
                        )
                })}
            </React.Fragment>

        );
    }
}

export default MaisonSection;