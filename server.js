// const path = require("path");
const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:3001',
      changeOrigin: true,
    })
  );
};

app.get("/api", (req, res) => {
  res.json({ message: "YOUR EXPRESS BACKEND IS CONNECTED TO REACT" });
});

// app.use("/*", (req, res) => {
//   res.sendFile(path.join(__dirname, "build", "index.html"));
// });

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`));
