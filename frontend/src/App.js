import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import UserListScreen from "./screens/UserListScreen";
import AppointmentListScreen from "./screens/AppointmentListScreen";

const App = () => {
  return (
    <Router>
      <Switch>
      <Route path="/page/:pageNumber" component={UserListScreen} exact />
      <Route path="/page/:pageNumber" component={AppointmentListScreen} exact />

        <Route path="/" component={HomeScreen} exact />
        <Route path="/login" component={LoginScreen} />
        <Route path="/register" component={RegisterScreen} />
        <Route path="/admin/userlist" component={UserListScreen} />
        <Route path="/admin/appointmentlist" component={AppointmentListScreen} />
        

       
        
      </Switch>
    </Router>
  );
};

export default App;
