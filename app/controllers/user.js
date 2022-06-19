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
 * Ejemplo: http://0.0.0.0:8080/user/
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
 * Ejemplo: http://0.0.0.0:8080/user/62af2dfa32e701371611dcce
 */
exports.getUser = (req, res) => {
  model.findOne({ _id: parseId(req.params.id) }, (err, docs) => {
    res.send({
      items: docs,
    });
  });
};

/**
 * Obtener DATA de USUARIOS pot type
 * Ejemplo: http://0.0.0.0:8080/user/type/admin/department/gerencia
 */
exports.getUsersBy = (req, res) => {
  console.log("getUsersBy params => ", req.params);
  model.find(
    {
      $and: [{ type: req.params.type }, { department: req.params.department }],
    },
    (err, docs) => {
      res.send({
        items: docs,
      });
    }
  );
};

/**
 * Actualizar DATA de USUARIOS por id
 */
exports.updateUser = (req, res) => {
  const id = parseId(req.params.id);
  const body = req.body;
  console.log("id => ", id, "body =>", body);
  model.findOne({ _id: id }, (err, docs) => {
    // console.log("findOne err =>", err, "docs =>", docs);
    if (docs == null) {
      model.create(body, (err, docs) => {
        // console.log("create err =>", err, "docs =>", docs);
        if (err) res.status(422).send({ error: "Error" });
        else res.status(201).send(docs);
      });
    } else {
      model.updateOne({ _id: id }, body, (err, docs) => {
        // console.log("updateOne err =>", err, "docs =>", docs);
        if (err) res.status(422).send({ error: "Error" });
        else res.status(200).send(docs);
      });
    }
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
 * http://0.0.0.0:8080/user/soporte
 */
exports.deleteUsers = (req, res) => {
  const { department } = req.params;
  model.deleteMany({ department }, (err, docs) => {
    console.log("deleteMany err =>", err, "docs =>", docs);
    if (err) res.status(422).send({ error: "Error" });
    else {
      if (docs == null) res.sendStatus(204);
      else if (docs.deletedCount > 0) res.status(200).send(docs);
      else res.sendStatus(204);
    }
  });
};
