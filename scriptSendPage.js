document.querySelectorAll(".input-field").forEach((input) => {
  const wrapper = input.closest(".input-wrapper");

  // Verifica no carregamento
  if (input.value) {
    wrapper.classList.add("active");
  }

  // Quando o campo é focado
  input.addEventListener("focus", () => {
    wrapper.classList.add("active");
  });

  // Quando o campo perde o foco
  input.addEventListener("blur", () => {
    if (!input.value) {
      wrapper.classList.remove("active");
    }
  });
});
