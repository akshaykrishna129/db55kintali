var land = require('../models/land'); 
 
// List of all lands 
exports.land_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: land list'); 
}; 
 
// for a specific land. 
exports.land_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: land detail: ' + req.params.id); 
}; 
 
// Handle land create on POST. 
exports.land_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: land create POST'); 
}; 
 
// Handle land delete form on DELETE. 
exports.land_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: land delete DELETE ' + req.params.id); 
}; 
 
// Handle land update form on PUT. 
exports.land_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: land update PUT' + req.params.id); 
}; 