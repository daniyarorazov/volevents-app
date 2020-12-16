import React, { useState, useCallback } from 'react';
import app from "./base.js";
import { withRouter } from "react-router";
import { v4 as uuidv4 } from "uuid";



const EditProject = ({history}) => {


    const db = app.firestore();

    const project_id = window.location.search.replace('?id=', '').toString();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    
   
  

    const handleAddProject = useCallback(async event => {
        event.preventDefault();
        const { title, description } = event.target.elements;

        try {
            return db.collection('projects').doc(project_id).
            update({ 
                title_project: title.value,
                description_project: description.value
            });
            

        } catch (error) {
            alert(error)
        } finally {
            
            history.push("/");
        }

      


    }, [history]); 

 

    return (
        <>
            <h2>Edit project: {title}</h2>
            <form onSubmit={handleAddProject}>
                <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)}/>
                <textarea type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)} />
                <button type="submit">Edit project</button>
            </form>
        </>
    )
}

export default withRouter(EditProject);

