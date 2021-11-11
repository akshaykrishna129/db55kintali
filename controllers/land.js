var land = require('../models/land'); 
 
// List of all land
exports.land_list = async function(req, res) { 
    try{ 
        theland = await land.find(); 
        res.send(theland); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
// VIEWS 
// Handle a show all view 
exports.land_view_all_Page = async function(req, res) { 
    try{ 
        theland = await land.find(); 
        res.render('land', { title: 'Costume Search Results', results: theland }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
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