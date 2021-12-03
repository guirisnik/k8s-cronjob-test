const axios = require("axios").default;

axios
  .get("localhost:8080/12345678900")
  .then((response) => console.info(JSON.stringify(response.data)));
