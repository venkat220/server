const express = require ('express');
const exercisesController = require ("../controllers/exerciseController");
const uploadImage = require("../middlewares/multer");
const { hasDescription } = require("../validations/validators");
const router = express.Router();

router.get('/', exercisesController.index);

router.get('/exerciseName', exercisesController.indexQuery);

router.get("/:id", exercisesController.show);


router.post('/',
hasDescription, 
exercisesController.store
);

router.patch("/:id", hasDescription, exercisesController.update);
router.delete("/:id", exercisesController.delete);


// router.patch("/:id", hasDescription, expenseController.update);
// router.delete("/:id", expenseController.delete);

module.exports = router;