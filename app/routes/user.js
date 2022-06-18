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
router.get(`/`, controller.getUsers);

/**
 * Ruta: /user GET
 */
router.get(`/:id`, controller.getUser);

/**
 * Ruta: /user GET
 */
router.post(`/`, controller.insertUser);

/**
 * Ruta: /user GET
 */
router.put(`/:id`, controller.updateUser);

/**
 * Ruta: /user GET
 */
router.delete(`/:id`, controller.deleteUser);

module.exports = router;
