import React, { Component } from 'react';

import BlogSlide from './BlogSlide'
import BlogDots from './BlogDots';

import Prismic from 'prismic-javascript';


import OpticalFactoryAnimation from "../OpticalFactoryAnimation"

import "./BlogSlider.css"

export default class BlogSlider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            displayMobile: false,
            content: [
                {
                    image: "",
                    mobileimage: "",
                },
                {
                    image: "",
                    mobileimage: ""
                },
                {
                    image: "",
                    mobileimage: ""

                },
                {
                    image: "",
                    mobileimage: ""

                },
            ],
            translateValue: 0,
            currentIndex: 0,
            doc: []
        }
        this.myBlogSliderInput = React.createRef()
    }

    goToPrevious = () => {
        if (this.state.currentIndex === 0)
            return;

        this.setState(prevState => ({
            currentIndex: prevState.currentIndex - 1,
            translateValue: prevState.translateValue + this.slideWidth()
        }))
    }

    goToNext = () => {
        if (this.state.currentIndex === this.state.content.length - 1) {
            return this.setState({
                currentIndex: 0,
                translateValue: 0
            })
        }

        // This will not run if we met the if condition above
        this.setState(prevState => ({
            currentIndex: prevState.currentIndex + 1,
            translateValue: prevState.translateValue + -(this.slideWidth())
        }));
    }


    slideWidth = () => {
        return document.querySelector('.blog-slide-img').clientWidth
    }

    componentDidMount() {
       
    }
    componentWillMount() {

        const apiEndpoint = 'https://optical-factory-blog.prismic.io/api/v2';
        Prismic.api(apiEndpoint).then(api => {
            api.query(
                Prismic.Predicates.at('document.type', 'blog_post'))
                .then(response => {
                    if (response) {
                        // console.log(response.results);
                        // const metaTitle = response.results[0].data.title[0].text;
                        // const metaDescription = response.results[0].data.meta_description[0].text;
                        // const FacebookData = response.results[0].data.body1;

                        const content = [
                            {
                                data: response.results[0].data,
                                datePublication: response.results[0].last_publication_date
                            },
                            {
                                data: response.results[0].data,
                                datePublication: response.results[0].last_publication_date

                            },
                            {
                                data: response.results[0].data,
                                datePublication: response.results[0].last_publication_date

                            },
                            {
                                data: response.results[0].data,
                                datePublication: response.results[0].last_publication_date

                            },
                        ]

                        // , FacebookData, metaDescription, metaTitle

                        this.setState({ content, doc: response.results }, ()=>{
                            if (this.myBlogSliderInput.current.clientWidth <= 768) {
                                this.setState({ displayMobile: true }, () => {
                                    // console.log("this.state.displayMobile", this.state.displayMobile)
                                })
                            }
                        });
                    }
                });
        });



    }


    render() {
        const { doc } = this.state;
        // console.log(this.state.doc);
        return (


            <div className="blog-slider" ref={this.myBlogSliderInput}  >
                {doc[0] ?

                    <React.Fragment>
                        <div className="blog-slider-wrapper"
                            style={{
                                transform: `translateX(${this.state.translateValue}px)`,
                                transition: 'transform ease-out 0.5s'
                            }}>
                            {
                                this.state.content.map((oneContent, i) => (
                                    <BlogSlide key={i} content={oneContent} displayMobile={this.state.displayMobile} />
                                ))
                            }
                        </div>

                        <div className="blog-dots-container" >
                            <BlogDots goToNext={this.goToNext}
                                goToPrevious={this.goToPrevious} />
                        </div>
                    </React.Fragment>
                    :
                    <OpticalFactoryAnimation />
                }


            </div>
        );
    }
}

