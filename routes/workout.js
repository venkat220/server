const express = require ('express');
const workoutsController = require ("../controllers/workoutsController");
const { hasDescription } = require("../validations/validators");
const router = express.Router();

router.get('/', workoutsController.index);

router.get('/level', workoutsController.indexQuery);

router.get("/:id", workoutsController.show);

router.post('/',
hasDescription, 
workoutsController.store
);

router.patch("/:id", hasDescription, workoutsController.update);
router.delete("/:id", workoutsController.delete);

// router.patch("/:id", hasDescription, employeesController.update);
// router.delete("/:id", employeesController.delete);

module.exports = router;