import React, { Component } from 'react';
import SplitText from 'react-pose-text';
import Slider from 'react-animated-slider';

// import ReactDOM from 'react-dom';
import Modal from 'react-modal';

import "./HeroSlider.css";


import { RichText } from 'prismic-reactjs';

// import { Link } from "react-router-dom";
Modal.setAppElement('#root')


class HeroSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPlaying: false,
            activeService: "Service0",
            homeData: [],
            isDataReceived: false,
            goAnime: false,
            modalIsOpen: false
        };
        this.openModal = this.openModal.bind(this);
        // this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);

    }
    openModal() {
        this.setState({ modalIsOpen: true });
    }



    closeModal() {
        this.setState({ modalIsOpen: false });
    }
    render() {
        const charPoses = {
            hoverable: true,
            exit: {
                opacity: 0,
                scale: 1,
            },
            enter: {
                opacity: 1,
                scale: 1,
                delay: ({ charIndex }) => charIndex * 100

            },
        };

        // console.log(this.props.homeData[0].data.body[0].primary)
        const content = this.props.homeData.map(el => {
            return ([
                {
                    title: `${el.data.body[0].items[0].headline_slider[0].text}`,
                    subtitle: `${el.data.body[0].items[0].headline_slider_before[0].text}`,
                    adress1: `${el.data.body[0].primary.adress_line1[0].text}`,
                    adress2: `${el.data.body[0].primary.adress_line2[0].text}`,
                    adress3: `${el.data.body[0].primary.adress_line3[0].text}`,
                    position: '01 |  ',
                    image: `${el.data.body[0].items[0].image_slider.url}`,
                    imageMobile: `${el.data.body[0].items[0].image_slider.mobile.url}`,
                    userProfile: `${el.data.body[0].items[0].image_next_slider.url}`,
                    imageMonture: 'https://www.opticalfactory-eshop.com/collections/frontpage/products/matsuda-m3070-tot-bg',

                },
                {
                    title: `${el.data.body[0].items[1].headline_slider[0].text}`,
                    subtitle: `${el.data.body[0].items[1].headline_slider_before[0].text}`,
                    adress1: `${el.data.body[0].primary.adress_line1[0].text}`,
                    adress2: `${el.data.body[0].primary.adress_line2[0].text}`,
                    adress3: `${el.data.body[0].primary.adress_line3[0].text}`,
                    position: '02 |  ',
                    image: `${el.data.body[0].items[1].image_slider.url}`,
                    imageMobile: `${el.data.body[0].items[1].image_slider.mobile.url}`,

                    userProfile: `${el.data.body[0].items[1].image_next_slider.url}`,
                    imageMonture: 'https://www.opticalfactory-eshop.com/collections/frontpage/products/matsuda-m2036-blk',
                }
            ]);

        })

        // console.log("this.props.isMobile",this.props)
        // autoplay="2000"
        return (
            <section className="hero-section" >
                <Slider touchDisabled="true" duration="500"  className="slider-wrapper">
                    {content[0].map((item, index) => (
                        <div
                            key={index}
                            className="slider-content"
                            style={{ backgroundColor: "#E8E1DB" }}
                        >
                            <div className="inner"
                                style={{
                                    backgroundImage: `url(${this.props.isMobile ? item.imageMobile : item.image})`
                                }} >
                                <div className="text-container" id="myAppElement" >
                                    <div className="title-container" >
                                        <p className="slide-position"> <b>{item.position}</b>  <i style={{ opacity: "0.6" }} >02</i>  </p>
                                        <h2>{item.subtitle}</h2>
                                        <h1>
                                            <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
                                                {item.title}
                                            </SplitText>
                                        </h1>
                                        <div>
                                            <div className="btn"
                                                onClick={this.openModal}
                                                style={{
                                                    marginLeft: "10%",
                                                    display: "flex",
                                                    width: "200px",
                                                    alignItems: "center",
                                                    justifyContent: "space-evenly",
                                                    cursor: "pointer",
                                                    padding: "14px 15px"
                                                }} >
                                                Lire la vidéo
                                                <img src="./images/btn_yellow_play.svg" alt="lire la vidéo" />
                                            </div>
                                            <Modal
                                                isOpen={this.state.modalIsOpen}
                                                onAfterOpen={this.afterOpenModal}
                                                onRequestClose={this.closeModal}
                                                // style={customStyles}
                                                className="Modal"
                                                overlayClassName="Overlay"
                                            >
                                                {RichText.render(this.props.homeData[0].data.body[0].primary.video)}
                                            </Modal>
                                        </div>
                                    </div>
                                    <div className="adress-text">
                                        <p style={{ fontWeight: "bold" }} >{item.adress1}</p>
                                        <p>{item.adress2}</p>
                                        <p>{item.adress3}</p>
                                    </div>


                                </div>

                                <section>
                                    <a href={item.imageMonture} >
                                        <img src={item.userProfile} alt={item.user} />
                                    </a>
                                    <img className="horizontal_line" src="./images/horizontal_line.png" alt="horizontal_line" />
                                </section>
                            </div>
                        </div>
                    ))}
                </Slider>
            </section>);
    }
}

export default HeroSlider;