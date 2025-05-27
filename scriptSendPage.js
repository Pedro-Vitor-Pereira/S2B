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

document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("enviarBtn");
  const form = document.getElementById("formulario");
  const mensagem = document.getElementById("mensagem-enviada");

  btn.addEventListener("click", () => {
    // Limpa os campos do formulário
    form.reset();

    // Mostra a mensagem de agradecimento
    mensagem.style.display = "block";

    // Esconde a mensagem depois de 5 segundos (opcional)
    setTimeout(() => {
      mensagem.style.display = "none";
    }, 5000);
  });
});
