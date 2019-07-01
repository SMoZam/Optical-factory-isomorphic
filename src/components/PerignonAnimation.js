import React from 'react';

const PerignonAnimation = () => {
    return (

        <section className="loading-page">
            <div style={{
                height: '230px',
                backgroundColor: 'white'
            }} ></div>
            <div className="container loading-box">
                <img src="../images/loader.png" alt="loader" />
            </div>
            <div style={{
                height: '430px',
                backgroundColor: 'white'
            }} ></div>
        </section>
    );
}

export default PerignonAnimation;