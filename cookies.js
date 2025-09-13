// Função para aceitar cookies
function aceitarCookies() {
  // Esconde o banner
  document.getElementById("cookie-banner").style.display = "none";
  // Salva no navegador que o usuário aceitou
  localStorage.setItem("cookiesAceitos", "true");
}

// Mostrar o banner se o usuário ainda não aceitou
window.onload = function() {
  if (!localStorage.getItem("cookiesAceitos")) {
    document.getElementById("cookie-banner").style.display = "block";
  }
}
