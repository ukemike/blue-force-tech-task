import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { createAppointmet } from "../actions/appointmentAction";

const Banner = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [dept, setDept] = useState("");
  const [doctor, setDoctor] = useState("");
  const [msg, setMsg] = useState("");
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  const createAppointment = useSelector((state) => state.createAppointment);
  const { loading, error, success, appointmentInfo } = createAppointment;

  useEffect(() => {
    if (appointmentInfo) {
     console.log("appointment")
    }
  }, [appointmentInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createAppointmet(name, email, date, dept, doctor, msg));
  };
  return (
    <>
      <div className="main-banner-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-12">
              <div className="main-banner-content">
                <span>Welcome to mebid</span>
                <h1>We are by your side in any services</h1>
                <p>
                  We provide all kinds of medical services to our patients
                  according to their <br /> daily needs starting from special
                  conditions
                </p>
                <ul className="banner-list">
                  <li>
                    <i className="flaticon-emergency" />
                    <span>Urgent care</span>
                  </li>
                  <li className="primary-care">
                    <i className="flaticon-stethoscope" />
                    <span>Primary care</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-5 col-md-12">
              <div className="main-banner-appointment">
                <div className="content">
                  <h3>Book appointment</h3>
                  <p>Fillup the form to make an appointment with the doctor</p>
                </div>
                {message && <Message variant="danger">{message}</Message>}
                {error && <Message variant="danger">{error}</Message>}
                {success && <Message>Appointment Booked</Message>}
                {loading && <Loader />}
                <form onSubmit={submitHandler}>
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Full name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="email"
                      placeholder="Email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Booking date"
                      id="datepicker"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                    />
                    <label>
                      <i className="ri-calendar-todo-line" />
                    </label>
                  </div>
                  <div className="form-group">
                    <select
                      className="selectize-filter"
                      value={dept}
                      onChange={(e) => setDept(e.target.value)}
                    >
                      <option value="Department">Department</option>
                      <option value="Cardiology">Cardiology</option>
                      <option value="Orthopedics">Orthopedics</option>
                      <option value="Pulmonology">Pulmonology</option>
                      <option value="Dental">Dental</option>
                      <option value="Medicine">Medicine</option>
                      <option value="Ophthalmology">Ophthalmology</option>
                      <option value="Neurology">Neurology</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <select
                      className="selectize-filter"
                      value={doctor}
                      onChange={(e) => setDoctor(e.target.value)}
                    >
                      <option value="Select doctor">Select doctor</option>
                      <option value="Anne mcfadden">Anne mcfadden</option>
                      <option value="Victoria roach">Victoria roach</option>
                      <option value="Lyle kauffman">Lyle kauffman</option>
                      <option value="Ellis schaefer">Ellis schaefer</option>
                      <option value="Larry lin">Larry lin</option>
                      <option value="Kasey burt">Kasey burt</option>
                      <option value="Howard burns">Howard burns</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <textarea
                      name="message"
                      className="form-control"
                      placeholder="Your message"
                      defaultValue={""}
                      value={message}
                      onChange={(e) => setMsg(e.target.value)}
                    />
                  </div>
                  <div className="appointment-btn">
                    <button type="submit" className="default-btn">
                      Book appointment <i className="flaticon-right-arrow" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
