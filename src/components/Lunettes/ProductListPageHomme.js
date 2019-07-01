import React from 'react';

import { Link } from "react-router-dom";
import api from "../../api.js";

import OpticalFactoryAnimation from "../OpticalFactoryAnimation"

import { Helmet } from "react-helmet";


class ProductListPageHomme extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            productArray: [],
            headBannerData: [],
            Optique: false,
            Solaire: false,
            selectedTypeCategories: [],
            isDataReceived: false,
            gender: "men",
            inputRefs: [],
            FacebookData: [],
            metaDescription: "",
            metaTitle: "",

        };

        this.productArrayCopy = [];

    }

    componentDidMount() {
        window.scrollTo(0, 0);
        //To retrieve products information and filter them to get only women products
        api.get("/mongodproducts")
            .then(response => {
                if (response.data) {
                    const filteredArray = response.data.filter(oneProduct => {
                        if (oneProduct.Genre.includes("Homme") || oneProduct.Genre.includes("Mixte")) {
                            return true;
                        }
                        else {
                            return false;
                        }
                    });
                    this.productArrayCopy = [...filteredArray]
                    this.setState({ productArray: filteredArray, isDataReceived: true }, () => {
                        if (this.props.location.state) {
                            const offsetToScroll = this.state.inputRefs.filter(el => {
                                return el.refId === this.props.location.state.id
                            })
                            window.scrollTo(0, offsetToScroll[0].refOffset - 100)

                        }
                    });
                }
            })
            .catch(err => {
                console.log(err);
                alert("Sorry! Something went wrong!")
            });

        api.get("/men")
            .then(response => {

                const metaTitle = response.data[2].data.title[0].text;
                const metaDescription = response.data[2].data.meta_description[0].text;
                const FacebookData = response.data[2].data.body;

                this.setState({ FacebookData, metaDescription, metaTitle, headBannerData: response.data })
            })
            .catch(err => {
                console.log(err);
                alert("Sorry! Something went wrong!")
            });


    }

    setRef = (ref) => {
        const newInputRefs = this.state.inputRefs;
        if (ref) {
            newInputRefs.push({ refId: ref.id, refOffset: ref.offsetTop });
            this.setState({ inputRefs: newInputRefs })
        }
    };

    handleEvent(event) {
        // console.log(event.target);
        const { name, checked, value, dataset } = event.target;
        this.setState({ [name]: checked }, () => {
            let { selectedTypeCategories } = this.state;
            let { Optique, Solaire } = this.state;

            //Categories array retrieval for type categorie of the selected product
            if (dataset.filter === "type" && checked) {
                selectedTypeCategories.push(value);
            } else if (dataset.filter === "type" && !checked) {
                selectedTypeCategories = selectedTypeCategories.filter(oneValue => oneValue !== value);
                this.setState({ selectedTypeCategories: selectedTypeCategories });
            }

            //So we get all the products when we unselect the categories
            let newProductArray = this.productArrayCopy;

            //Filter the products if a type category is selected with the array retrieved above
            if (Optique || Solaire) {
                newProductArray = newProductArray.filter(oneProduct => {
                    return selectedTypeCategories.some(oneCat => oneProduct.Categorie.includes(oneCat))
                })
            }


            this.setState({ productArray: newProductArray })

        }
        );

    }


    filterClass(isChecked) {
        if (isChecked) {
            return "filter-selected";
        }

        return "";
    }

    render() {
        const { Optique, Solaire } = this.state;
        const { productArray, isDataReceived, headBannerData } = this.state;
        const { metaTitle, metaDescription, FacebookData } = this.state;




        const productList = productArray.map((oneProduct) => {
            return (
                <Link to={{
                    pathname: `/products/${oneProduct._id}`,
                    state: {
                        productArray: this.state.productArray,
                        gender: this.state.gender
                    }
                }} key={oneProduct._id}>
                    <li ref={this.setRef} id={oneProduct._id}>
                        <div className="product-list-item" >
                            {oneProduct.Photo ?
                                <img src={oneProduct.Photo[0].url} alt={oneProduct.Photo.id} /> :
                                <img src="" alt={oneProduct.Reference} />
                            }
                            <h2>{oneProduct.Reference}</h2>
                            <h3>{oneProduct.Marque}</h3>
                        </div>

                    </li>
                </Link>
            )

        });


        //To display a message when the filters selected do not display a product
        let productResult;
        if (productArray.length > 0) {
            productResult = (
                <ul className="product-list">
                    {productList}
                </ul>)
        }
        else if (isDataReceived && productArray.length === 0) {
            productResult = (
                <div className="no-result">
                    <p>Aucun produit ne correspond aux critères de recherche</p>
                </div>)
        }

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

                {isDataReceived ?
                    (
                        <section className="product-list-page">
                            {headBannerData[0] ?
                                <div style={{ backgroundImage: `url(${headBannerData[2].data.hero_image.url})` }} className="head-banner lunettes-genre-head-banner">
                                    <h2>Lunettes</h2>

                                    <h1>{headBannerData[2].data.headline[0].text}</h1>
                                </div>
                                :
                                <OpticalFactoryAnimation />}


                            <div className="container">
                                <div className="filter-list">
                                    <label className={`dropdown-item dropdown-item-first ${this.filterClass(Optique)}`}>
                                        <input
                                            className="filter-input"
                                            type="checkbox"
                                            value="Optique"
                                            onChange={event => this.handleEvent(event)}
                                            checked={Optique}
                                            name="Optique"
                                            data-filter="type" />
                                        Lunettes de vue
                                                </label>


                                    <label className={`dropdown-item ${this.filterClass(Solaire)}`}>
                                        <input
                                            className="filter-input"
                                            type="checkbox"
                                            value="Solaire"
                                            onChange={event => this.handleEvent(event)}
                                            checked={Solaire}
                                            name="Solaire"
                                            data-filter="type"
                                        />
                                        Lunettes de soleil
                                                </label>
                                </div>
                                {productResult}
                            </div>
                            <div className="link-lunettes-container">
                                <a href="https://www.opticalfactory-eshop.com/" className="btn" >Découvrir notre E-shop</a>
                            </div>
                        </section>)
                    : (
                        <section className="loading-page">
                            <div style={{
                                height: '230px',
                                backgroundColor: 'white'
                            }} ></div>
                            <div className="container loading-box">
                                <img src="./images/loader.png" alt="loader" />
                            </div>
                            <div style={{
                                height: '430px',
                                backgroundColor: 'white'
                            }} ></div>
                        </section>
                    )
                }
            </React.Fragment>



        );

    }
}



export default ProductListPageHomme;