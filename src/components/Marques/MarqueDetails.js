import React from 'react';
import api from "../../api.js";
import OpticalFactoryAnimation from '../OpticalFactoryAnimation.js';


class MarqueDetails extends React.Component {
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
            isDataReceived: false,
            redirection: false,
            displayMobile: false,
        };
        this.productDetailsInput = React.createRef()

    }

    componentDidMount() {
        window.scrollTo(0, 0);
        const { params } = this.props.match;
        api.get(`/marques/${params.productId}`)
            .then(response => {
                // console.log("propsmatchresponse", response.data)
                this.setState({ productData: response.data }, () => {
                    this.setState({ isDataReceived: true }, ()=>{
                        if (this.productDetailsInput.current.clientWidth <= 768) {
                            this.setState({ displayMobile: true })
                        } else {
                            this.setState({ displayMobile: false })
                        }
                    })
                })
            })
            .catch(err => {
                console.log(err);
                alert("Sorry! Something went wrong!")
            });
    }



    render() {
        const { productData, isDataReceived } = this.state;
        // const backgroundStyle = { backgroundImage: `url(${productData[0].HeaderFullwidthImage})` };


        return (
            <React.Fragment>
                {isDataReceived ?
                    (
                        <section className="product-details" ref={this.productDetailsInput}  >
                            <div style={{
                                marginTop: "95px",
                                backgroundImage: `url(${productData[0].HeaderFullwidthImage[0].url})`
                            }}
                                className="head-banner">
                                <h1>{productData[0].Title}</h1>
                            </div>

                            <div className="container">
                                <div className="our-misssion">
                                    <div className="text">
                                        <h2>{productData[0].Title}</h2>
                                        <p> {productData[0].CentralTextParagraph}</p>
                                    </div>
                                </div>
                            </div>

                            <section className="demandes-section marques-details-demandes-section">
                                <div className="demandes-section-wrapper" >
                                    {productData[0].Rightimage ?
                                        <img src={productData[0].Rightimage[0].url} alt="marques-createur" /> :
                                        <img alt="marques-createur" />}
                                    <div className="demandes-section-left-container" >
                                        <h4>Le style</h4>
                                        <h3>{productData[0].LefttextHeadline}</h3>
                                        <p>
                                            {productData[0].Lefttextparagraph}</p>

                                    </div>
                                </div>
                                <br className="clearBoth" />
                            </section>

                            <section className="quote-section">
                                <h2> "</h2>
                                <h2> {productData[0].Quote}</h2>

                                <p>{productData[0].QuoteLegend} </p>
                            </section>

                            <section className="boutique-section marques-details-boutique-section">
                                <div className="boutique-section-wrapper" style={{
                                    background: `url('${this.state.displayMobile?productData[0].SliderImage1Mobile[0].url:productData[0].SliderImage1[0].url}') no-repeat center`,
                                    backgroundPosition: 'center',
                                    backgroundSize: 'cover',
                                }}>
                                    <p>{productData[0].SliderTextParagraph}</p>

                                </div>
                            </section>




                        </section>
                    )
                    : (
                        <OpticalFactoryAnimation />
                    )}
            </React.Fragment>
        );

    }
}

export default MarqueDetails;