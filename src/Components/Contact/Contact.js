import React from 'react';
import { Route } from 'react-router-dom';
import classes from './Contact.module.css';



function Contact (props) {

    //Functions
    const emailClickedHandler = () => {
        props.history.push(props.match.url + "/email");
    }

    const phoneClickedHandler = () => {
        props.history.push(props.match.url + "/phone");
    }

    return (
        <>
            <p>Par quel moyen souhaitez-vous me contacter ?</p>
            <h1>Contact</h1>
            <button onClick={emailClickedHandler} className={classes.button}>Email</button>
            <button onClick={phoneClickedHandler} className={classes.button}>Téléphone</button>
            <Route path = {props.match.url + "/email"} render={() => <p>Email</p>}/>
            <Route path = {props.match.url + "/phone"}render={() => <p>Téléphone</p>}/>
        </>
    );
}

export default Contact;