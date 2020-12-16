import React, { useState, useCallback } from 'react';
import app from "./base.js";
import { withRouter } from "react-router";
import { v4 as uuidv4 } from "uuid";
import './DefaultStyles.css';
import './AddProject.css';
import Sidebar from './Sidebar';


const AddProject = ({history}) => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [geolocation, setGeolocation] = useState('');
    const [foodRadio, setFoodRadio] = useState('');
    const [transportRadio, setTransportRadio] = useState('');
    const [equipmentRadio, setEquipmentRadio] = useState('');

    const userId = app.auth().currentUser.uid;



    const handleAddProject = useCallback(async event => {
        event.preventDefault();
        const { title, description, date, time, geolocation, foodRadio, transportRadio, equipmentRadio } = event.target.elements;

        try {
            let project_id = uuidv4().toString();
            
            return app.firestore().collection('projects').doc(project_id)
            .set({
              project_id: project_id, 
              title_project: title.value,
              description_project: description.value,
              date: date.value,
              time: time.value,
              geolocation: geolocation.value,
              food: foodRadio.value,
              transport: transportRadio.value,
              equipment: equipmentRadio.value,
              userId: userId
            });

            

        } catch (error) {
            alert(error)
        } finally {
            history.push("/");
        }




    }, [history]); 

    return (
        <>
            
            <Sidebar />

            <main>
                <h2 className="main-title">Добавление мероприятия</h2>
                <div className="main-block">
                    <form onSubmit={handleAddProject} className="main-form">
                        <div className="group">
                            <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Название проекта</label>
                        </div>
                        <div className="group">
                            <input type="text" name="date" value={date} onChange={(e) => setDate(e.target.value)} required />
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Дата мероприятия</label>
                        </div>
                        <div className="group">
                            <input type="text" name="time" value={time} onChange={(e) => setTime(e.target.value)} required />
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Время начала</label>
                        </div>
                        <div className="group">
                            <input type="text" name="geolocation" value={geolocation} onChange={(e) => setGeolocation(e.target.value)} required />
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Место проведения</label>
                        </div>
                        <div className="group">
                            <h2>Бесплатная еда</h2>
                            <div className="group-radio">
                                <div className="radio">
                                    <input className="radio__input" type="radio" name="foodRadio" value={"Yes"} onChange={(e) => setFoodRadio(e.target.value)} id="radio1" />
                                    <span className="radio__text">Да</span>
                                </div>
                                <div className="radio">
                                    <input className="radio__input" type="radio" name="foodRadio" value={"No"} onChange={(e) => setFoodRadio(e.target.value)} id="radio2" />
                                    <span className="radio__text">Нет</span>
                                </div>
                            </div>
                        </div>
                        <div className="group">
                            <h2>Бесплатная развозка</h2>
                            <div className="group-radio">
                                <div className="radio">
                                    <input className="radio__input" type="radio" name="transportRadio" value={"Yes"} onChange={(e) => setTransportRadio(e.target.value)} id="radio1" />
                                    <span className="radio__text">Да</span>
                                </div>
                                <div className="radio">
                                    <input className="radio__input" type="radio" name="transportRadio" value={"No"} onChange={(e) => setTransportRadio(e.target.value)} id="radio2" />
                                    <span className="radio__text">Нет</span>
                                </div>
                            </div>
                        </div>
                        <div className="group">
                            <h2>Бесплатное оборудование</h2>
                            <div className="group-radio">
                                <div className="radio">
                                    <input className="radio__input" type="radio" name="equipmentRadio" value={"Yes"} onChange={(e) => setEquipmentRadio(e.target.value)} id="radio1" />
                                    <span className="radio__text">Да</span>
                                </div>
                                <div className="radio">
                                    <input className="radio__input" type="radio" name="equipmentRadio" value={"No"} onChange={(e) => setEquipmentRadio(e.target.value)} id="radio2" />
                                    <span className="radio__text">Нет</span>
                                </div>
                            </div>
                        </div>
                        <div className="group">
                            <textarea type="text" name="description" maxLength="1000" value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Описание мероприятия</label>
                        </div>
                        <button type="submit" className="button">Создать</button>
                    </form>
                </div>
                <button className="button button-cancel">Отмена</button>
            </main>
        </>
    )


   
}

export default withRouter(AddProject);

