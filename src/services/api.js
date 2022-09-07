const dataApi = (data) => {
  return fetch('http://localhost:4000/card', {
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
