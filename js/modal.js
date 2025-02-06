document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");
  const closeBtn = document.querySelector(".modal-close");
  const cards = document.querySelectorAll(".card__img");

  // Open modal when clicking on an image
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      const bgImage = getComputedStyle(card).backgroundImage;
      const imageUrl = bgImage.slice(5, -2); // Remove url() wrapper
      modalImg.src = imageUrl;
      modal.classList.add("show");
      document.body.style.overflow = "hidden"; // Prevent scrolling
    });
  });

  // Close modal when clicking the close button
  closeBtn.addEventListener("click", closeModal);

  // Close modal when clicking outside the image
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Close modal with escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModal();
    }
  });

  function closeModal() {
    modal.classList.remove("show");
    document.body.style.overflow = ""; // Restore scrolling
  }
});
