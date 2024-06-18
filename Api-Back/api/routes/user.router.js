

const {
    getOneUser,
    getAllUsers,
    createUser,
    updateUser,
    deleteUser
  } = require("../controllers/user.controller.js");
const { checkAuth,checkAdmin } = require("../middleware/index.js");

const router = require('express').Router() 

router.get("/:id",/* checkAuth,checkAdmin, */getOneUser);
router.get("/",/* checkAuth,checkAdmin, */getAllUsers);
router.post("/",/* checkAuth,checkAdmin, */createUser);
router.put("/:id",/* checkAuth,checkAdmin, */updateUser);
router.delete("/:id",/* checkAuth,checkAdmin, */deleteUser);


module.exports = router