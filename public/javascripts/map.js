var map = L.map('mainmap').setView([6.2442876,-75.616231], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', {foo: 'bar', attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);

L.marker([6.231193, -75.601730]).addTo(map);
L.marker([6.238468, -75.602777]).addTo(map);
L.marker([6.242978, -75.602540]).addTo(map);