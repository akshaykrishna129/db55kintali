var express = require("express");
const land_controlers= require('../controllers/land'); 
var router = express.Router();

/* GET land */ 
router.get('/', land_controlers.land_view_all_Page ); 
module.exports = router; 

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("land", { title: "Search Results Land" });
});
/* GET detail costume page */ 
router.get('/detail', land_controlers.land_view_one_Page); 

module.exports = router;