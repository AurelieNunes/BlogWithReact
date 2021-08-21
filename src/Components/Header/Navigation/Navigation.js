// Librairies
import React from 'react';
import classes from './Navigation.module.css';
import routes from '../../../config/routes';
import fire from '../../../config/firebase';
import { withRouter } from 'react-router-dom';

// Composants
import NavigationItem from './NavigationItem/NavigationItem';


function Navigation(props) {

    const logoutClickedHandler = () => {
        fire.auth().signOut();
        props.history.push(routes.HOME)
    }

    return (
        <ul className={classes.Navigation}>
            <NavigationItem exact to={routes.HOME}>Accueil</NavigationItem>
            <NavigationItem to={routes.ARTICLES}>Articles</NavigationItem>
            <NavigationItem to={routes.CONTACT}>Contact</NavigationItem>
            <NavigationItem exact to={routes.MANAGE_ARTICLE}>Admin</NavigationItem>
            <NavigationItem exact to={routes.AUTHENTIFICATION}>Authentification</NavigationItem>
            <button onClick={logoutClickedHandler} className={classes.logout}>Déconnexion</button>
        </ul>
    );
}

export default withRouter(Navigation);