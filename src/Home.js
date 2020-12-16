import React, {useState, useEffect} from "react";
import app from "./base";
import Sidebar from './Sidebar';
import './DefaultStyles.css';

const Home = () => {

  const [firstname, setFirstname] = useState('');
  const [loading, setLoading] = useState(false);

  function getData () {
    app.firestore().collection("users")
      .doc(app.auth().currentUser.uid)
      .get()
      .then(doc => {
          setFirstname(doc.get("firstname"));
    });
    
  }

  useEffect(() => {
    getData();
  });

 

  return (
    <>
      <Sidebar />
      <main>
        <h1>Home</h1>
        <h2>Hello, {firstname}</h2>
        <button onClick={() => document.location.replace('/profile')}>Profile</button>
        <button onClick={() => document.location.replace('/add_project')}>Add project</button>
        <button onClick={() => document.location.replace('/list_projects')}>List of projects</button>
        <button onClick={() => app.auth().signOut()}>Sign out</button>
      </main>
    </>
  );
};

export default Home;
