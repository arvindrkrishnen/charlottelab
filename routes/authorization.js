exports.findAll = function(req, res) {
res.send([{employeeID:'administrator'}, {employeeID:'admin'}, {employeeID:'admin123'}]);
};
 
exports.findbyId = function(req, res) {
res.send({id:req.params.id, employeeID: "administrator", password: "admin123"});
};
