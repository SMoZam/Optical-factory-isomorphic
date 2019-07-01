import React, { Component } from 'react';

// import { Link } from "react-router-dom";

import api from "../../api.js";

import OpticalFactoryAnimation from "../OpticalFactoryAnimation"

import "./Marques.css"

class AllMarques extends Component {
    constructor(props) {
        super(props);

        this.state = {
            productArray: [],
            headBannerData: [],
            optical: false,
            sun: false,
            selectedTypeCategories: [],
            isDataReceived: false,
            marques_banner: []
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        //To retrieve products information and filter them to get only women products

        //To retrieve products information and filter them to get only women products
        api.get("/toutes-les-marques")
            .then(response => {
                if (response.data) {
                    response.data.sort(function (a, b) {
                        if (a.Numero > b.Numero) {
                            return 1;
                        }
                        if (a.Numero < b.Numero) {
                            return -1;
                        }
                        return 0;
                    });
                    this.setState({ productArray: response.data, isDataReceived: true });
                }
            })
            .catch(err => {
                console.log(err);
                alert("Sorry! Something went wrong!")
            });

        api.get("/marques_banner")
            .then(response => {
                this.setState({ marques_banner: response.data.results, isDataReceived: true });
            })
            .catch(err => {
                console.log(err);
                alert("Sorry! Something went wrong!")
            });




    }
    render() {

        const { productArray, isDataReceived, marques_banner } = this.state;
        // console.log("marques_banner",marques_banner)

        const productList = productArray.map((oneProduct) => {
            // console.log(oneProduct._id);
            return (
                <li>
                    <div className='marques-list-item-large' >
                        {oneProduct.ImageThumbnail ?
                            <img src={oneProduct.ImageThumbnail[0].url} alt="desktop" /> :
                            <img alt={oneProduct.Title} />
                        }
                        <div className="marques-list-overlay">
                            <h2> {oneProduct.Title}</h2>
                        </div>
                    </div>

                </li>
            )
        });




        //To display a message when the filters selected do not display a product
        let productResult;
        if (productArray.length > 0) {
            productResult = (
                <ul className="marques-list">
                    {productList}
                </ul>)
        }
        else if (isDataReceived && productArray.length === 0) {
            productResult = (
                <div className="no-result">
                    <p>Sorry, we don't have the product you're looking for</p>
                </div>)
        }
        return (<React.Fragment>
            {isDataReceived ?
                (

                    <section className="product-list-page">
                        {marques_banner[0] ?
                            <div key={productArray[0].id} style={{
                                backgroundImage: `url(${marques_banner[0].data.banner.url})`,
                                backgroundColor: "#e8e1db",
                            }} className="head-banner blog-head-banner">

                                <h2>{marques_banner[0].data.headline_before[0].text}</h2>
                                <h1>{marques_banner[0].data.headline[0].text}</h1>
                            </div> :

                            <OpticalFactoryAnimation />
                        }

                        {marques_banner[0] ?
                            <div className="container marques-container">
                                <div className="our-misssion">
                                    <div className="text">
                                        <h2>{marques_banner[0].data.product_title[0].text}</h2>
                                        <p> {marques_banner[0].data.product_description[0].text} </p>
                                    </div>
                                </div>
                            </div> :
                            <OpticalFactoryAnimation />
                        }
                        <div className="container">
                            {productResult}
                        </div>
                        <div className="link-lunettes-container">
                            <a href="https://www.opticalfactory-eshop.com/" className="btn" >Découvrir notre E-shop</a>
                        </div>
                    </section>)
                : (
                    <OpticalFactoryAnimation />
                )
            }
        </React.Fragment>
        );
    }
}

export default AllMarques;


