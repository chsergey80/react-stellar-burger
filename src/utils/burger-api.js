const config = {
  urlIngredients: `https://norma.nomoreparties.space/api/ingredients`,
  urlOrder: `https://norma.nomoreparties.space/api/orders`,
  headers: { 'Content-Type': 'application/json' },
};

const checkResponse = (res) => {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

const getIngredients = () => {
  return fetch(`${config.urlIngredients}`)
    .then(checkResponse)
    .catch((err) => {console.log(err)});
}

const postOrder = (array) => {
  return fetch(`${config.urlOrder}`, {
    method: 'POST',
    headers: config.headers,
    body: JSON.stringify({
      'ingredients': array,
    })
  })
    .then(checkResponse)
    .catch((err) => {console.log(err)});
}

export { getIngredients, postOrder }