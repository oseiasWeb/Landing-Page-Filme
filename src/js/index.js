const botaoTrailer = document.querySelector(".botao-trailer");
const botaoFecharModal = document.querySelector(".fechar-modal"); 
const modal = document.querySelector(".modal");
const video = document.getElementById("video");
const linkVideo = video.src;

function abrirFecharModal(){
    modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", () => {  
    abrirFecharModal();
    video.setAttribute("src",linkVideo);
});

botaoFecharModal.addEventListener("click", () => {
    abrirFecharModal();
    video.setAttribute("src","");
})