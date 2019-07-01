import React, { Component } from 'react';

import ServicesSlide from './ServicesSlide'
import ServicesDots from './ServicesDots';
import OpticalFactoryAnimation from '../OpticalFactoryAnimation';

// import "./controlledSlider.css"

export default class ServicesSlider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            images: [
                "./images/spec-banner.png",
                "./images/Slider2.png",
                "./images/monture-metal.png",
                "./images/corne.jpg",
                "./images/papillon.jpg"
            ],
            content: [
                {
                    image: "",
                },
                {
                    image: "",
                },
                {
                    image: "",
                },
                {
                    image: "",
                },
            ],
            dotsTitles: [],
            translateValue: 0
        }
    }

    goToBrune = () => {
        this.setState({ translateValue: 0 })
    }

    goToBlack = () => {
        this.setState({ translateValue: -(this.slideWidth()) })
    }

    goToPilote = () => {
        this.setState({ translateValue: -(2 * (this.slideWidth())) })
    }

    goToCorne = () => {
        this.setState({ translateValue: -(3 * (this.slideWidth())) })
    }

    goToPapillon = () => {
        this.setState({ translateValue: -(4 * (this.slideWidth())) })
    }

   
    componentWillReceiveProps(nextProps) {
        // console.log("nextProps", nextProps)
        if ((nextProps.sliderData[0]) || (nextProps.sliderData !== this.props.sliderData)) {
            const content = [
                { image: nextProps.sliderData[0].Image1[0].url, },
                { image: nextProps.sliderData[0].Image2[0].url, },
                { image: nextProps.sliderData[0].Image3[0].url, },
                { image: nextProps.sliderData[0].Image4[0].url, },
                { image: nextProps.sliderData[0].Image5[0].url, },
            ]
            const dotsTitles = [
                {
                    title1: nextProps.sliderData[0].Tab1Title,
                    title2: nextProps.sliderData[0].Tab2Title,
                    title3: nextProps.sliderData[0].Tab3Title,
                    title4: nextProps.sliderData[0].Tab4Title,
                    title5: nextProps.sliderData[0].Tab5Title
                }
            ]
            this.setState({ content, dotsTitles }, () => {
                // console.log("TTSL nextProp content", content)
            })
        }
    }
    componentDidMount() {
        if (this.props.sliderData[0]) {
            const content = [
                {
                    image: this.props.sliderData[0].Image1[0].url,
                },
                {
                    image: this.props.sliderData[0].Image2[0].url,
                },
                {
                    image: this.props.sliderData[0].Image3[0].url,
                },
                {
                    image: this.props.sliderData[0].Image4[0].url,
                },
                {
                    image: this.props.sliderData[0].Image5[0].url,
                },
            ]
            const dotsTitles = [
                {
                    title1: this.props.sliderData[0].Tab1Title,
                    title2: this.props.sliderData[0].Tab2Title,
                    title3: this.props.sliderData[0].Tab3Title,
                    title4: this.props.sliderData[0].Tab4Title,
                    title5: this.props.sliderData[0].Tab5Title,
                }
            ]
            this.setState({ content, dotsTitles }, () => {
            })
        }
    }
    
    slideWidth = () => {
        return document.querySelector('.services-slide').clientWidth
    }

    render() {
        const { sliderData } = this.props;

        return (
            <React.Fragment>
                {sliderData[0] ?
            <div className="services-slider">

                <div className="services-slider-wrapper"
                    style={{
                        transform: `translateX(${this.state.translateValue}px)`,
                        transition: 'transform ease-out 0.5s'
                    }}>
                    {
                        this.state.content.map((oneContent, i) => (
                            <ServicesSlide key={i}content={oneContent} />
                        ))
                    }
                </div>

                    <div className="dots-container" >

                <ServicesDots 
                dotsTitles={this.state.dotsTitles}
                goToBlack={this.goToBlack} 
                goToBrune={this.goToBrune} 
                goToPilote={this.goToPilote}
                goToCorne={this.goToCorne}
                goToPapillon={this.goToPapillon} />
                    </div>

            </div>:
            <OpticalFactoryAnimation/>}
            </React.Fragment>
        );
    }
}

