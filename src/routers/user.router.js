import express from 'express';
import { UserController } from '../controllers/user.controllers.js';

const userRouter = express.Router();
const { createUser, deleteUser, getById, updateUser } = UserController;

userRouter
  .get('/api/user/:id', getById)
  .post('/api/user/create', createUser)
  .delete('/api/user/delete/:id', deleteUser)
  .patch('/api/user/patch/:id', updateUser);

export default userRouter;
