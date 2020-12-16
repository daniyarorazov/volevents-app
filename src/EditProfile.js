import React, { useState, useCallback } from 'react';
import app from "./base.js";
import { withRouter } from "react-router";
import { v4 as uuidv4 } from "uuid";



const EditProfile = ({history}) => {

    
    const db = app.firestore();

    const profile_id = window.location.search.replace('?id=', '').toString();
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    
   
  

    const handleEditProfile = useCallback(async event => {
        event.preventDefault();
        const { firstname, lastname } = event.target.elements;

        try {
            return db.collection('users').doc(profile_id).
            update({ 
                firstname: firstname.value,
                lastname: lastname.value
            });
        } catch (error) {
            alert(error)
        } finally {
            
            history.push("/profile");
        }
    }, [history]); 



    return (
        <>
            <h2>Edit profile</h2>
            <form onSubmit={handleEditProfile}>
                <input type="text" name="firstname" value={firstname} onChange={(e) => setFirstname(e.target.value)}/>
                <input type="text" name="lastname" value={lastname} onChange={(e) => setLastname(e.target.value)}/>
                <button type="submit">Edit profile</button>
            </form>
            
        </>
    )
}

export default withRouter(EditProfile);

