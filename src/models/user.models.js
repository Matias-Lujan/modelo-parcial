import { randomBytes } from 'crypto';

export class User {
  constructor(id = null, nombre, apellido, edad, genero, direccion, nacionalidad) {
    this.id = id ?? randomBytes(4).toString('hex'); // genera un id si no se pasa
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.genero = genero;
    this.direccion = direccion;
    this.nacionalidad = nacionalidad;
  }
}
