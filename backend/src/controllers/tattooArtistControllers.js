const models = require("../models");

const findTattooArtist = (req, res) => {
  models.tattooArtist
    .findTattooArtist()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const edit = (req, res) => {
  const tattooArtist = req.body;

  // TODO validations (length, format...)

  tattooArtist.id = parseInt(req.params.id, 10);

  models.tattooArtist
    .update(tattooArtist)
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
  const tattooArtist = req.body;
  // TODO validations (length, format...)

  models.tattooArtist
    .add(tattooArtist)
    .then(([result]) => {
      res.status(201).json(`/tattooArtist/${result.insertId}`);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: "message error" });
    });
};

const insertTattooartistInCity = (req, res) => {
  const tattooArtist = req.body;
  // TODO validations (length, format...)

  models.tattooArtist
    .insert(tattooArtist)
    .then(([result]) => {
      models.tattooArtist.insertTaInCity(result.insertId, req.body.city);
      res.status(201).json(`/city/${result.insertId}`);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: "message error" });
    });
};

const insertStyle = (req, res) => {
  const tattooArtist = req.body;

  models.tattooArtist
    .insert(tattooArtist)
    .then(([result]) => {
      models.tattooArtist.insertTaInStyle(result.insertId, req.body.style);
      res.status(201).json(`/style/${result.insertId}`);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: "message error" });
    });
};

const read = (req, res) => {
  models.tattooArtist
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
  models.tattooArtist
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
  findTattooArtist,
  add,
  insertTattooartistInCity,
  insertStyle,
  edit,
  read,
  destroy,
};
