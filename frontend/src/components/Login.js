import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { login } from '../actions/userActions'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin

  useEffect(() => {
    if (userInfo) {
      window.location = "/"
    }
  }, [userInfo])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
  }
  return (
    <>
      <div>
        <div className="page-banner-area item-5">
          <div className="container">
            <div className="page-banner-content">
              <h2>Login</h2>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>Login</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="login-area ptb-100">
          <div className="container">
            <div className="login-form">
              <h2>Login</h2>
              {error && <Message variant='danger'>{error}</Message>}
              {loading && <Loader />}
              <form onSubmit={submitHandler}>
                <div className="form-group">
                  <label>Username or email</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username or email"
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
                <div className="row align-items-center">
                  <div className="col-lg-6 col-md-6 col-sm-6 col-6 remember-me-wrap">
                    <p>
                      <input type="checkbox" id="test1" />
                      <label htmlFor="test1">Remember me</label>
                    </p>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-6 lost-your-password-wrap">
                    <a
                      href="forgot-password.html"
                      className="lost-your-password"
                    >
                      Forgot password ?
                    </a>
                  </div>
                </div>
                <button type="submit" className="default-btn">
                  Login <i className="flaticon-right-arrow" />
                </button>
                <div className="account-text">
                  <p>
                    Don’t have an account?{" "}
                    <a href="register.html">Register now</a>
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

export default Login;
