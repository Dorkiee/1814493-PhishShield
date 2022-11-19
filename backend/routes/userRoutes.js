
import express from 'express'
import userController from '../controllers/userController.js'

const userRoutes = express.Router()

userRoutes.post('/sign-up', userController)
userRoutes.post('/sign-up-admin', userController)
userRoutes.post('/log-in', userController)
userRoutes.post('/Dashboard', userController) //change to get??
userRoutes.get('/log-in', userController) //change to get??
userRoutes.get('/edits/:id', userController) //change to get??
userRoutes.put('/update/:id', userController)

export default userRoutes;