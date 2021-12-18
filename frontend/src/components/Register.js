import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { register } from "../actions/userActions";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;


  useEffect(() => {
    if (userInfo) {
      window.location = "/"
    }
  }, [userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
    } else {
      dispatch(register(name, email, password));
    }
  };
  return (
    <>
      <div>
        <div className="page-banner-area item-5">
          <div className="container">
            <div className="page-banner-content">
              <h2>Register</h2>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>Register</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="register-area ptb-100">
          <div className="container">
            <div className="register-form">
              <h2>Register</h2>
              {message && <Message variant="danger">{message}</Message>}
              {error && <Message variant="danger">{error}</Message>}
              {loading && <Loader />}
              <form onSubmit={submitHandler}>
                <div className="form-group">
                  <label>Username</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"

                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Confirm Password</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
                <div className="remember-me-wrap">
                  <p>
                    <input type="checkbox" id="test1" />
                    <label htmlFor="test1">
                      I agree with the{" "}
                      <a href="terms-of-service.html">Terms &amp; Conditions</a>
                    </label>
                  </p>
                </div>
                <button type="submit" className="default-btn">
                  Register now <i className="flaticon-right-arrow" />
                </button>
                <div className="account-text">
                  <p>
                    Already have an account? <a href="login.html">Login</a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="overview-area pt-75 pb-75">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-2 col-md-12">
                <div className="overview-logo">
                  <a href="index.html">
                    <img src="/assets/images/logo-2.png" alt="image" />
                  </a>
                </div>
              </div>
              <div className="col-lg-8 col-md-12">
                <div className="overview-content">
                  <h3>
                    Need more information please contact us or book an
                    appointment
                  </h3>
                </div>
              </div>
              <div className="col-lg-2 col-md-12">
                <div className="overview-btn">
                  <a href="contact.html" className="default-btn">
                    Contact us <i className="flaticon-right-arrow" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
