const express = require("express");
const router = express.Router();

const auth = require("../middlewares/authMiddleware");
const role = require("../middlewares/roleMiddleware");
const validate = require("../middlewares/activityValidation");
const ctrl = require("../controllers/activityController");

router.get("/activities", auth, ctrl.getAll);
router.post("/activities", auth, role("admin"), validate, ctrl.create);
router.put("/activities/:id", auth, role("admin"), ctrl.update);
router.post("/activities/:id/join", auth, role("mahasiswa"), ctrl.join);

module.exports = router;
