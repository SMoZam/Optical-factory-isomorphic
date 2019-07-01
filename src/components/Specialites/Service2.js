import React from 'react';

const Service2 = (props) => {
    return (
        <React.Fragment>
            <section>
                <div className="specialite-text-wrapper">
                    <div className="text">
                        <h2 style={{ marginLeft: "30px" }}>{props.data.service_headline[0].text}</h2>
                        <p>{props.data.service_paragraph[0].text}</p>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default Service2;