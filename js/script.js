function expandImage(img) {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("expandedImg");
  const modalBtn = document.getElementById("modalWhatsappBtn");

  // Mostrar modal
  modal.style.display = "flex";
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');

  // Asignar imagen y enlace
  modalImg.src = img.src;
  const card = img.closest(".card");
  const whatsappLink = card.querySelector(".whatsapp-btn").href;
  modalBtn.href = whatsappLink;
}

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('imageModal');
  const closeBtn = modal.querySelector('.close');
  const modalImg = document.getElementById('expandedImg');

  function closeModal() {
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
    modalImg.src = '';
  }

  closeBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
});
/* ---------- Modal ---------- */