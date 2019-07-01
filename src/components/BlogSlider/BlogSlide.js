import React, { Component } from 'react';
import { Link } from "react-router-dom";


class BlogSlide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayMobile: false,
    };
  }

  render() {
    const datePublication = [...this.props.content.datePublication].slice(0, 10).join('');

    // console.log(this.props.content.data)
    return (
      <React.Fragment>


        {!this.props.displayMobile ?

          <div className="blog-slide">
            <div className="blog-slide-img"  >
              <Link
                to={{
                  pathname: `/blog/${this.props.content.data.title[0].text.replace(/ /g, '-')}`,
                  state: { data: this.props.content.data }

                }}

              >
                <img src={this.props.content.data.banner.url} alt="slide" />
                }
              </Link>
              <div className="blog-slider-text-description" >
                <div className="blog-slider-text-description-wrapper">
                  <h4>{this.props.content.data.article_type[0].text}</h4>
                  <h3>{this.props.content.data.title[0].text}</h3>
                  <div className="text-description-dates">
                    <p>{datePublication}</p>
                    <div className="blog-vertical-separation"></div>
                    <p>Lecture {this.props.content.data.duree[0].text}</p>
                  </div>
                </div>
              </div>
              <div className="blog-slider-image-monture" >
                <img src={this.props.content.data.home_small_image_monture.url} alt="slide" />
              </div>

            </div>
          </div> 
          
          
          
          :


          <div className="blog-slide">
            <div className="blog-slide-img"  >
              <Link
                to={{
                  pathname: `/blog/${this.props.content.data.title[0].text}/text`,
                  state: { data: this.props.content.data }

                }}

              >
                <img src={this.props.content.data.banner.mobile.url} alt="slide mobile" />
                <div className="mobile-blog-slider-text-description" >
                  <div className="mobile-blog-slider-text-description-wrapper">
                    <h4>{this.props.content.data.article_type[0].text}</h4>
                    <h3>{this.props.content.data.title[0].text}</h3>
                    <div className="mobile-text-description-dates">
                      <p>{datePublication}</p>
                      <div className="mobile-blog-vertical-separation"></div>
                      <p>Lecture {this.props.content.data.duree[0].text}</p>
                    </div>
                  </div>
                </div>

              </Link>

              <div className="mobile-blog-slider-image-monture" >
                <img src={this.props.content.data.home_small_image_monture.url} alt="slide" />
              </div>
            </div>
          </div>
        }




      </React.Fragment>
    )

  }




}

export default BlogSlide