import React, { Component } from 'react';
import { Switch, Route, withRouter, Link } from 'react-router-dom';

import Navigation from './components/Navigation';
import HomePage from './components/HomePage/HomePage.js';

import "animate.css/animate.min.css";
import './App.css';
import './slider-animations.css';
import './styles.css';


import ProductListPageFemme from './components/Lunettes/ProductListPageFemme';
// import Lequipe from './components/Equipe/Lequipe';
import Boutique from "./components/Boutique/Boutique.js";
import Lunettes from "./components/Lunettes/Lunettes";
import Marques from './components/Marques/Marques';
import Specialites from './components/Specialites/Specialites';
import Verre from './components/Verres/Verre';
import LunetteDetails from './components/Lunettes/LunetteDetails'
import MarqueDetails from './components/Marques/MarqueDetails';
import ContactPage from './components/Contact/ContactPage';
import ProductListPageHomme from './components/Lunettes/ProductListPageHomme';
import ProductListPageEnfant from './components/Lunettes/ProductListPageEnfant';
// import SlideMenu from './components/SlideMenu';

import Toolbar from './components/myNavBar/Toolbar/Toolbar';
import SlideDrawer from './components/myNavBar/SlideDrawer/SlideDrawer';
import Backdrop from './components/myNavBar/Backdrop/Backdrop';
import MobileMarques from './components/Marques/MobileMarques';
import PrismicBlog from './components/Blog/PrismicBlog';
import BlogDetails from './components/Blog/BlogDetails';
import NewEquipe from './components/Equipe/NewEquipe';
import HeroLunetteDetails from './components/Lunettes/HeroLunettesDetails';
import AllMarques from './components/Marques/AllMarques';
import VerreNovacel from './components/VerresNovacel/VerreNovacel';



class TheApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollingLock: false,
      navLinkColor: "black",
      slideDrawerOpen: false,
      mouseIn: false,
    };
    // example how to bind object in React ES6
    this.handleScroll = this.handleScroll.bind(this)
  }
  componentDidMount() {
    if (window.location.pathname === "/") {
      window.addEventListener('scroll', this.handleScroll);
    }
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { slideDrawerOpen: !prevState.slideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ slideDrawerOpen: false });
  };

  dropdownMouseEnter = () => {
    this.setState({ mouseIn: true })
  }
  dropdownMouseLeave = () => {
    this.setState({ mouseIn: false })
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    if (window.location.pathname === "/") {
      if (window.scrollY > 5) {
        this.setState({
          scrollingLock: true,
        });
      } else if (window.scrollY < 5) {
        this.setState({
          scrollingLock: false,
        });
      }
    }
    else {
      this.setState({
        scrollingLock: true,
      });
    }
  }
  render() {
    // console.log("window", window)
    let backdrop;
    let slideDrawer;
    // console.log(this.state.slideDrawerOpen)
    if (this.state.slideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
      slideDrawer = <SlideDrawer show={this.state.slideDrawerOpen} click={this.backdropClickHandler} />;
    }
    return (
      <main>
        <header id="header"
          className="fixed-header"
          style={{ background: window.location.pathname === "/" ? this.state.scrollingLock ? '#323232' : this.state.mouseIn ? '#323232' : 'transparent' : '#323232' }}
        >
          <a className="logo-perignon" href="/">
            <img src="/images/logo-optical-factory.svg" alt="Optical Factory" />
          </a>
          <Navigation dropdownMouseEnter={this.dropdownMouseEnter} dropdownMouseLeave={this.dropdownMouseLeave} linkContainerColor={this.state.scrollingLock ? '#323232' : this.state.mouseIn ? '#323232' : 'transparent'} />
          <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
          {slideDrawer}
          {backdrop}

          {/* <SlideMenu/> */}
        </header>



        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/products-women" component={ProductListPageFemme} />
          <Route path="/products-men" component={ProductListPageHomme} />
          <Route path="/products-kids" component={ProductListPageEnfant} />
          <Route path="/lequipe" component={NewEquipe} />
          <Route path="/lunettes" component={Lunettes} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/products/:productId" component={LunetteDetails} />
          <Route path="/hero-lunettes-details/:productId" component={HeroLunetteDetails} />
          <Route exact path="/toutes-les-marques" component={AllMarques} />
          <Route exact path="/marques" component={Marques} />
          <Route exact path="/mobilemarques" component={MobileMarques} />
          <Route exact path="/blog" component={PrismicBlog} />
          <Route path="/blog/:blogTitle" component={BlogDetails} />
          <Route path="/marques/:productId" component={MarqueDetails} />
          <Route path="/verre" render={(props) => <Verre match={props.match} />} />
          <Route path="/verre-novacel" render={(props) => <VerreNovacel match={props.match} />} />
          <Route path="/services" render={(props) => <Specialites match={props.match} />} />
          <Route path="/boutique" render={(props) => <Boutique match={props.match} />} />
        </Switch>

        <footer>
          <div className="footer-wrapper" >
            <div >
              <h5 >Produits et services</h5>
              <div  >
                <ul>
                  <li> <Link to="/marques" >Marques</Link> </li>
                  <li><Link to="/lunettes" >Lunettes</Link> </li>
                  <li><Link to="/verre/gammeverres" >Verres</Link> </li>
                  <li><Link to="/services" >Services</Link> </li>
                </ul>

              </div>
            </div>
            <div>
              <h5>A propos</h5>
              <div>
                <ul>
                  <li> <Link to="/boutique" >Les boutiques</Link>  </li>
                  <li> <Link to="/lequipe" >Les équipes</Link> </li>
                  <li> <Link to="/contact" >Contact</Link> </li>
                </ul>
              </div>
            </div>
            <div>
              <h5>Légal</h5>
              <div>
                <ul className="infos-de-contact" >
                  <li> <a href="https://www.opticalfactory-eshop.com/policies/privacy-policy ">Politique de confidentialité </a> </li>

                </ul>
              </div>
            </div>
            <div>
              <h5>SUIVEZ-NOUS</h5>
              <div>
                <ul style={{
                  display: 'flex',
                  justifyContent: 'space-around'
                }} >
                  <li style={{ marginLeft: "-20%" }} > <a href="https://www.facebook.com/OpticalFactory95/"><img src="/images/facebook.svg" alt="FB" /></a> </li>
                  <li> <a href="https://www.instagram.com/optical_factory/"> <img src="/images/instagram.svg" alt="Instagram" /></a></li>
                </ul>
              </div>

            </div>
          </div>
        </footer>

      </main>
    );
  }
}

const App = withRouter(TheApp);
export default App;
