import React from 'react';
import { Route, Link } from 'react-router-dom';
import app from './base.js';

const EditProfileMenu = () => {

    const user_id = app.auth().currentUser.uid;

    return (
        <>
        
            <Link to={`./edit_profile?id=${user_id}`}><button>Edit main information</button></Link>
            <Link to={`./edit_user_email?id=${user_id}`}><button>Edit email</button></Link>
            <Link to={`./edit_user_password?id=${user_id}`}><button>Edit password</button></Link>

        </>
    )

}

export default EditProfileMenu;