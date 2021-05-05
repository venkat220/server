const express = require ('express');
const friendsController = require ("../controllers/friendsController");
const { hasDescription } = require("../validations/validators");
const router = express.Router();

router.get('/', friendsController.index);

router.get('/active', friendsController.indexQuery);

router.get("/:id", friendsController.show);

router.post('/',
friendsController.store
);

router.patch("/:id", friendsController.update);
router.delete("/:id", friendsController.delete);

// router.patch("/:id", hasDescription, employeesController.update);
// router.delete("/:id", employeesController.delete);

module.exports = router;