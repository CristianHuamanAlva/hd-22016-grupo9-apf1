//Script para cargar al index

//logica.... nombre del archivo ruta no es necesario . html y en getID colocar el name dle di que se encuentra en el index 

fetch('navbar.html')
.then(response => response.text())
.then(data => {
    document.getElementById('navbar').innerHTML = data;
});

fetch('footer.html')
.then(response => response.text())
.then(data => {
    document.getElementById('footer').innerHTML = data;
});