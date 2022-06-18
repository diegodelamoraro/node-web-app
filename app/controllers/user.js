const mongoose = require("mongoose");
const model = require("../models/user");

const options = {
  page: 1,
  limit: 10,
};

const parseId = (id) => {
  return mongoose.Types.ObjectId(id);
};
/**
 * Obtener DATA de USUARIOS
 */

exports.getUsers = (req, res) => {
  model.paginate({}, options, (err, docs) => {
    res.send({
      items: docs,
    });
  });
};

/**
 * Obtener DATA de USUARIOS
 */

exports.getUser = (req, res) => {
  model.findOne({ _id: parseId(req.params.id) }, (err, docs) => {
    res.send({
      items: docs,
    });
  });
};

/**
 * Obtener DATA de USUARIOS
 */

exports.updateUser = (req, res) => {
  const { id } = req.params;
  const body = req.body;
  model.updateOne({ _id: parseId(id) }, body, (err, docs) => {
    res.send({
      items: docs,
    });
  });
};

/**
 * Insertar DATA de USUARIOS
 */
exports.insertUser = (req, res) => {
  const data = req.body;
  model.create(data, (err, docs) => {
    if (err) {
      res.status(422).send({ error: "Error" });
    } else {
      res.send({ data: docs });
    }
  });
};

/**
 * Obtener DATA de USUARIOS
 */

exports.deleteUser = (req, res) => {
  const { id } = req.params;
  model.deleteOne({ _id: parseId(id) }, (err, docs) => {
    res.send({
      items: docs,
    });
  });
};
