import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../actions/userActions";

const Header = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <>
      <div>
        <div className="navbar-area navbar-style-three">
          <div className="main-responsive-nav">
            <div className="container">
              <div className="main-responsive-menu">
                <div className="logo">
                  <Link to="/">
                    <img src="/assets/images/logo.png" alt="logo" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="main-navbar">
            <div className="container">
              <nav className="navbar navbar-expand-md navbar-light">
                <Link className="navbar-brand" to="/">
                  <img src="/assets/images/logo.png" alt="logo" />
                </Link>
                <div
                  className="collapse navbar-collapse mean-menu"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav m-auto">
                    <li className="nav-item">
                      <Link to="/" className="nav-link">
                        Home
                      </Link>
                    </li>

                    {userInfo ? (
                      <>
                      <li className="nav-item">
                        <Link to="#" className="nav-link">
                          Dashboard
                          <i className="ri-arrow-down-s-line" />
                        </Link>
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link to="/admin/userlist" className="nav-link">
                              Users
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              to="/admin/appointmentlist"
                              className="nav-link"
                            >
                              Appointments
                            </Link>
                          </li>
                        </ul>
                      </li>
                      

                      <li className="nav-item">
                          <Link to="#" className="nav-link" onClick={logoutHandler}>
                            Logout
                          </Link>
                        </li>
                        </>
                    ) : (
                      <>
                        <li className="nav-item">
                          <Link to="/login" className="nav-link">
                            Login
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link to="/register" className="nav-link">
                            Register
                          </Link>
                        </li>
                      </>
                    )}

                    {userInfo ? (
                      <li className="nav-item">
                        <Link to="#" className="nav-link">
                          Hi {userInfo.name}
                        </Link>
                      </li>
                    ) : (
                      ""
                    )}
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
