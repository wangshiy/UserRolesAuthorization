exports.findAll = function(req, res) {
    res.send([{Name:'Edit'}, {Name:'Read'}, {Name:'Delete'}]);
};

exports.findById = function(req, res) {
    res.send({id:req.params.id, name: "The Name", description: "description"});
};
