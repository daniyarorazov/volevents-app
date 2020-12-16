import React, { useState, useCallback } from 'react';
import { Route, Link } from 'react-router-dom';
import { withRouter } from "react-router";
import app from './base.js';

const EditUserEmail = ({history}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const email_user = app.auth().currentUser.email;
    const user_id = app.auth().currentUser.uid;

    const handleEditUserEmail = useCallback(async event => {
        event.preventDefault();

        const { email, password } = event.target.elements;

        try {
            app.auth().signInWithEmailAndPassword(email_user, password.value)
            .then(function(userCredential) {
                userCredential.user.updateEmail(email.value)
            });

            app.firestore().collection('users').doc(user_id).update({ 
                email: email.value,
            });

            history.push('./profile')

        } catch(error) {
            alert(error);
        } finally {
        }


    },[history]);

    return (
        <>
        
            <h2>Edit Email</h2>
            <form onSubmit={handleEditUserEmail}>
                <input 
                    type="email" 
                    name="email" 
                    placeholder="Enter email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}/>
                <input 
                    type="password" 
                    name="password" 
                    placeholder="*******" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}/>
                <button type="submit">Edit Email</button>
            </form>
            <Link to="./profile"><button>Cancel</button></Link>

        
        </>
    )
}

export default withRouter(EditUserEmail);