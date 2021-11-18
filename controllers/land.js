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
        res.render('land', { title: 'land Search Results', results: theland }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
 
// for a specific land. 
exports.land_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await land.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 
 
// Handle land create on POST. 
exports.land_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new land(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"land_type":"goat", "cost":12, "size":"large"} 
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
 
 
// Handle land delete on DELETE. 
exports.land_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await land.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
}; 
 
// Handle land update form on PUT. 
exports.land_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await land.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.land_type)  
               toUpdate.land_type = req.body.land_type; 
        if(req.body.area) toUpdate.area = req.body.area; 
        if(req.body.cost) toUpdate.cost = req.body.cost; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
}; 
 // Handle a show one view with id specified by query 
 exports.land_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await land.findById( req.query.id) 
        res.render('landdetail',  
{ title: 'land Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
// Handle building the view for creating a land. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.land_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('landcreate', { title: 'land Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
// Handle building the view for updating a land. 
// query provides the id 
exports.land_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await land.findById(req.query.id) 
        res.render('landupdate', { title: 'land Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
// Handle a delete one view with id from query 
exports.land_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await land.findById(req.query.id) 
        res.render('landdelete', { title: 'land Delete', toShow: 
result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
 
 
 