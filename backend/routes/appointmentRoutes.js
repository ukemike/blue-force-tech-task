import express from 'express'
const router = express.Router()
import {
    createAppointment,
    getAppointments,
    deleteAppointement,
} from '../controllers/appointmentCtroller.js'
import { protect, admin } from '../middleware/authMiddleware.js'

router.route('/').post(protect, createAppointment).get(protect, getAppointments)

router.route('/:id').delete(protect, deleteAppointement)

export default router
