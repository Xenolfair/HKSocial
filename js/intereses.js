function generarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
    statusUser
    var numeroAleatorio = generarNumeroAleatorio(1, 1000);
    var interesesAleatorio = generarNumeroAleatorio(1, 13);
    var interesesAleatorio2 = generarNumeroAleatorio(1, 13);
    var interesesAleatorio3 = generarNumeroAleatorio(1, 13);
    var emojiAleatorio = generarNumeroAleatorio(1, 31);
    var emojiAleatorio2 = generarNumeroAleatorio(1, 31);
    var emojiAleatorio3 = generarNumeroAleatorio(1, 31);
    var civilAleatorio = generarNumeroAleatorio(0, 1);

    var arrayIntereses = ["Salir a pasear", "Diseño web", "Dejar de jugar LOL", "Conocer gente nueva", "Las hamburguesas","La pizza", "La arepa", "El arroz", "El helado", "Comida oriental", "Comida Francesa", "Comida española", "Comida rapida", "Conseguir Pareja"];
    var Emojis = ["🙌","😪","😊","😎","🌈","😋","🌔","⛩","😙","😍","🖤","🦝","🎂","🤷‍♂️","🎶","😜","🐱‍👤","🐱‍🏍","💋","🌹","🎉","🥶","🤑","😲","👻","👽","🤖","😿","🙉","🐱‍🚀","🐱‍🐉","😹"]
    var civil = ["Soltero", "¡Casado!"];
    
    const status = document.getElementById('statusUser');
    const intereses = document.getElementById('intereses');
    const intereses2 = document.getElementById('intereses2');
    const intereses3 = document.getElementById('intereses3');
    
    intereses.textContent = arrayIntereses[interesesAleatorio] + " " + Emojis[emojiAleatorio];
    intereses2.textContent = arrayIntereses[interesesAleatorio2] + " " + Emojis[emojiAleatorio2];
    intereses3.textContent = arrayIntereses[interesesAleatorio3] + " " + Emojis[emojiAleatorio3];

    status.textContent = civil[civilAleatorio];
    
    console.log(arrayIntereses[interesesAleatorio]);
    ph3.textContent = numeroAleatorio;