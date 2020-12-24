import React, { useState, useCallback } from 'react';
import app from "./base.js";
import { withRouter } from "react-router";
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from "uuid";
import './DefaultStyles.css';
import './AddProject.scss';
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
                <div className="section-add-project">
                    <h2 className="section-title">Добавление мероприятия</h2>
                    <div className="section-block">
                        <form onSubmit={handleAddProject} className="main-form">
                            <div className="group">
                                <span class="group-label">Название</span>
                                <input type="text" class="group-form" name="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
                            </div>
                            <div className="group">
                                <span class="group-label">Дата начала</span>
                                <input type="text" class="group-form" name="date" value={date} onChange={(e) => setDate(e.target.value)} required />
                            </div>
                            <div className="group">
                                <span class="group-label">Время начала</span>
                                <input type="text" class="group-form" name="time" value={time} onChange={(e) => setTime(e.target.value)} required />
                            </div>
                            <div className="group">
                                <span class="group-label">Место проведения</span>
                                <input type="text" class="group-form" name="geolocation" value={geolocation} onChange={(e) => setGeolocation(e.target.value)} required />
                            </div>
                            <div className="group">
                                <span class="group__subtitle">Бесплатная еда</span>
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
                                <span class="group__subtitle">Бесплатная развозка</span>
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
                                <span class="group__subtitle">Бесплатное оборудование</span>
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
                                <span className="group-label">Описание мероприятия</span>
                                <textarea type="text" className="group-form label-description" name="description" maxLength="1000" value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
                            </div>
                            <button type="submit" className="add-project__button-create">Создать</button>
                        </form>
                    </div>
                    <Link to="/" className="add-project__button-cancel"><span>Отмена</span></Link>
                </div>
            </main>
        </>
    )


   
}

export default withRouter(AddProject);

