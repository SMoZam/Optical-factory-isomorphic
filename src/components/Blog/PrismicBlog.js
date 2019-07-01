import React, { Component } from 'react';


// import { RichText } from 'prismic-reactjs';
import { Link } from "react-router-dom";
import Prismic from 'prismic-javascript';

import "./Blog.css";
import OpticalFactoryAnimation from '../OpticalFactoryAnimation';

class PrismicBlog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            doc: null,
            isDataReceived: false,
            displayMobile: false,
        };
        this.blogRef = React.createRef()

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
    componentWillMount() {
        const apiEndpoint = 'https://optical-factory-blog.prismic.io/api/v2';
        Prismic.api(apiEndpoint).then(api => {
            api.query(
                Prismic.Predicates.at('document.type', 'blog_post'))
                .then(response => {
                    this.setState({ doc: response.results }, () => {
                        this.setState({ isDataReceived: true })
                    });

                });
        });

    }

    componentDidMount() {
        if (this.blogRef.current.clientWidth <= 768) {
            this.setState({ displayMobile: true })
        }
    }

    render() {
        const { doc, isDataReceived } = this.state;

        console.log("doc", doc)

        var articleList
        if (doc) {
            articleList = doc.map((oneBlogPost) => {
                return <Link
                    to={{
                        pathname: `/blog/${oneBlogPost.data.title[0].text.replace(/ /g, '-')}`,
                        state: {
                            data: oneBlogPost.data
                        }
                    }}
                    key={oneBlogPost.data.title[0].text}>
                    <li>
                        <div className='blog-list-item-large' >
                            <img src={oneBlogPost.data.image ? this.state.displayMobile ? oneBlogPost.data.image.mobile.url : oneBlogPost.data.image.url : ""} alt={oneBlogPost.data.title[0].text} />
                            <div className="blog-list-overlay"  >
                            </div>
                            <div className="blog-list-overlay-back">
                                <h4>{oneBlogPost.data.article_type[0].text}</h4>
                                <h2 className="blog-post-overlay-title" > {oneBlogPost.data.title[0].text}</h2>
                            </div>
                        </div>

                    </li>
                </Link>
            });
            var articleResult;
            if (doc.length > 0) {
                articleResult = (
                    <ul className="blog-list">
                        {articleList}
                    </ul>)
            }
            else if (isDataReceived && doc.length === 0) {
                articleResult = (
                    <div className="no-result">
                        <p>Sorry, we don't have the product you're looking for</p>
                    </div>)
            }

        }

        //To display a message when the filters selected do not display a product




        return (
            <React.Fragment>
                <section ref={this.blogRef} className="product-list-page">
                    {isDataReceived ?
                        <div>

                            <div style={{ backgroundImage: `url(/images/blog-banner.png)` }} className="head-banner blog-head-banner">
                                <h2>Le</h2>
                                <h1>Blog</h1>
                            </div>
                            <div className="blog-page-post-title">
                                <h2>Les articles</h2>
                            </div>
                            <div className="blog-post-container">
                                {articleResult}
                            </div>
                        </div>
                        :

                        <OpticalFactoryAnimation />
                    }

                </section>
            </React.Fragment>

        );
    }
}

export default PrismicBlog;