var categoria2=document.getElementById('cat-id');
console.log(categoria2);

function categoria(e){
    console.log(e.target.title);

    localStorage.setItem('e',(e.target.title))
}
categoria2.addEventListener('click', categoria)