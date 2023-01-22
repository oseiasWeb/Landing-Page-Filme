const botaoTrailer = document.querySelector(".botao-trailer"); 
const modal = document.querySelector(".modal");
const video = document.getElementById("video");
const linkVideo = video.src;

botaoTrailer.addEventListener("click", () => {  
    modal.classList.add("aberto");
    video.setAttribute("src",linkVideo);
});

const botaoFecharModal = document.querySelector(".fechar-modal");
botaoFecharModal.addEventListener("click", () => {
    modal.classList.remove("aberto");
    video.setAttribute("src","");
})