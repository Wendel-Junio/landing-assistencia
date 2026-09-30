const botaoMenu = document.querySelector(".menu-botao");
const menu = document.querySelector("#menu-principal");
const linksMenu = menu.querySelectorAll("a");

botaoMenu.addEventListener("click", () => {
  const menuAberto = menu.classList.toggle("aberto");

  botaoMenu.classList.toggle("ativo", menuAberto);
  botaoMenu.setAttribute("aria-expanded", menuAberto);
  botaoMenu.setAttribute(
    "aria-label",
    menuAberto ? "Fechar menu" : "Abrir menu"
  );
});

linksMenu.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("aberto");
    botaoMenu.classList.remove("ativo");
    botaoMenu.setAttribute("aria-expanded", "false");
    botaoMenu.setAttribute("aria-label", "Abrir menu");
  });
});