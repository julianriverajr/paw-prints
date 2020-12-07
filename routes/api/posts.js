const router = require("express").Router();
//const db = require("../../models");
const postController = require("../../controllers/postController");
//require('dotenv').config();

//import multer and create a folder "uploads" to hold on to temp files
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

router.route("/allposts")
  .get(postController.findAll)
//.post(postController.create);

router.route("/:id")
  .get(postController.findById)
  .delete(postController.remove);
//.put(postController.update) // not used


///// When the form is submitted and /imgup is hit:
// use multer upload method to organize file data to readable format
router.post("/imgup", upload.single('file'), postController.create)

module.exports = router;