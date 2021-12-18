import express from 'express'
const router = express.Router()
import {
  authUser,
  registerUser,
  getUsers,
  deleteUser,
} from '../controllers/userController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

router.route('/').post(registerUser).get(protect, getUsers)
router.post('/login', authUser)

router.route('/:id').delete(protect, deleteUser)

export default router
