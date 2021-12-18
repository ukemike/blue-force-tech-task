import React from "react";
import AppointmentList from "../components/AppointmentList";
import Header from "../components/Header";
import Footer from "../components/Footer";

const AppointmentListScreen = () => {
  return (
    <>
      <Header />
      <AppointmentList />
      <Footer />
    </>
  );
};

export default AppointmentListScreen;
