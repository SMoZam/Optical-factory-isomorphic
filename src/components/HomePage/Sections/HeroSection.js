import React, { Component } from 'react';

import './HeroSection.css'


import Modal from 'react-modal';
import { RichText } from 'prismic-reactjs';

Modal.setAppElement('#root')


class HeroSection extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: false,
            playVideo: false,
            isMobile: false,
        }
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.vidRef = React.createRef()


    }

    openModal() {
        this.setState({ modalIsOpen: true });
    }

    closeModal() {
        this.setState({ modalIsOpen: false });
    }

    componentDidMount() {
        // this.vidRef.current.play();
        if (this.vidRef.current.clientWidth <= 768) {
            this.setState({ isMobile: true })
        } else {
            this.setState({ isMobile: false })
        }
    }

    render() {
        return (
            <div ref={this.vidRef} className="video-hero-section-wrapper" >
                <video autoPlay muted loop="true" >
                    <source src={this.state.isMobile?"/images/Hero/video-hero-section-mobile.mp4":"/images/Hero/video-hero-section.mp4"} type="video/mp4" />
                </video>

                <div className="overlay-video">
                </div>
                <div className="overlay-video-text">
                    <h2>Des boutiques</h2>
                    <h1>Uniques</h1>
                    <div>
                        <div className="btn"
                            onClick={this.openModal}
                            style={{
                                display: "flex",
                                width: "200px",
                                alignItems: "center",
                                justifyContent: "space-evenly",
                                cursor: "pointer",
                                padding: "20px 40px"
                            }} >
                            Regarder la vidéo
                                                <img style={{ paddingLeft: "15px" }} src="/images/btn-white-play.svg" alt="lire la vidéo" />
                        </div>
                        <Modal
                            isOpen={this.state.modalIsOpen}
                            onAfterOpen={this.afterOpenModal}
                            onRequestClose={this.closeModal}
                            className="Modal"
                            overlayClassName="Overlay"
                        >
                            {RichText.render(this.props.homeData[0].data.body[0].primary.video)}
                        </Modal>
                    </div>
                </div>

            </div>
        );
    }
}

export default HeroSection;