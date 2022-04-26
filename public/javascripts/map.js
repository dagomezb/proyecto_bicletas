var map = L.map('mainmap').setView([6.2442876,-75.616231], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', {foo: 'bar', attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);

L.marker([6.1573233,-75.5185437]).addTo(map);
//L.marker([6.238468, -75.602777]).addTo(map);


$.ajax({
    dataType: "json",
    url: "api/bicicletas",
    success: function(result){
        console.log(result);
        result.bicicletas.forEach(function(bici) {
            L.marker(bici.ubicacion, {title: bici.id}).addTo(map); 
        });
    }
})