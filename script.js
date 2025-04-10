
document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".caixa-projetos");
  const btnLeft = document.querySelector(".btn-nav.left");
  const btnRight = document.querySelector(".btn-nav.right");

  const scrollAmount = 1000; // ajuste conforme necessário

  // Função para atualizar visibilidade das setas
  function atualizarSetas() {
    const scrollEsquerda = container.scrollLeft;
    const scrollMaximo = container.scrollWidth - container.clientWidth;

    btnLeft.style.display = scrollEsquerda > 0 ? "block" : "none";
    btnRight.style.display = scrollEsquerda < scrollMaximo ? "block" : "none";
  }

  // Eventos de clique com atualização das setas
  btnLeft.addEventListener("click", () => {
    container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    setTimeout(atualizarSetas, 400); // espera a rolagem acontecer
  });

  btnRight.addEventListener("click", () => {
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    setTimeout(atualizarSetas, 400);
  });

  // Atualiza ao rolar manualmente
  container.addEventListener("scroll", atualizarSetas);

  // Atualiza ao carregar a página
  atualizarSetas();
});
