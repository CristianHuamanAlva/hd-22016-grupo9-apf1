//Script para cargar al index

//logica.... nombre del archivo ruta no es necesario . html y 
// en getID colocar el name del id_ que se encuentra en el index 

//navbar
fetch('navbar.html')
.then(response => response.text())
.then(data => {
    document.getElementById('navbar').innerHTML = data;
});
//footer
fetch('footer.html')
.then(response => response.text())
.then(data => {
    document.getElementById('footer').innerHTML = data;
});
//continuara...