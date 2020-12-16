import React, {useState, useEffect} from 'react';
import app from './base.js';
import Sidebar from './Sidebar';
import './ProjectPage.css';
import './DefaultStyles.css';

const ProjectPage = () => {

    const project_id = window.location.search.replace('?id=', '').toString();
    

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [geolocation, setGeolocation] = useState('');
    const [foodRadio, setFoodRadio] = useState('');
    const [transportRadio, setTransportRadio] = useState('');
    const [equipmentRadio, setEquipmentRadio] = useState('');
    const [projectCreator, setProjectCreator] = useState('');
    const button = document.querySelector('.main-button-edit');
    
    const getUserData = async () => {
        try {
            app.firestore().collection("projects")
            .doc(project_id)
            .get()
            .then(doc => {
                setTitle(doc.get("title_project"));
                setDescription(doc.get("description_project"));
                setDate(doc.get("date"));
                setTime(doc.get("time"));
                setGeolocation(doc.get("geolocation"));
                setFoodRadio(doc.get("food"));
                setTransportRadio(doc.get("transport"));
                setEquipmentRadio(doc.get("equipment"));
                setProjectCreator(doc.get("userId"));
            });
            

        } catch (error) {
            alert(error)
        } 
    }

    useEffect(() => {
        getUserData();
    }, []);

    const userId = app.auth().currentUser.uid;

    if (userId == projectCreator) {
        console.log(true);
    } else {
        console.log(false);
    }


    const deletProject = () => {
        try {
        app.firestore().collection('projects').doc(project_id).delete();
        alert('Successed')
        } catch (e) {
            alert(e)
        }
    }

    return (
        <>
        
        <Sidebar />

        <main>
            <div class="main">
                <h2 class="main-title">{title}</h2>
                <div class="section-info">
                    <div class="section-block"><span class="section-item">Date: </span>{date}</div>
                    <div class="section-block"><span class="section-item">Time: </span>{time}</div>
                    <div class="section-block"><span class="section-item">Geolocation: </span>{geolocation}</div>
                    <div class="section-block"><span class="section-item">Free food: </span>{foodRadio}</div>
                    <div class="section-block"><span class="section-item">Free transport: </span>{transportRadio}</div>
                    <div class="section-block"><span class="section-item">Free equipment: </span>{equipmentRadio}</div>
                    <div class="section-block"><span class="section-item">Description: </span>
                        <p>
                            {description}
                        </p>
                    </div>
                </div>

                <button class="button-green main-button-contact">+ 7 747 483 19 38</button>
                <div className="section-control-block">
                    <button class="button-green main-button-edit">Edit information</button>
                    <button onClick={deletProject} class="button-red main-button-delete">Delete project</button>
                </div>

            </div>
	    </main>
        
        </>
    )
    

}

export default ProjectPage;