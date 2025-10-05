import express from 'express';
import { ProductoController } from '../controllers/producto.controllers.js';

const productoRouter = express.Router();
const { getAllData } = ProductoController;

productoRouter.get('/api/productos', getAllData);

export default productoRouter;
