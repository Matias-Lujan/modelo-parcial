import { DataBaseRepository } from '../repository/csv.repository.js';

const database = new DataBaseRepository('data/usuarios.csv');

export const ApiController = {
  getAllData: async (request, response) => {
    try {
      let data = await database.saveData();

      response.json({
        status: 200,
        OK: true,
        message: 'Datos guardados correctamente en CSV',
        value: data.value,
      });
    } catch (error) {
      response.json({
        status: 400,
        OK: false,
        message: error.message,
      });
    }
  },
};
