const BASE_URL = `https://norma.nomoreparties.space/api`;

const apiEndpoints = {
  ingredients: '/ingredients',
  orders: '/orders',
};

const config = {
  urlIngredients: BASE_URL + apiEndpoints.ingredients,
  urlOrder: BASE_URL + apiEndpoints.orders,
  headers: { 'Content-Type': 'application/json' },
};

const checkResponse = (res) => {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

function request(url, options) {
  return fetch(url, options)
    .then(checkResponse)
};

const getIngredients = () => {return request(`${config.urlIngredients}`)};

const postOrder = (ingredients) => {
  return request(`${config.urlOrder}`, {
    method: 'POST',
    headers: config.headers,
    body: JSON.stringify({ingredients})
  })}

export { getIngredients, postOrder }