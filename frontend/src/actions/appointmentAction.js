import axios from 'axios'
import {
  APPOINTMENT_CREATE_FAIL,
  APPOINTMENT_CREATE_REQUEST,
  APPOINTMENT_CREATE_SUCCESS,
  APPOINTMENT_LIST_FAIL,
  APPOINTMENT_LIST_SUCCESS,
  APPOINTMENT_LIST_REQUEST,
  APPOINTMENT_DELETE_REQUEST,
  APPOINTMENT_DELETE_SUCCESS,
  APPOINTMENT_DELETE_FAIL,
} from '../constants/appointmentConstants'
import { logout } from './userActions'

export const createAppointmet = (name, email, date, dept, doctor, msg) => async (dispatch, getState) => {
    try {
      dispatch({
        type: APPOINTMENT_CREATE_REQUEST,
      })
  
      const {
        userLogin: { userInfo },
      } = getState()
  
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
  
      const { data } = await axios.post(
        '/api/appointements',
        { name, email, date, dept, doctor, msg },
        config
      )
  
      dispatch({
        type: APPOINTMENT_CREATE_SUCCESS,
        payload: data,
      })

    } catch (error) {
      dispatch({
        type: APPOINTMENT_CREATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }
  
  export const listAppointment = (keyword = '', pageNumber = '') => async (dispatch, getState) => {
    try {
      dispatch({
        type: APPOINTMENT_LIST_REQUEST,
      })
  
      const {
        userLogin: { userInfo },
      } = getState()
  
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
  
      const { data } = await axios.get(`/api/appointements?keyword=${keyword}&pageNumber=${pageNumber}`, config)
  
      dispatch({
        type: APPOINTMENT_LIST_SUCCESS,
        payload: data,
      })
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      if (message === 'Not authorized, token failed') {
        dispatch(logout())
      }
      dispatch({
        type: APPOINTMENT_LIST_FAIL,
        payload: message,
      })
    }
  }
  
  export const deleteAppointment = (id) => async (dispatch, getState) => {
    try {
      dispatch({
        type: APPOINTMENT_DELETE_REQUEST,
      })
  
      const {
        userLogin: { userInfo },
      } = getState()
  
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
  
      await axios.delete(`/api/appointements/${id}`, config)
  
      dispatch({ type: APPOINTMENT_DELETE_SUCCESS })
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      if (message === 'Not authorized, token failed') {
        dispatch(logout())
      }
      dispatch({
        type: APPOINTMENT_DELETE_FAIL,
        payload: message,
      })
    }
  }