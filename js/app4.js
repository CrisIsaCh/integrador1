console.log(localStorage.getItem("e"));

let categoria = localStorage.getItem("e");


let url = "https://fakestoreapi.com/products";

var mostrarxcategoria=()=>{
    return fetch(url + "/category/" + categoria)
    .then(res => res.json())
    .then(json => mostrarProductos(json))
}


fetch(url + "/category/" + categoria)
    .then(res => res.json())
    .then(json => mostrarProductos(json))

var categorias = document.getElementById('lista-categorias');
console.log(categorias);

function obtenerCategoria(e,mostrarxcategoria) {
    var categoria = e.target.title;
    console.log(categoria);
    if (categoria != "") {
        fetch(url + "/category/" + categoria)
            .then(res => res.json())
            .then(json => mostrarProductos(json))
        
    } else {
        fetch(url)
        .then(res => res.json())
        .then(json => mostrarProductos(json))
    }

}
categorias.addEventListener('click', obtenerCategoria)


