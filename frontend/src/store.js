import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
  userLoginReducer,
  userRegisterReducer,
  userListReducer,
  userDeleteReducer,
} from './reducers/userReducers'
import {
  createAppointmentReducer,
  appointmentListReducer,
  appointmentDeleteReducer,
} from './reducers/appointmentReducer'

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userList: userListReducer,
  userDelete: userDeleteReducer,

  createAppointment: createAppointmentReducer,
  appointmentList: appointmentListReducer,
  appointmentDelete: appointmentDeleteReducer
})



const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null



const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
