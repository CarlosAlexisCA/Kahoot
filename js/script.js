// Obtener elementos del DOM
const modal = document.getElementById('modal');
const openModalBtn = document.getElementById('openModal');
const closeModalBtn = document.getElementsByClassName('close')[0];

// Abrir modal al hacer clic en el botón
openModalBtn.onclick = function () {
    modal.style.display = 'block';
};

// Cerrar modal al hacer clic en el botón de cerrar
closeModalBtn.onclick = function () {
    modal.style.display = 'none';
};

// Cerrar modal al hacer clic fuera del modal
window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};
