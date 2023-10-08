let url = "https://fakestoreapi.com/products";




fetch(url)
    .then(res => res.json())
    .then(json => mostrarProductos(json));




var categorias = document.getElementById('lista-categorias');
console.log(categorias);

function obtenerCategoria(e) {
    var categoria=e.target.title;
    console.log(categoria);
    if(categoria!=""){
        fetch(url+"/category/"+categoria)
        .then(res=>res.json())
        .then(json=>mostrarProductos(json))
    }else{
        window.location.reload();
    }
    
}
categorias.addEventListener('click', obtenerCategoria)
const mostrarProductos = (json) => {
    console.log(json);

    let card = "";

    for (let i = 0; i < json.length; i++) {
        // card+=`<img src="${json[i].image}">`
        card += ` 
        <div class="card">
        <a href="producto.html">
             <img src="${json[i].image}" id="${json[i].id}">
             </a>
         <div class="desc">
             <h4>${json[i].title}</h4>
             <h5>$${json[i].price}</h5>
         </div>
        </div> 
        `

    }
    document.getElementById('img').innerHTML = card;
}
var link = document.getElementById('img');
var idencontrado;

function encontrarId(e) {
    console.log(e.target.id);
    idencontrado = e.target.id;
    console.log(idencontrado);
    localStorage.setItem("id", idencontrado)


}
link.addEventListener('click', encontrarId);


