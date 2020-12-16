import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";
import Profile from './Profile';
import AddProject from './AddProject';
import ListProjects from './ListProjects';
import EditProject from './EditProject';
import EditProfile from './EditProfile';
import EditProfileMenu from './EditProfileMenu';
import EditUserEmail from './EditUserEmail';
import EditUserPassword from './EditUserPassword';
import ProjectPage from './ProjectPage';
import Help from './Help';
import { AuthProvider } from "./Auth";
import PrivateRoute from "./PrivateRoute";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div>
          <PrivateRoute exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <PrivateRoute exact path="/profile" component={Profile} />
          <PrivateRoute exact path="/add_project" component={AddProject} />
          <PrivateRoute exact path="/list_projects" component={ListProjects} />
          <PrivateRoute exact path="/edit_project" component={EditProject} />
          <PrivateRoute exact path="/edit_profile" component={EditProfile} />
          <PrivateRoute exact path="/edit_profile_menu" component={EditProfileMenu} />
          <PrivateRoute exact path="/edit_user_email" component={EditUserEmail} />
          <PrivateRoute exact path="/edit_user_password" component={EditUserPassword} />
          <PrivateRoute exact path="/project_page" component={ProjectPage} />
          <PrivateRoute exact path="/help" component={Help} />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
