const w= 600; 
const h= 400;

let posicion={
    x: posicionAleatoria(w),
    y: posicionAleatoria(h)
}

let bosque= document.querySelector(".bosque");

bosque.addEventListener("click", (e)=>{
    e.preventDefault();
    let distancia = calcularDistanciaDelPuntero(e, posicion);
    let aviso= avisoDistancia(distancia);

    let Json= document.querySelector(".cercania");
    Json.innerHTML= aviso; 
    if(distancia<35){
        setTimeout(()=>{
            location.reload();
        },4000)
    }
})
