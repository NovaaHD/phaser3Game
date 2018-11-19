const http = require("http");
const port = 8887;

const server = http.createServer();

server.listen(port, err => {
  if (err) {
    throw new Error("Something bad happened ...");
  }

  console.log(`Le serveur fonctionne sur ${port}`);
});
