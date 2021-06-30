import Modal from './modal.js';

const modal = Modal()
const modalTitles = document.querySelector(".modal h2")
const modalDescription = document.querySelector(".modal p")
const modalButton = document.querySelector(".modal button")


// Botao Marca como lido 
const checkButtons = document.querySelectorAll(".action a.check");
checkButtons.forEach(button => {
  button.addEventListener("click", handleClick)
})


//Botao excluir
const deleteButton = document.querySelectorAll(".action a.delete")
deleteButton.forEach(button => {
  button.addEventListener("click", (event) => handleClick(event, false))
})

function handleClick(event, check = true) {
  const text = check ? "Marca como lida " : "Excluir "
  console.log(modalButton)
  modalTitles.innerHTML = `${text} esta pergunta`
  modalDescription.innerHTML = `Tem certeza que deseja ${text.toLowerCase()} esta pergunta?`
  modalButton.innerHTML = `Sim, ${text.toLowerCase()}`
  check ? modalButton.classList.remove("red") : modalButton.classList.add("red")
  modal.open()

}