//Librairie
import React from 'react';
import classes from './Layout.module.css';

// Component
import Header from '../../Components/Header/Header.js';

function Layout (props) {
    return (
    <div>
        <>
            <Header/>

            {props.children}

            {/* Footer */}
        </>

    </div>
    );
}

/*
    - Header
        - logo
        - Navigation
            - NavigationItem
*/

export default Layout;