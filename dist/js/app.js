import { NegociacaoController } from "./controllers/negociacaoController.js";
const form = document.querySelector('.form');
const controller = new NegociacaoController();
form.addEventListener('submit', (event) => {
    event.preventDefault();
    controller.submit();
});
