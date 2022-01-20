import Modal from "./modal.js";

const modal = Modal();
const modalTitle = document.querySelector(".modal h2");
console.log(modalTitle);
const modalDescription = document.querySelector(".modal p");
const modalButton = document.querySelector(".modal button");

const checkButton = document.querySelectorAll(".actions a.check");

checkButton.forEach((button) => {
  //adicionar a escuta
  button.addEventListener("click", handleClick);
});

const deleteButton = document.querySelectorAll(".actions a.delete");

deleteButton.forEach((button) => {
  button.addEventListener("click", (event) => handleClick(event, false));
});

function handleClick(event, check = true) {
  event.preventDefault();

  const roomId = document.querySelector("#room-id").dataset.id;
  const questionId = event.target.dataset.id;
  const slug = check ? "check" : "delete";
  const form = document.querySelector(".modal form");

  form.setAttribute("action", `/room/${roomId}/${questionId}/${slug}`);

  modalTitle.innerHTML = check ? "Marca como lida" : "Excluir pergunta";

  modalButton.innerHTML = check
    ? "Sim ,marca como lida"
    : "Sim, excluir pergunta";

  modalDescription.innerHTML = check
    ? "Tem certeza que deseja marcar como lida esta pergunta"
    : "Tem certeza que deseja excluir esta pergunta";

  check
    ? modalButton.classList.remove("red")
    : modalButton.classList.add("red");

  //abrir modal
  modal.open();
}
