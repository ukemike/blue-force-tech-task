import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const appointmentSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    date: {
      type: String,
    },
    dept: {
      type: String,
    },
    doctor: {
      type: String,
    },
    msg: {
      type: String,
    },
    
  },
  {
    timestamps: true,
  }
)


const Appointment = mongoose.model('Appontment', appointmentSchema)

export default Appointment