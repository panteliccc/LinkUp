const { Router } = require("express");
const { Register, Login } = require("../controller/Registration");

const router = Router();

router.post("/Register",Register);
router.post("/Login",Login);

module.exports = router;