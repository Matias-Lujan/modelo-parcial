import express from 'express';
import { ApiController } from '../controllers/apiControllers.js';

const userApiRouter = express.Router();
const { getAllData } = ApiController;

userApiRouter.get('/api/usuarios-externos', getAllData);

export default userApiRouter;
