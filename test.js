const fetch = require('node-fetch');
const apiUrl = "https://64b81d0721b9aa6eb0799195.mockapi.io/information/information";

const data = {
  name: "Veenuuuuuuu",
  age: 31,
  adress : "home"
};

fetch(apiUrl, {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(data)
})
.then(response => {
  if (!response.ok) {
    throw new Error("Failed to add data to the API.");
  }
  return response.json();
})
.then(responseData => {
  console.log("Data added successfully:", responseData);
})
.catch(error => {
  console.error("An error occurred while adding data:", error);
});