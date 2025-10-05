import express from 'express';
import morgan from 'morgan';
import userRouter from './routers/user.router.js';
import productoRouter from './routers/producto.router.js';
import userApiRouter from './routers/user-api.router.js';

const server = express();
const morganModule = morgan(':method :url :status :res[content-length] - :response-time ms');

server.use(express.json()); // menejo de json
server.use(morganModule); // imprimir por consola las peticiones

// endpoints para validar que funciona a medida que creo logica controllers -> repository (previo a armar routers)
/* server.get('/api/user/:id', UserController.getById);
server.post('/api/user/create', UserController.createUser);
server.delete('/api/user/delete/:id', UserController.deleteUser);
server.patch('/api/user/patch/:id', UserController.updateUser); */
server.use(userRouter);
server.use(productoRouter);
server.use(userApiRouter);

export default server;
