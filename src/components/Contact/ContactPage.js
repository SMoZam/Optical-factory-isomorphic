import React, { Component } from 'react';

import api from "../../api";

import "./Contact.css"

class ContactPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: "",
            email: "",
            message: "",
            number: "",
            date: "",
            feedbackMessage: "",
            boutique: "",
            boutique2: "",
            boutique3: ""
        }
    }


    componentDidMount() {
        window.scrollTo(0, 0);

    }

    updateName(event) {
        const { value } = event.target;
        this.setState({ fullName: value });
    }

    updateEmail(event) {
        const { value } = event.target;
        this.setState({ email: value });
    }

    updateMessage(event) {
        const { value } = event.target;
        this.setState({ message: value });
    }

    updateNumber(event) {
        const { value } = event.target;
        this.setState({ number: value });
    }

    updateDate(event) {
        const { value } = event.target;
        this.setState({ date: value });
    }

    updateBoutique(event) {
        const { value } = event.target;
        this.setState({ date: value });
    }




    handleSubmit(event) {
        event.preventDefault();
        api.post("/send-email", this.state)
            .then((info) => {
                // console.log(info)
                this.setState({
                    feedbackMessage: "Your message has been sent",
                    fullName: "",
                    email: "",
                    message: "",
                    number: "",
                    date: ""
                })
            })
            .catch(err =>
                console.log("HandleSubmit pb", err)
            )
    }

    render() {
        const { fullName, email, message, feedbackMessage, number, date, boutique, boutique2, boutique3 } = this.state;


        return (

            <React.Fragment>

                <div className="verre-banner" >
                    <h1>Contact</h1>
                </div>
                <section className="contact-page">

                    <h3>Prendre un rendez-vous</h3>
                    <div className="form-section-wrapper">
                        <div className="form-section">
                            <form onSubmit={event => this.handleSubmit(event)}>
                                <h4 style={{ marginBottom: "9%" }} >Vos coordonnées</h4>
                                {feedbackMessage &&
                                    <p className="success-message">{feedbackMessage}</p>
                                }

                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                        value={fullName}
                                        placeholder="Prénom et Nom *"
                                        onChange={event => this.updateName(event)} />
                                </div>

                                <div className="form-group">
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                        value={email}
                                        placeholder="email *"
                                        onChange={event => this.updateEmail(event)} />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="exampleInputNumber"
                                        aria-describedby="emailHelp"
                                        value={number}
                                        placeholder="Téléphone *"
                                        onChange={event => this.updateNumber(event)} />
                                </div>
                                <h4 style={{ marginBottom: "9%" }} >Votre rendez-vous</h4>
                                <input
                                    type="checkbox"
                                    className="checkbox-form"
                                    aria-describedby="emailHelp"
                                    id="checkboxInputdonneePersonnelle"
                                    value={boutique}
                                    onChange={event => this.updateBoutique(event)} />
                                <label className="label-input-donneePersonnelle" >Carré Sénart </label>
                                <input
                                    type="checkbox"
                                    className="checkbox-form"
                                    aria-describedby="emailHelp"
                                    id="checkboxInputdonneePersonnelle"
                                    value={boutique2}
                                    onChange={event => this.updateBoutique(event)} />
                                <label className="label-input-donneePersonnelle" >Coté seine </label>

                                <div >
                                    <input
                                        type="checkbox"
                                        className="checkbox-form"
                                        aria-describedby="emailHelp"
                                        id="checkboxInputdonneePersonnelle"
                                        value={boutique3}
                                        onChange={event => this.updateBoutique(event)} />
                                    <label className="label-input-donneePersonnelle" >Victor Hugo </label>
                                </div>

                                <div className="form-group">
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="exampleInputDate"
                                        aria-describedby="emailHelp"
                                        value={date}
                                        placeholder="Date souhaitée"
                                        onChange={event => this.updateDate(event)} />
                                </div>

                                <div className="form-group">

                                    <textarea
                                        className="form-control text-area-control"
                                        id="exampleFormControlTextarea1"
                                        rows="3"
                                        value={message}
                                        placeholder="Vos précision"
                                        onChange={event => this.updateMessage(event)}></textarea>
                                </div>
                                <button type="submit" className="btn">Envoyer la demande</button>
                            </form>
                        </div>


                        <div className="contact-info-boutique-wrapper">
                            <div className="contact-info-boutique" >
                                <h4>Centre commercial coté Seine</h4>
                                <p>50 Av. Maréchal Foch<br />
                                    95100 Argenteuil<br /> <br />
                                    Niveau RDC - Entrée 3 Paul-Vaillant Couturier
                                </p>
                                <h4>Coordonnées</h4>
                                <p>01 34 10 05 99<br />
                                    info@opticalfactory-store.com
                                </p>
                            </div>
                            <div className="contact-info-boutique" >
                                <h4>Centre commercial Carré Sénart</h4>
                                <p>3 allée du Préambule<br />
                                    77127 Lieusaint<br /> <br />
                                    Niveau 0 - Porte 3
                                </p>

                                <h4>Coordonnées</h4>
                                <p> 01 60 34 18 87<br />
                                    senart@opticalfactory-store.com
                                </p>
                            </div>
                            <div className="contact-info-boutique" >
                                <h4>Boutique Paris 16ème</h4>
                                <p>107 Avenue Victor Hugo,<br />
                                    75116 Paris<br />
                                </p>
                                <h4>Coordonnées</h4>
                                <p>01 44 05 97 01<br />
                                    contact@opticalfactory-eshop.com
                                </p>
                            </div>
                        </div>



                    </div>
                </section>

            </React.Fragment>

        );
    }
}

export default ContactPage;