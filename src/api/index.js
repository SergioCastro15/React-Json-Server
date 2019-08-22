const ENDPOINT = 'http://localhost:4000';
const HEADERS = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

const getGamesDB = async () => {
  const response = await fetch(`${ENDPOINT}/games`, {
    method: 'GET',
    headers: HEADERS,
  });
  const data = await response.json();
  return data;
};

const addGameDB = async (game) => {
  const response = await fetch(`${ENDPOINT}/games`, {
    method: 'POST',
    headers: HEADERS,
    body: JSON.stringify(game),
  });
  return response;
};

const deleteGameDB = async (id) => {
  const response = await fetch(`${ENDPOINT}/games/${id}`, {
    method: 'DELETE',
    headers: HEADERS,
  });
  return response;
};

const getGameDB = async (id) => {
  const response = await fetch(`${ENDPOINT}/games/${id}`, {
    method: 'GET',
    headers: HEADERS,
  });

  const data = await response.json();
  return data;
};

const editGameDB = async (id, game) => {
  const response = await fetch(`${ENDPOINT}/games/${id}`, {
    method: 'PUT',
    headers: HEADERS,
    body: JSON.stringify(game),
  });
  return response;
};

export {
  getGamesDB,
  addGameDB,
  deleteGameDB,
  getGameDB,
  editGameDB,
};
