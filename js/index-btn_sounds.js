let btn_start = document.querySelector("#start")
let btn_about = document.querySelector("#acerca")

let audioEtiqueta = document.querySelector("audio")


btn_start.addEventListener("click", () => {
    audioEtiqueta.setAttribute("src", "sounds/burbuja.mp3")
    audioEtiqueta.play()
    console.log(`Reproduciendo: ${audioEtiqueta.src}`)
    setTimeout("location.href='lecto-escritura.html'", 600)
})

btn_about.addEventListener("click", () => {
    audioEtiqueta.setAttribute("src", "sounds/burbuja.mp3")
    audioEtiqueta.play()
    console.log(`Reproduciendo: ${audioEtiqueta.src}`)
    setTimeout("location.href='about.html'", 600)
})