const { Router } = require("express");
const { Register } = require("../controller/controller");

const router = Router();

router.post("/Register",Register);

module.exports = router;