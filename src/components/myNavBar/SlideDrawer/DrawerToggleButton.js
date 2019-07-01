import React from 'react';

import './DrawerToggleButton.css';

const DrawerToggleButton = props => (
    <button className="toggle-button" onClick={props.click} >
        <img src="./images/burger_blanc.svg" alt=""/>
    </button>
);

export default DrawerToggleButton;