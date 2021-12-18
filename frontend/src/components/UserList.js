import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Redirect, useParams } from "react-router-dom";
import Message from "../components/Message";
import Loader from "../components/Loader";
import Paginate from "../components/Paginate";
import { listUsers, deleteUser } from "../actions/userActions";

const UserList = ({ history }) => {
  let { pageNumber } = useParams() || 1;

  const dispatch = useDispatch();

  const userList = useSelector((state) => state.userList);
  const { loading, error, users, page, pages } = userList;

  const userDelete = useSelector((state) => state.userDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = userDelete;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    }
    dispatch(listUsers("", pageNumber));
  }, [dispatch, history, userInfo, successDelete, pageNumber]);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure")) {
      dispatch(deleteUser(id));
    }
  };
  return (
    <>
      <div>
        <div className="page-banner-area">
          <div className="container">
            <div className="page-banner-content">
              <h2>User List</h2>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>User List</li>
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
                    <Message >User Deleted!</Message>
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
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                          </tr>
                        </thead>
                        <tbody>
                          {users.map((data) => (
                            <tr key={data._id}>
                              <td>
                                <a href="#" className="remove" onClick={() => deleteHandler(data._id)}>
                                  <i className="ri-close-line" />
                                </a>
                              </td>

                              <td className="product-price">
                                <span className="unit-amount">{data._id}</span>
                              </td>

                              <td className="product-price">
                                <span className="unit-amount">{data.name}</span>
                              </td>

                              <td className="product-subtotal">
                                <span className="subtotal-amount">{data.email}</span>
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

export default UserList;
