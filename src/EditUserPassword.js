import React, { useState, useCallback } from 'react';
import { Route, Link } from 'react-router-dom';
import { withRouter } from "react-router";
import app from './base.js';

const EditUserPassword = ({history}) => {

    const [current_password, setCurrentPassword] = useState('');
    const [new_password, setNewPassword] = useState('');

    const email_user = app.auth().currentUser.email;
    const user_id = app.auth().currentUser.uid;

    const handleEditUserEmail = useCallback(async event => {
        event.preventDefault();

        const { current_password, new_password } = event.target.elements;

        try {
            app.auth().signInWithEmailAndPassword(email_user, current_password.value)
            .then(function(userCredential) {
                userCredential.user.updatePassword(new_password.value)
            });


            history.push('./profile')

        } catch(error) {
            alert(error);
        } finally {
        }


    },[history]);

    return (
        <>
        
            <h2>Edit Password</h2>
            <form onSubmit={handleEditUserEmail}>
                <input 
                    type="password" 
                    name="current_password" 
                    placeholder="Current password" 
                    value={current_password} 
                    onChange={(e) => setCurrentPassword(e.target.value)}/>
                <input 
                    type="password" 
                    name="new_password" 
                    placeholder="New password" 
                    value={new_password} 
                    onChange={(e) => setNewPassword(e.target.value)}/>
                <button type="submit">Edit Password</button>
            </form>
            <Link to="./profile"><button>Cancel</button></Link>

        
        </>
    )
}

export default withRouter(EditUserPassword);