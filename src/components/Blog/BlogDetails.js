import React, { Component } from 'react';


import { RichText } from 'prismic-reactjs';

import Prismic from 'prismic-javascript';


import "./Blog.css"
import OpticalFactoryAnimation from '../OpticalFactoryAnimation.js';

class BlogDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayMobile: false,
            data: [],
            isDataReceived: false
        };
        this.blogDetailsRef = React.createRef()

    }
    linkResolver(doc) {
        // Define the url depending on the document type
        if (doc.type === 'page') {
            return '/page/' + doc.uid;
        } else if (doc.type === 'blog_post') {
            return '/blog/' + doc.uid;
        }
        // Default to homepage
        return '/';
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        // if (this.blogDetailsRef.current.clientWidth <= 768) {
        //     this.setState({ displayMobile: true })
        // }

        // console.log("data props", data)


        if (this.props.location.state) {
            const { data } = this.props.location.state
            this.setState({ data }, () => {
                this.setState({ isDataReceived: true })
            })

        } else {
            const apiEndpoint = 'https://optical-factory-blog.prismic.io/api/v2';
            Prismic.api(apiEndpoint).then(api => {
                api.query(
                    Prismic.Predicates.at('document.type', 'blog_post'))
                    .then(response => {
                        this.setState({ data: response.results[0].data }, () => {
                            this.setState({ isDataReceived: true })
                        })
                    });
            });
        }

    }
    render() {

        const { data, isDataReceived } = this.state;
        // const { params } = this.props.location.state;
        // console.log("render data", data);
        // console.log("isDatareceived", isDataReceived);

        return (<React.Fragment>

            {isDataReceived ?
                <section ref={this.blogDetailsRef} className="blog-details-page">
                    <img src={data.banner ? this.state.displayMobile ? data.banner.mobile.url : data.banner.url : ""} alt={data.title[0].text} />
                    <h2 >{data.title[0].text}</h2>
                </section>
                :
                <OpticalFactoryAnimation />}


            {isDataReceived ?
                <div className="blog-wrapper"  >
                    {RichText.render(data.item_1)}
                    {RichText.render(data.item_2)}
                    {RichText.render(data.item_3)}
                    {RichText.render(data.item_4)}
                    {RichText.render(data.item_5)}
                    {RichText.render(data.item_6)}
                    {RichText.render(data.item_7)}
                    {RichText.render(data.item_8)}
                    {RichText.render(data.item_9)}
                    {RichText.render(data.item_10)}
                    {RichText.render(data.item_11)}
                    {RichText.render(data.item_12)}
                    {RichText.render(data.item_13)}
                    {RichText.render(data.item_14)}
                    {RichText.render(data.item_15)}
                </div>


                :
                <OpticalFactoryAnimation />}

        </React.Fragment>);
    }
}

export default BlogDetails;