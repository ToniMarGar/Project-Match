const { getOneUser } = require("../controllers/user.controller.js");
const { checkAuth,checkAdmin } = require("../middleware/index.js");

const {
    getOneUser,
    getAllUsers,
    createUser,
    updateUser,
    deleteUser
  } = require("../controllers/user.controller.js");
const { checkAuth,checkAdmin } = require("../middleware/index.js");

const router = require('express').Router() 

router.get("/:id",checkAuth,checkAdmin,getOneUser);
router.get("/:id",checkAuth,checkAdmin,getAllUsers);
router.get("/:id",checkAuth,checkAdmin,createUser);
router.get("/:id",checkAuth,checkAdmin,updateUser);
router.get("/:id",checkAuth,checkAdmin,deleteUser);


module.exports = router