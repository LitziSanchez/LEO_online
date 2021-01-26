let btn_back = document.querySelector("#btn_back")

let audioEtiqueta = document.querySelector("audio")

btn_back.addEventListener("click", () => {
    audioEtiqueta.setAttribute("src", "sounds/burbuja.mp3")
    audioEtiqueta.play()
    console.log(`Reproduciendo: ${audioEtiqueta.src}`)
    setTimeout("location.href='lecto-escritura.html'", 600)
})