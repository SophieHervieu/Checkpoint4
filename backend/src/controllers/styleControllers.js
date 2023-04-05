const models = require("../models");

const findStyle = (req, res) => {
  models.style
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const edit = (req, res) => {
  const style = req.body;

  // TODO validations (length, format...)

  style.id = parseInt(req.params.id, 10);

  models.style
    .update(style)
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
  const style = req.body;
  // TODO validations (length, format...)

  models.style
    .insert(style)
    .then(([result]) => {
      res.status(201).json(`/style/${result.insertId}`);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: "message error" });
    });
};

const read = (req, res) => {
  models.style
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

const destroyStyle = async (styleId) => {
  try {
    await models.style.deleteStyle(styleId);
  } catch (err) {
    console.error(err);
    throw new Error("Error deleting related product images");
  }
};

module.exports = {
  findStyle,
  add,
  edit,
  read,
  destroyStyle,
};
