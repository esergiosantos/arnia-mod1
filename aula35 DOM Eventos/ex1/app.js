const form = document.querySelector("form");
const nome = document.querySelector("#nome");
const preco = document.querySelector("#preco");
const quantidade = document.querySelector("#quantidade");
const categoria = document.querySelector("#categoria");
const card = document.querySelector("#card");
const nomeCard = document.querySelector("#nome-card");
const precoCard = document.querySelector("#preco-card");
const quantidadeCard = document.querySelector("#quantidade-card");
const categoriaCard = document.querySelector("#categoria-card");
const totalCard = document.querySelector("#total-card");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (
    nome.validity.valid &&
    preco.validity.valid &&
    quantidade.validity.valid &&
    categoria.validity.valid
  ) {
    card.style.display = "block";
    nomeCard.textContent = nome.value;
    precoCard.textContent = preco.value;
    quantidadeCard.textContent = quantidade.value;
    categoriaCard.textContent = categoria.value;
    totalCard.textContent = preco.value * quantidade.value;
  } else {
    alert("Campo obrigatório");
  }
});
