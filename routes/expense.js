const express = require ('express');
const expenseController = require ("../controllers/expenseController");
const uploadImage = require("../middlewares/multer");
const { hasDescription } = require("../validations/validators");
const router = express.Router();

router.get('/', expenseController.index);

router.get('/expenseValue', expenseController.indexQuery);

router.get("/:id", expenseController.show);

router.post('/',uploadImage('expenses').single("image"), 
expenseController.store
);

router.patch("/:id", expenseController.update);
router.delete("/:id", expenseController.delete);

module.exports = router;