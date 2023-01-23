const botaoTrailer = document.querySelector(".botao-trailer");
const modal = document.querySelector(".modal");
const trailer = document.getElementById("video");
const linkDoVideo = video.src;
const botaoFechaTrailer = document.querySelector(".fechar-modal");

function AlterarModal() {
    modal.classList.toggle("aberto")
}

botaoTrailer.addEventListener("click", () => {
    AlterarModal();
    video.setAttribute("src", linkDoVideo)
})




botaoFechaTrailer.addEventListener("click", () => {
    AlterarModal();
    video.setAttribute("src", "")
})

