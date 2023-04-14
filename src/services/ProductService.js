import http from '../http-common.js'

export function getProducts() {
  return http.get('/products/productlist')
    .then(response => response.data)
    .catch(error => {
      console.log(error);
    });
}