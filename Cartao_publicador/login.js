document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  const msgErro = document.getElementById("msgErro");

  // Usuário e senha fictícios
  const usuarioCorreto = "Betania";
  const senhaCorreta = "12345";

  if (user === usuarioCorreto && pass === senhaCorreta) {
    localStorage.setItem("logado", "true");
    window.location.href = "index.html";
  } else {
    msgErro.textContent = "Usuário ou senha incorretos!";
  }
});
