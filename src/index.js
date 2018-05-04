const express = require('express');
const fs = require('fs');
const { DateTime } = require('luxon');
const isAbsoluteUrl = require('is-absolute-url');
const requestIp = require('request-ip');

const Download = require('./db').Download;

const port = process.env.PORT || 8000;

const app = express();

app.use(requestIp.mw())

app.get(`/`, (req, res) => {
  res.send(`Trackr`);
});

app.get(`/redirect/:url*`, (req, res) => {
  const url = `${req.params.url}${req.param(0)}`;
  const isUrl = isAbsoluteUrl(url);
  const datetime = DateTime.local();
  const ip = req.clientIp;

  fs.appendFile(`log.csv`, `"${url}", "${isUrl}", "${datetime}", "${ip}"\n`);

  if (isUrl) {
    res.redirect(url);
  } else {
    res.send(`${url} is not a valid url`);
  }
});

app.get(`/stats`, (req, res) => {
  Download.find({}, (err, download) => {
    res.send(download);
  });
});

const server = app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
