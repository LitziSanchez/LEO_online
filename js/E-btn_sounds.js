//Crear las variables para la ID de las tarjetas
let Ecard1 = document.querySelector("#Ecard1")
let Ecard2 = document.querySelector("#Ecard2")
let btn_back = document.querySelector("#btn_back")

let audioEtiqueta = document.querySelector("audio")

//Cuando se pasa el mouse por una tarjeta, da un sonido
Ecard1.addEventListener("mouseenter", () => {
    audioEtiqueta.setAttribute("src", "sounds/sonido6.mp3")
    audioEtiqueta.play()
    console.log(`Reproduciendo: ${audioEtiqueta.src}`)
})

Ecard2.addEventListener("mouseenter", () => {
    audioEtiqueta.setAttribute("src", "sounds/sonido6.mp3")
    audioEtiqueta.play()
    console.log(`Reproduciendo: ${audioEtiqueta.src}`)
})

//Cuando hacemos clic en el botón de una tarjeta, da otro sonido y tarda 0.56s en redireccionar a la página
Ecard1.addEventListener("click", () => {
    audioEtiqueta.setAttribute("src", "sounds/burbuja.mp3")
    audioEtiqueta.play()
    console.log(`Reproduciendo: ${audioEtiqueta.src}`)
    setTimeout("location.href='vocales.html'", 600)
})

Ecard2.addEventListener("click", () => {
    audioEtiqueta.setAttribute("src", "sounds/burbuja.mp3")
    audioEtiqueta.play()
    console.log(`Reproduciendo: ${audioEtiqueta.src}`)
    setTimeout("location.href='abecedario.html'", 600)
})

btn_back.addEventListener("click", () => {
    audioEtiqueta.setAttribute("src", "sounds/burbuja.mp3")
    audioEtiqueta.play()
    console.log(`Reproduciendo: ${audioEtiqueta.src}`)
    setTimeout("location.href='lecto-escritura.html'", 600)
})