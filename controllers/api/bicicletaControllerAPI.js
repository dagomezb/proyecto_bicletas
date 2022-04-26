var bicileta = require('../../models/bicicleta');

exports.bicicleta_list = function(req,res){
    res.status(200).json({
        biciletas: bicileta.allBicis
    });
}

exports.bicicleta_create = function(req, res){
    var bici = new bicicleta(req.body.id, req.body.color, req.body.modelo);
    bici.ubicacion = [req.body.lat, req.body.lng];
    bicicleta.add(bici);

    res.status(200).json({
        bicicleta: bici
    });
}