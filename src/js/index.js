const botaoTrailer = document.querySelector(".botao-trailer");
const modal = document.querySelector(".modal");
const trailer = document.getElementById("video");
const linkDoVideo = video.src;

botaoTrailer.addEventListener("click", () => {
    modal.classList.add("aberto")
    video.setAttribute("src", linkDoVideo)
})


const botaoFechaTrailer = document.querySelector(".fechar-modal");

botaoFechaTrailer.addEventListener("click", () => {
    modal.classList.remove("aberto")
    video.setAttribute("src", "")
})

