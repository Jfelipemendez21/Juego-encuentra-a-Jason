let posicionAleatoria = (size) => {
    return Math.floor(Math.random() * size);
}

let calcularDistanciaDelPuntero = (evento, posicion) => {

    // OFFSET NOS PERMITE SABER LA UBICACION EN X O EN Y DEL EVENTO EN QUE SE DESENCADENO 
    let puntoX = evento.offsetX - posicion.x;
    let puntoY = evento.offsetY - posicion.y;

    // TEOREMA DE PITAGORAS (TRIANGULO RECTANGULO)
    return Math.sqrt((puntoX * puntoX) + (puntoY * puntoY));
}


let avisoDistancia = (distancia) => {
    if (distancia < 20) {
        let bosque = document.querySelector(".bosque");
        bosque.removeAttribute("src");
        bosque.setAttribute("src", "imgs/json.jpg");
        return `
                <h1 class="muerto">Detras de ti!!!<span>&#160</span></h1>
                <audio autoplay="" src="audio/grito.mp3" type="audio/mpeg"></audio> 
                <audio autoplay="" src="audio/golpe.mp3" type="audio/mpeg"></audio>
        `
    } else if (distancia < 60) {
        return `<h1 class="mensajes muycerca">Manten los ojos abiertos, esta muy cerca! <span>&#160</span></h1>`
    } else if (distancia < 100) {
        return `<h1 class="mensajes cerca">Se cauteloso, puede que este cerca!<span>&#160</span></h1>`
    } else if (distancia < 200) {
        return `<h1 class="mensajes mediocerca">Continua! no estas tan lejos!<span>&#160</span></h1>`
    } else if (distancia < 360) {
        return `<h1 class="mensajes lejos">Aun estas lejos del objetivo!<span>&#160</span></h1>`
    } else {
        return `<h1 class="mensajes muylejos">Te encuentras demaciado alejado!<span>&#160</span></h1>`
    }
}