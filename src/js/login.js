
function logar() {
  var login = document.getElementById('login').value;
  var senha = document.getElementById('senha').value;

  if (login === "joão" && senha === "123456") {
      Swal.fire({
          title: "Login efetuado!",
          text: "Você será redirecionado para a área restrita.",
          icon: "success",
          background: "#1c1c1c",
          color: "#fff",
          confirmButtonColor:"#F9484A"
      }).then((result) => {
          if (result.isConfirmed) {
              location.href = "tarefa.html";
          }
      });
  } else {
      Swal.fire({
          title: "Erro!",
          text: "Usuário ou senha incorretos.",
          icon: "error",
          background: "#1c1c1c",
          color: "#fff",
          confirmButtonColor:"#F9484A"
      });
  }
}
