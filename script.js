// Pega todas as caveiras (ícones)
const caveiras = document.querySelectorAll(".fa-skull-crossbones");

// Adiciona um evento de clique para cada caveira
caveiras.forEach((caveira) => {
  caveira.addEventListener("click", function () {
    // Pega a lâmina associada à caveira clicada
    const lamina = caveira.nextElementSibling; // Pega o próximo elemento (blades)

    // Alterna a visibilidade das lâminas
    lamina.style.display = lamina.style.display == "flex" ? "none" : "flex";
  });
});

const character = document.getElementById("character");
const characterTitle = document.getElementById("character-title");
const characterImg = document.getElementById("character-image");
const characterDescription = document.getElementById("character-description");
const closeArrow = document.getElementById("close-arrow");

// Seleciona todas as imagens que devem ativar o character
const triggers = document.querySelectorAll(".character-trigger");

triggers.forEach((trigger) => {
  trigger.addEventListener("click", function () {
    // Atualiza o conteúdo do character
    characterTitle.textContent = this.dataset.title;
    characterImg.src = this.dataset.img;
    characterDescription.textContent = this.dataset.description;

    // Mostra o character com animação
    character.classList.add("visible");
  });
});

// Esconde o elemento ao clicar na seta
closeArrow.addEventListener("click", function () {
  character.classList.remove("visible");
});
