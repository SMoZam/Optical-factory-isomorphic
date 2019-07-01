import React from 'react';
import api from "../../api.js";
import { Link, withRouter } from "react-router-dom";

class TheHeroLunetteDetails extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            productData: {
                acf: {
                    product_image: {},
                    tech_section_image: {},
                    image_banner: {},
                }
            },
            productArray: [],
            isDataReceived: false,
            redirection: false,
            indexOfPreviousId: 0,
            indexOfNextId: 0,
            Ids: []
        };
        this.myLunettesDetailsInput = React.createRef()
    }

    loadProduct(id) {
        api.get(`/products/${id}`)
            .then(response => {
                this.setState({ productData: response.data, isDataReceived: true }, () => {

                    if (this.myLunettesDetailsInput.current.clientWidth <= 768) {
                        // console.log(this.myLunettesDetailsInput.current.clientWidth)
                        this.setState({ mobileLinks: true })
                    } else {
                        // console.log(this.myLunettesDetailsInput.current.clientWidth)
                        this.setState({ mobileLinks: false })
                    }

                })
                // this.setState({ productArray: this.state.productArray })
                const { productArray } = this.state;
                // this.setState({ productArray: productArray })
                const Ids = productArray.map((el) => {
                    return el._id
                })
                this.setState({ Ids })

                let indexOfNextId;
                let indexOfPreviousId;

                if (Ids.indexOf(this.state.productData._id) === (Ids.length - 1)) {
                    indexOfNextId = 0;
                    indexOfPreviousId = Ids.indexOf(this.state.productData._id) - 1;
                } else if (Ids.indexOf(this.state.productData._id) === 0) {
                    indexOfNextId = Ids.indexOf(this.state.productData._id) + 1;
                    indexOfPreviousId = Ids.length - 1;
                } else {
                    indexOfNextId = Ids.indexOf(this.state.productData._id) + 1;
                    indexOfPreviousId = Ids.indexOf(this.state.productData._id) - 1;
                }

                this.setState({
                    indexOfNextId: indexOfNextId,
                    indexOfPreviousId: indexOfPreviousId
                })
            })
            .catch(err => {
                console.log(err);
                alert("Sorry! Something went wrong!")
            });

    }

    componentDidMount() {
        window.scrollTo(0, 0);

        api.get("/mongodproducts")
            .then(response => {
                if (response.data) {
                    this.setState({ productArray: response.data }, () => {
                        const id = this.props.match.params.productId;
                        this.loadProduct(id)

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



    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.match.params.productId !== this.props.match.params.productId) {
            this.setState({ isDataReceived: false })
            const id = nextProps.match.params.productId
            this.loadProduct(id);

        }
    }


    render() {
        const { productData, isDataReceived, indexOfPreviousId, indexOfNextId, Ids } = this.state;

        // const genderLink = `/products-${this.props.location.state.gender}`

        // const mobilegenderLink = `/mobile-products-${this.props.location.state.gender}`;

        // if (this.props.location.state) {
        //     var mobilegenderLink = `/mobile-products-${this.props.location.state.gender}`;
        // }
        // if (this.props.location.state) {
        //     var genderLink = `/products-${this.props.location.state.gender}`
        // }

        const defaultGenderLink = `/products-men`;
        const defaultProductArray = [];

        return (
            <React.Fragment>
                {isDataReceived ?
                    (
                        <section ref={this.myLunettesDetailsInput} className="product-details">
                            <div className="lunettes-detail-wrapper" >
                                <div className="lunettes-title-container">
                                    <Link onClick={this.goToPrevious} to={{
                                        pathname: `/products/${Ids[indexOfPreviousId]}`,
                                        state: {
                                            productArray: this.state.productArray ? this.state.productArray : defaultProductArray,
                                            gender: this.props.location.state ? this.props.location.state.gender : defaultGenderLink
                                        }
                                    }}  >
                                        <img src="../images/Pevious.svg" alt="" />
                                    </Link>
                                    <h2>{productData.Reference} - {productData.Marque}</h2>
                                    <Link onClick={this.goToNext} to={{
                                        pathname: `/products/${Ids[indexOfNextId]}`,
                                        state: {
                                            productArray: this.state.productArray ? this.state.productArray : defaultProductArray,
                                            gender: this.props.location.state ? this.props.location.state.gender : defaultGenderLink
                                        }
                                    }}  >
                                        <img src="../images/Next.svg" alt="" />
                                    </Link>

                                </div>

                                <div className="lunettes-img-container" >
                                    {/* <Link to={genderLink} > */}
                                    <Link to={{
                                        pathname: defaultGenderLink,
                                        state: { id: this.props.match.params.productId }
                                    }}  >
                                        <img className="close-logo" src="../images/close-product.png" alt="" />
                                    </Link>
                                    {productData.Photo ?
                                        <img src={productData.PhotoLarge[0].url} alt="Product " />
                                        : <img alt="Product " />}

                                </div>

                                <h3>Caractéristiques de la monture</h3>

                                <div className="table-container" >
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>Catégorie</td>
                                                <td className="td-object" >{productData.Categorie}</td>
                                            </tr>
                                            <tr>
                                                <td>Genre</td>
                                                <td className="td-object" >{productData.Genre}</td>
                                            </tr>
                                            <tr>
                                                <td>Style Monture</td>
                                                <td className="td-object" >{productData.Style[0]}  {productData.Style[1] ? `- ${productData.Style[1]}` : ""}  {productData.Style[2] ? `- ${productData.Style[2]}` : ""}  {productData.Style[3] ? `- ${productData.Style[3]}` : ""}</td>
                                            </tr>

                                        </tbody>
                                    </table>

                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>Forme</td>
                                                <td className="td-object" >{productData.Forme[0]}</td>
                                            </tr>
                                            <tr>
                                                <td>Couleur Monture</td>
                                                <td className="td-object" >{productData.Couleur[0]}  {productData.Couleur[1] ? `- ${productData.Couleur[1]}` : ""}  {productData.Couleur[2] ? `- ${productData.Couleur[2]}` : ""}  {productData.Couleur[3] ? `- ${productData.Couleur[3]}` : ""} </td>
                                            </tr>
                                            <tr>
                                                <td> Matériau </td>
                                                <td className="td-object" >{productData.Materiau[0]}  {productData.Materiau[1] ? `- ${productData.Materiau[1]}` : ""}  {productData.Materiau[2] ? `- ${productData.Materiau[2]}` : ""}  {productData.Materiau[3] ? `- ${productData.Materiau[3]}` : ""} </td>
                                            </tr>

                                        </tbody>
                                    </table>

                                </div>


                            </div>

                            <div className="link-lunettes-container">
                                <a href="#0" className="btn" >Découvrir notre E-shop</a>
                            </div>

                        </section>)
                    : (
                        <section className="loading-page">
                            <div style={{
                                height: '230px',
                                backgroundColor: 'white'
                            }} ></div>
                            <div className="container loading-box">
                                <img src="../images/loader.png" alt="loader" />
                                {/* <img src="./images/loader.gif" /> */}
                                {/* <p>Loading...</p> */}
                            </div>
                            <div style={{
                                height: '430px',
                                backgroundColor: 'white'
                            }} ></div>
                        </section>
                    )}
            </React.Fragment>
        );

    }
}


const HeroLunetteDetails = withRouter(TheHeroLunetteDetails);
export default HeroLunetteDetails;