import React, { Component } from 'react';
// import BoutiqueStyleSection from '../BoutiqueSections/BoutiqueStyleSection';
import BoutiqueMaisonSection from '../BoutiqueSections/BoutiqueMaisonSection';
import BoutiqueTechnosSection from '../BoutiqueSections/BoutiqueTechnosSection';
import BoutiqueServicesSection from '../BoutiqueSections/BoutiqueServicesSection';
import MobileBoutiqueMaisonSection from '../BoutiqueSections/MobileBoutiqueMaisonSection';

import { Helmet } from "react-helmet";


class BoutiqueItem1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayMobile: false,
        }
        this.myBoutiqueInput = React.createRef()
    }

    componentDidMount() {
        // window.scrollTo(0, 0);
        if (this.myBoutiqueInput.current.clientWidth <= 768) {
            this.setState({ displayMobile: true })
        } else {
            this.setState({ displayMobile: false })
        }

    }

    render() {
        const metaTitle = this.props.data.title[0].text;
        const metaDescription = this.props.data.meta_description[0].text;
        const FacebookData = this.props.data.body1;


        // console.log(this.props.data)

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


                <div ref={this.myBoutiqueInput} className="container">
                    <div className="our-misssion  boutique-item-container">
                        <div className="text">
                            <h2>{this.props.data.body[0].primary.headling[0].text}</h2>
                            <p> {this.props.data.body[0].primary.paragraph_shop[0].text} </p>
                        </div>
                    </div>
                </div>


                {this.state.displayMobile ?
                    <MobileBoutiqueMaisonSection boutiqueData={this.props.data} /> :
                    <BoutiqueMaisonSection boutiqueData={this.props.data} />
                }


                {/* <BoutiqueStyleSection boutiqueData={this.props.data} />  */}
                <BoutiqueServicesSection boutiqueData={this.props.data} />
                <BoutiqueTechnosSection boutiqueData={this.props.data} />




            </React.Fragment>


        );
    }
}

export default BoutiqueItem1;