const config = {
  url: `https://norma.nomoreparties.space/api/ingredients`
};

const checkReponse = (res) => {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

const getIngredients = () => {
  return fetch(`${config.url}`)
    .then(checkReponse)
    .catch((err) => {
      console.log(err);
    });
}

export { getIngredients }