import React from 'react';
import classes from './MenuLink.module.css'

function MenuLink(props) {
    return (
        <div className={`${classes.menuLink} ${props.active? 'active' : ''}`} onClick={props.onAction}>
            <a>{props.children}</a>
        </div>
    );
}

export default MenuLink;
