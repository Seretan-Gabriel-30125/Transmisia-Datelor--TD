var api = require("./src/api.js").app;
var users = require("./src/users.json");

api.get("/", function (request, response) {
  response.json("NodeJS REST API");
});

// http://localhost:3000/

api.get("/users", function (request, response) {
  response.json(users);
});

// http://localhost:3000/

api.listen(3000, function () {
  console.log("Server running @ localhost:3000");
});

api.post("/createUser", function (request, response) {
  users.push({ name: request.body.name, city: request.body.city });
  response.json(users);
});

api.delete("/deleteUser/:name", function (request, response) {
  const name = request.params.name;
  console.log("name", name);
  const newUsers = users.filter((user) => user.name != name);
  console.log("users", newUsers);
  response.json(newUsers);
});
