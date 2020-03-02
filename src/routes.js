const Router = require('express').Router;

const routes = Router();
const states = require('./database/states');

routes.get('/search', (req, res) => {
  const { word } = req.query;

  let sugestions = [];

  const regex = new RegExp(`^${word}`, 'i');

  sugestions = states.filter(state => regex.test(state));

  res.json(sugestions);
});

module.exports = routes;