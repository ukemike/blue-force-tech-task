import {
  APPOINTMENT_CREATE_FAIL,
  APPOINTMENT_CREATE_REQUEST,
  APPOINTMENT_CREATE_SUCCESS,
  APPOINTMENT_LIST_FAIL,
  APPOINTMENT_LIST_SUCCESS,
  APPOINTMENT_LIST_REQUEST,
  APPOINTMENT_LIST_RESET,
  APPOINTMENT_DELETE_REQUEST,
  APPOINTMENT_DELETE_SUCCESS,
  APPOINTMENT_DELETE_FAIL,
} from "../constants/appointmentConstants";

export const createAppointmentReducer = (state = {}, action) => {
  switch (action.type) {
    case APPOINTMENT_CREATE_REQUEST:
      return { loading: true };
    case APPOINTMENT_CREATE_SUCCESS:
      return { loading: false,  success: true, appointmentInfo: action.payload };
    case APPOINTMENT_CREATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const appointmentListReducer = (
  state = { appointments: [] },
  action
) => {
  switch (action.type) {
    case APPOINTMENT_LIST_REQUEST:
      return { loading: true };
    case APPOINTMENT_LIST_SUCCESS:
      return {
        loading: false,
        appointments: action.payload.appointments,
        pages: action.payload.pages,
        page: action.payload.page,
      };
    case APPOINTMENT_LIST_FAIL:
      return { loading: false, error: action.payload };
    case APPOINTMENT_LIST_RESET:
      return { appointments: [] };
    default:
      return state;
  }
};

export const appointmentDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case APPOINTMENT_DELETE_REQUEST:
      return { loading: true };
    case APPOINTMENT_DELETE_SUCCESS:
      return { loading: false, success: true };
    case APPOINTMENT_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
