const throng = require("throng");

throng({
  workers: process.env.WEB_CONCURRENCY || 1,
  lifetime: Infinity,
  start: () => require("./index.js")
});
