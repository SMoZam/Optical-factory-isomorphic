import React from 'react';


import './Toolbar.css';
import '../SlideDrawer/DrawerToggleButton'
import DrawerToggleButton from '../SlideDrawer/DrawerToggleButton';

const toolbar = props => (

            <div className="toolbar" >
                <DrawerToggleButton click={props.drawerClickHandler} />   
            </div >
);

export default toolbar;