const express = require("express");
require("../../config/passport");
const passport = require("passport");
const requireAuth = passport.authenticate("jwt", {
  session: false,
});
const controller = require("../controllers/user");

const router = express.Router();

/**
 * Ruta: /user GET
 */
router.get("/", controller.getUsers);

/**
 * Ruta: /user GET
 */
router.get("/:id", controller.getUser);

/**
 * Ruta: /user GET By Type
 */
router.get("/type/:type/department/:department", controller.getUsersBy);

/**
 * Ruta: /user POST
 */
router.post("/", controller.insertUser);

/**
 * Ruta: /user PUT
 */
router.put("/:id", controller.updateUser);

/**
 * Ruta: /user DELETE
 */
router.delete("/:department", controller.deleteUsers);

module.exports = router;
