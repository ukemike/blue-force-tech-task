import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Message from "../components/Message";
import Loader from "../components/Loader";
import Paginate from "../components/Paginate";
import { listAppointment, deleteAppointment } from "../actions/appointmentAction";

const AppointmentList = ({ history }) => {

  let { pageNumber } = useParams() || 1;

  const dispatch = useDispatch();

  const appointmentList = useSelector((state) => state.appointmentList);
  const { loading, error, appointments, page, pages } = appointmentList;

  const appointmentDelete = useSelector((state) => state.appointmentDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = appointmentDelete;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    }
    dispatch(listAppointment("", pageNumber));
  }, [dispatch, history, userInfo, successDelete, pageNumber]);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure")) {
      dispatch(deleteAppointment(id));
    }
  };
  return (
    <>
      <div>
        <div className="page-banner-area">
          <div className="container">
            <div className="page-banner-content">
              <h2>Appointments List</h2>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>Appointments List</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="cart-area ptb-100">
          <div className="container">
            <div className="col-lg-12 col-md-12">
              <form>
                <div className="cart-table table-responsive">
                  {loadingDelete && <Loader />}
                  {errorDelete && (
                    <Message variant="danger">{errorDelete}</Message>
                  )}
                  {successDelete && (
                    <Message >Appointment Deleted!</Message>
                  )}
                  {loading ? (
                    <Loader />
                  ) : error ? (
                    <Message variant="danger">{error}</Message>
                  ) : (
                    <>
                      <table className="table table-bordered">
                        <thead>
                          <tr>
                            <th scope="col">Remove</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Date</th>
                            <th scope="col">Department</th>
                            <th scope="col">Doctor</th>
                            <th scope="col">Message</th>
                          </tr>
                        </thead>
                        <tbody>
                          {appointments.map((data) => (
                            <tr key={data._id}>
                              <td>
                                <Link to="#" className="remove"  onClick={() => deleteHandler(data._id)}>
                                  <i className="ri-close-line" />
                                </Link>
                              </td>
                              
                              <td className="product-name">
                                <span href="#">{data.name}</span>
                              </td>

                              <td className="product-price">
                                <span className="unit-amount">{data.email}</span>
                              </td>
                             
                              <td className="product-subtotal">
                                <span className="subtotal-amount">{data.date}</span>
                              </td>

                              <td className="product-subtotal">
                                <span className="subtotal-amount">{data.dept}</span>
                              </td>

                              <td className="product-subtotal">
                                <span className="subtotal-amount">{data.dooctor}</span>
                              </td>

                              <td className="product-subtotal">
                                <span className="subtotal-amount">{data.msg}</span>
                              </td>

                            </tr>
                          ))}
                        </tbody>
                      </table>
                      <Paginate pages={pages} page={page} />
                    </>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppointmentList;
