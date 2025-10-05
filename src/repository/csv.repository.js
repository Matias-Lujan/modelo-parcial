import fs from 'fs/promises';

export class DataBaseRepository {
  constructor(path) {
    this.path = path;
  }

  async saveData() {
    let data = await fetch('https://api.chucknorris.io/jokes/random');

    if (!data) throw new Error(`Error al obtener datos`);

    data = await data.json();

    let dataLine = JSON.stringify(data) + '\n';

    await fs.appendFile(this.path, dataLine, 'utf8');
    //await fs.writeFile(this.path, JSON.stringify(data, null, 2)); //transformo objeto/array a json -writeFile solo soporta json
    return data
  }
}
