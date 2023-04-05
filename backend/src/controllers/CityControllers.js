const models = require("../models");

const findCity = (req, res) => {
  models.city
    .findCity()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const edit = (req, res) => {
  const city = req.body;

  // TODO validations (length, format...)

  city.id = parseInt(req.params.id, 10);

  models.city
    .update(city)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const add = (req, res) => {
  const city = req.body;
  // TODO validations (length, format...)

  models.city
    .insert(city)
    .then(([result]) => {
      res.status(201).json(`/city/${result.insertId}`);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: "message error" });
    });
};

const read = (req, res) => {
  models.city
    .find(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(rows[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const destroy = (req, res) => {
  models.city
    .delete(req.params.id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  findCity,
  add,
  edit,
  read,
  destroy,
};
