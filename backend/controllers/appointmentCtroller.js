import asyncHandler from 'express-async-handler'
import Appointment from '../models/appointmentModel.js'


// @desc    Create a new appointment
// @route   POST /api/appointment
// @access  Public
const createAppointment = asyncHandler(async (req, res) => {
  const { name, email, date, dept, doctor, msg } = req.body

  const appointment = await Appointment.create({
    name, email, date, dept, doctor, msg, user: req.user._id,
  })

  if (appointment) {
    res.status(201).json({
      _id: appointment._id,
      name: appointment.name,
      email: appointment.email,
      date: appointment.date,
      dept: appointment.dept,
      doctor: appointment.doctor,
      msg: appointment.msg,
      message: "Appointment Created Sucessfully",
      success: true
    })
  } else {
    res.status(400)
    throw new Error('An error occured')
  }
})

// @desc    Get all appointements
// @route   GET /api/appointements
// @access  Private/Admin
const getAppointments = asyncHandler(async (req, res) => {
  const pageSize = 10
  const page = Number(req.query.pageNumber) || 1

  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: 'i',
        },
      }
    : {}

  const count = await Appointment.countDocuments({ ...keyword })
  const appointments = await Appointment.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1))

  res.json({ appointments, page, pages: Math.ceil(count / pageSize) })
})

// @desc    Delete appointement
// @route   DELETE /api/appointement/:id
// @access  Private/Admin
const deleteAppointement = asyncHandler(async (req, res) => {
  const appointement = await Appointment.findById(req.params.id)

  if (appointement) {
    await appointement.remove()
    res.json({ message: 'Appointement removed' })
  } else {
    res.status(404)
    throw new Error('Appointement not found')
  }
})

export {
  createAppointment,
  getAppointments,
  deleteAppointement,
}
