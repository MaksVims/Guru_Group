import axios from 'axios';

import { Product } from './../types/product';

export class ProductsService {

  static async getAll() {
    const response = await axios.get<Product[]>('https://6075786f0baf7c0017fa64ce.mockapi.io/products')
    return response.data
  }

}