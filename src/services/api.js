const dataApi = (data) => {
  return fetch('https://localhost:4000/card/:id', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};
export default dataApi;
