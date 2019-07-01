import React, { Component } from 'react';

// import { NavLink } from "react-router-dom";
import api from "../../api.js";

import "./Lunettes.css";

import { Helmet } from "react-helmet";

import OpticalFactoryAnimation from "../OpticalFactoryAnimation"


class Lunettes extends Component {
    constructor(props) {
        super(props)

        this.state = {
            displayMobile: false,
            dataArray: [],
            FacebookData: [],
            metaDescription: "",
            metaTitle: "",
        };
        this.myImageWrapperInput = React.createRef()

    }


    componentDidMount() {
        window.scrollTo(0, 0);

        if (this.myImageWrapperInput.current.clientWidth <= 768) {
            this.setState({ displayMobile: true })
        }
        api.get("/lunettes-first-page")
            .then(response => {
                // console.log(response);
                const metaTitle = response.data.results[0].data.title[0].text;
                const metaDescription = response.data.results[0].data.meta_description[0].text;
                const FacebookData = response.data.results[0].data.body1;
                this.setState({ FacebookData, metaDescription, metaTitle, dataArray: response.data.results })
            })
            .catch(err => {
                console.log(err);
                alert("Sorry! Something went wrong!")
            });
    }


    render() {
        const { dataArray } = this.state;
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


                <div ref={this.myImageWrapperInput} style={{
                    height: '70px',
                    backgroundColor: 'white'
                }} ></div>

                {dataArray[0] ?
                    <div className="lunettes-wrapper" >
                        <ul className="lunettes-list">
                            <li>
                                <div className="lunette-categorie homme-categorie"  >
                                    {this.state.displayMobile ?
                                        <img src={dataArray[0].data.body[0].items[0].image_lunettes.mobile.url} alt="" /> :
                                        <img src={dataArray[0].data.body[0].items[0].image_lunettes.url} alt="" />
                                    }
                                </div>
                                <div className="lunette-categorie-overlay">
                                    <h2>{dataArray[0].data.body[0].items[0].headline_lunettes[0].text}</h2>
                                </div>
                                <a className="btn" href="https://www.opticalfactory-eshop.com/collections/lunettes-homme">Homme</a>
                                {/* <NavLink to="/products-men" className="btn">{dataArray[0].data.body[0].items[0].button_lunettes[0].text}</NavLink> */}
                            </li>
                            <li>
                                <div className="lunette-categorie femme-categorie"  >
                                    {this.state.displayMobile ?
                                        <img src={dataArray[0].data.body[0].items[1].image_lunettes.mobile.url} alt="" /> :
                                        <img src={dataArray[0].data.body[0].items[1].image_lunettes.url} alt="" />
                                    }
                                </div>
                                <div className="lunette-categorie-overlay">
                                    <h2>{dataArray[0].data.body[0].items[1].headline_lunettes[0].text}</h2>
                                </div>
                                <a className="btn" href="https://www.opticalfactory-eshop.com/collections/lunettes-femme">Femme</a>
                                {/* <NavLink to="/products-women" className="btn">{dataArray[0].data.body[0].items[1].button_lunettes[0].text}</NavLink> */}
                            </li>
                            {/* <li>
                                <div className="lunette-categorie enfant-categorie"  >
                                    {this.state.displayMobile ?
                                        <img src={dataArray[0].data.body[0].items[2].image_lunettes.mobile.url} alt="" /> :
                                        <img src={dataArray[0].data.body[0].items[2].image_lunettes.url} alt="" />
                                    }
                                </div>
                                <div className="lunette-categorie-overlay">
                                    <h2>{dataArray[0].data.body[0].items[2].headline_lunettes[0].text}</h2>
                                </div>
                                <NavLink to="/products-kids" className="btn">{dataArray[0].data.body[0].items[2].button_lunettes[0].text}</NavLink>
                            </li> */}
                        </ul>
                    </div> :

                    <OpticalFactoryAnimation />

                }

            </React.Fragment>
        );
    }
}

export default Lunettes;