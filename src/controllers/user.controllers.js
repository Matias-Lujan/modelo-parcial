import { User } from '../models/user.models.js';
import { DataBaseRepository } from '../repository/json.repository.js';

const database = new DataBaseRepository('data/modelo-parcial.usuarios.json');

export const UserController = {
  getById: async (req, res) => {
    const id = req.params.id;
    console.log(`Id pasado por parametro: ${id}`);

    try {
      const responseData = await database.getById(id);

      res.json({
        status: 200,
        OK: true,
        message: 'Existe el usuario',
        payload: responseData,
      });
    } catch (error) {
      res.json({
        status: 400,
        OK: false,
        message: `No existe el usuario con id: ${id}`,
      });
      return;
    }
  },

  createUser: async (req, res) => {
    const { id, nombre, apellido, edad, genero, direccion, nacionalidad } = req.body;

    const newUser = new User(id, nombre, apellido, edad, genero, direccion, nacionalidad);

    await database.createUser(newUser);

    res.json({
      status: 200,
      OK: true,
      message: `Se creo el usuario con id: ${newUser.id}`,
      payload: newUser,
    });
    return;
  },

  deleteUser: async (req, res) => {
    const id = req.params.id;

    try {
      const user = await database.getById(id);

      const log = await database.deleteUser(user);

      res.json({
        status: 200,
        OK: true,
        message: `Usuario eliminado con exito id: ${log}`,
      });
      return;
    } catch (error) {
      res.json({
        status: 400,
        OK: false,
        message: `No existe el usuario con id ${id}`,
        payload: `${console.log(error)}`,
      });
      return;
    }
  },

  updateUser: async (req, res) => {
    const idParam = req.params.id;
    const { nombre, apellido, edad, genero, direccion, nacionalidad } = req.body;

    try {
      await database.getById(idParam);

      const user = new User(idParam, nombre, apellido, edad, genero, direccion, nacionalidad);

      const log = await database.updateUser(user);

      res.json({
        status: 200,
        OK: true,
        message: `Usuario actualizado id ${idParam}`,
        payload: log,
      });
      return;
    } catch (error) {
      res.json({
        status: 400,
        OK: false,
        message: `No existe el usuario con id ${idParam}`,
        payload: `${console.log(error)}`,
      });
      return;
    }
  },
};
