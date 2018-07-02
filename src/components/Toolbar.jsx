import React from 'react';

import DrawerButton from './SideDrawer/DrawerButton';
import './Toolbar.css'

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div className="toolbar_toggle-button">
                <DrawerButton click={props.drawerClickHandler}/>
            </div>
            <div className="toolbar_logo"><a href="/">Logo</a></div>
            <div className="space" />
            <div className="toolbar_navigation-items">
                <ul>
                    <li><a href="/">Acasa</a></li>
                    <li><a href="/Galery">Galerie</a></li>
                    <li><a href="/Contact">Contact</a></li>
                </ul>
            </div>
        </nav>            
    </header>    
);

export default toolbar;