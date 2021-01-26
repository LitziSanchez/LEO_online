//Crear las variables para la ID de las tarjetas
let card1 = document.querySelector("#LEcard1")
let card2 = document.querySelector("#LEcard2")
let card3 = document.querySelector("#LEcard3")
let btn_back = document.querySelector("#btn_back")

let audioEtiqueta = document.querySelector("audio")

//Cuando se pasa el mouse por una tarjeta, da un sonido
card1.addEventListener("mouseenter", () => {
    audioEtiqueta.setAttribute("src", "sounds/sonido6.mp3")
    audioEtiqueta.play()
    console.log(`Reproduciendo: ${audioEtiqueta.src}`)
})

card2.addEventListener("mouseenter", () => {
    audioEtiqueta.setAttribute("src", "sounds/sonido6.mp3")
    audioEtiqueta.play()
    console.log(`Reproduciendo: ${audioEtiqueta.src}`)
})

card3.addEventListener("mouseenter", () => {
    audioEtiqueta.setAttribute("src", "sounds/sonido6.mp3")
    audioEtiqueta.play()
    console.log(`Reproduciendo: ${audioEtiqueta.src}`)
})


//Cuando hacemos clic en el botón de una tarjeta, da otro sonido y tarda 0.3s en redireccionar a la página
card1.addEventListener("click", () => {
    audioEtiqueta.setAttribute("src", "sounds/burbuja.mp3")
    audioEtiqueta.play()
    console.log(`Reproduciendo: ${audioEtiqueta.src}`)
    setTimeout("location.href='escritura.html'", 600)
})

card2.addEventListener("click", () => {
    audioEtiqueta.setAttribute("src", "sounds/burbuja.mp3")
    audioEtiqueta.play()
    console.log(`Reproduciendo: ${audioEtiqueta.src}`)
    setTimeout("location.href='actividades.html'", 600)
})

card3.addEventListener("click", () => {
    audioEtiqueta.setAttribute("src", "sounds/burbuja.mp3")
    audioEtiqueta.play()
    console.log(`Reproduciendo: ${audioEtiqueta.src}`)
    setTimeout("location.href='cuentos.html'", 600)
})

btn_back.addEventListener("click", () => {
    audioEtiqueta.setAttribute("src", "sounds/burbuja.mp3")
    audioEtiqueta.play()
    console.log(`Reproduciendo: ${audioEtiqueta.src}`)
    setTimeout("location.href='index.html'", 600)
})