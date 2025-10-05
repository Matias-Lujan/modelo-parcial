import { DataBaseRepository } from '../repository/json.repository.js';

const database = new DataBaseRepository('data/productos.json');

export const ProductoController = {
  getAllData: async (req, res) => {
    const products = await database.getAllData();
    /* const productsObjectArray = products.map(
      (product) =>
        new Product(
          product?.id,
          product?.name,
          product?.descripcion,
          product?.cantidad,
          product?.tags,
        ),
    ); */

    res.json({
      OK: true,
      message: 'Lista de productos disponibles',
      payload: products,
    });
  },
};
