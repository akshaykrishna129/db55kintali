var express = require("express");
const land_controlers= require('../controllers/land'); 
var router = express.Router();
// A little function to check if we have an authorized user and continue on 
//or 
// redirect to login. 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 

/* GET land */ 
router.get('/', land_controlers.land_view_all_Page ); 
module.exports = router; 

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("land", { title: "Search Results Land" });
});
/* GET detail land page */ 
router.get('/detail', land_controlers.land_view_one_Page); 
/* GET create costume page */ 
router.get('/create', secured, land_controlers.land_create_Page); 
/* GET create update page */ 
router.get('/update', secured, land_controlers.land_update_Page); 
/* GET create land page */ 
router.get('/delete', secured,land_controlers.land_delete_Page); 

module.exports = router;