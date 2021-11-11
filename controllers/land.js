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
exports.land_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new land(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"costume_type":"goat", "cost":12, "size":"large"} 
    document.land_type = req.body.land_type; 
    document.cost = req.body.cost; 
    document.size = req.body.size; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
 
// Handle land delete form on DELETE. 
exports.land_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: land delete DELETE ' + req.params.id); 
}; 
 
// Handle land update form on PUT. 
exports.land_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: land update PUT' + req.params.id); 
}; 