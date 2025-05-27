const cards = document.querySelectorAll(".card");
const mensagemCentral = document.getElementById("mensagem-central");

let timeoutFadeOut;

cards.forEach((card) => {
  const img = card.querySelector(".bolinha");
  const mensagem = card.querySelector(".mensagem-hover-bolinhas");

  function mostrarMensagem() {
    clearTimeout(timeoutFadeOut);
    if (mensagem && mensagemCentral) {
      mensagemCentral.innerHTML = mensagem.innerHTML;
      mensagemCentral.classList.remove("saindo"); // remove classe de saída
      mensagemCentral.classList.add("ativa"); // ativa entrada
    }
  }

  function esconderMensagem() {
    // ✅ inicia efeito de saída com delay antes de limpar conteúdo
    mensagemCentral.classList.remove("ativa");
    mensagemCentral.classList.add("saindo");
    timeoutFadeOut = setTimeout(() => {
      mensagemCentral.innerHTML = "";
      mensagemCentral.classList.remove("saindo");
    }, 500); // mesmo tempo do transition
  }

  img.addEventListener("click", () => {
    const isActive = card.classList.toggle("ativo");
    cards.forEach((c) => {
      if (c !== card) c.classList.remove("ativo");
    });
    if (isActive) {
      mostrarMensagem();
    } else {
      esconderMensagem();
    }
  });

  card.addEventListener("mouseenter", () => {
    cards.forEach((c) => {
      if (c !== card) c.classList.remove("ativo");
    });
    mostrarMensagem();
  });

  card.addEventListener("mouseleave", () => {
    if (!card.classList.contains("ativo")) {
      esconderMensagem();
    }
  });
});

// ------------------------------------------------------

document.getElementById("enviar").addEventListener("click", function () {
  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("mail").value.trim();
  const mensagem = document.getElementById("message").value.trim();

  if (!nome || !email || !mensagem) {
    alert("Por favor, preencha todos os campos antes de enviar.");
  } else {
    alert("Formulário preenchido corretamente! Obrigado.");

    // Limpar os campos
    document.getElementById("nome").value = "";
    document.getElementById("mail").value = "";
    document.getElementById("message").value = "";
  }
});

// ------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  const elementosParaAnimar = document.querySelectorAll(".fade-wrapper");

  function estaVisivel(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top < window.innerHeight - 100 && // ativa um pouco antes de entrar
      rect.bottom > 0
    );
  }

  function animarAoScroll() {
    elementosParaAnimar.forEach((el) => {
      if (estaVisivel(el)) {
        el.classList.add("visible");
      } else {
        el.classList.remove("visible");
      }
    });
  }

  // Executa no carregamento e ao rolar
  window.addEventListener("scroll", animarAoScroll);
  window.addEventListener("resize", animarAoScroll);
  animarAoScroll(); // ✅ chama logo no início para mostrar elementos visíveis
});
