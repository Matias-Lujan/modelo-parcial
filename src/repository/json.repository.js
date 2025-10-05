import fs from 'fs/promises';
import { User } from '../models/user.models.js';

export class DataBaseRepository {
  constructor(path) {
    this.path = path;
  }

  async getAllData() {
    const data = await fs.readFile(this.path, { encoding: 'utf8' });

    return await JSON.parse(data);
  }

  async getById(id) {
    const data = await this.getAllData();
    if (!data) throw Error('No hay datos');

    const filteredData = data.filter((user) => user.id == id); // devuelve array de objetos
    if (!filteredData) throw Error(`No existe usuario con id: ${id}`);

    const objectPlain = filteredData[0];

    const user = new User(
      objectPlain.id,
      objectPlain.nombre,
      objectPlain.apellido,
      objectPlain.edad,
      objectPlain.genero,
      objectPlain.direccion,
      objectPlain.nacionalidad,
    );

    return user;
  }

  async createUser(user) {
    const data = await this.getAllData();

    data.push(user);

    await fs.writeFile(this.path, JSON.stringify(data, null, 2)); //transformo objeto/array a json -writeFile solo soporta json

    return {
      idUser: user.id,
    };
  }

  async deleteUser(user) {
    const { id } = user; // const id = user.id

    const data = await this.getAllData();

    const filteredData = await data.filter((user) => user.id !== id);

    await fs.writeFile(this.path, JSON.stringify(filteredData, null, 2));

    return {
      idUser: id,
    };
  }

  async updateUser(user) {
    const { id } = user;

    const data = await this.getAllData();

    const filteredData = await data.filter((user) => user.id !== id);

    const oldUser = await data.filter((user) => user.id == id);

    filteredData.push(user);

    await fs.writeFile(this.path, JSON.stringify(filteredData, null, 2));

    return { oldUser, newUser: user };
  }

  /*   async saveDataApi(dataApi){
    const data = await fs.readFile(this.path, { encoding: 'utf8' });

    data.push(dataApi);

    await fs.writeFile(this.path, JSON.stringify(data, null, 2));

    return dataApi
  } */
}
