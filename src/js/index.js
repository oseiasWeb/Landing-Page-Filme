const botaoTrailer = document.querySelector(".botao-trailer"); 
const modal = document.querySelector(".modal");

botaoTrailer.addEventListener("click", () => {  
    modal.classList.add("aberto");
});

const botaoFecharModal = document.querySelector(".fechar-modal");
botaoFecharModal.addEventListener("click", () => {
    modal.classList.remove("aberto");
})
