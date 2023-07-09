require("dotenv").config();
const connection = require("./db");
const PORT = process.env.PORT || 3001;
const app = require("./src/app");

const Users = require("./src/models/User");

// async function main() {
//   await app.listen(PORT, () => {
//     connection();
//     console.log(`server is listening at ${PORT}`);
//   });
// }

// main();

app.listen(PORT, () => {
  connection();
  console.log("Server running on port", PORT);
});
