var bicicleta = function(id, color, modelo, ubicacion){
    this.id = id;
    this.color = color;
    this.modelo = modelo;
    this.ubicacion = ubicacion;
}
 
/*bicicleta.prototype.toString = function(){
    return 'id: ' + this.id + ' | color: ' + this.color;
}*/


bicicleta.allBicis = [];

bicicleta.add = function(aBici){
    bicicleta.allBicis.push(aBici);
}

var a = new bicicleta(1, 'rojo', 'urbana', [6.231193, -75.601730]);
var b = new bicicleta(2, 'blanca', 'urbana', [6.238468, -75.602777]);
var c = new bicicleta(3, 'roja', 'montaña', [6.248468, -75.602777]);

bicicleta.add(a);
bicicleta.add(b);
bicicleta.add(c);

bicicleta.removeById = function(aBiciId){
    for(var i = 0; i< bicicleta.allBicis.length; i++){
        if(bicicleta.allBicis[i].id == aBiciId){
            bicicleta.allBicis.splice(i,1);
            break;
        }
    }
}

bicicleta.findById = function(aBiciId){
    var aBici = bicicleta.allBicis.find(x => x.id == aBiciId);
    if (aBici)
        return aBici;
    else
        throw new Error(`No existe una bicicleta con el id ${aBiciId}`);
    
}




module.exports = bicicleta;