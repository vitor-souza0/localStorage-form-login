const inputUser = document.querySelector("#log-usuario")
const inputSenha = document.querySelector("#log-senha")
const inputConfirmarSenha = document.querySelector("#log-confirmar-senha")
const btnRegistro = document.querySelector("#signInBtn")

const cadastroUsuario = () => {
    let user = inputUser.value
    let senha = inputSenha.value
    let confirmar = inputConfirmarSenha.value

    if(user.trim() !== "" && senha === confirmar){
        localStorage.setItem("user", user)
        localStorage.setItem("senha", senha)
        alert("Usuário cadastrado com sucesso")
        window.location.href = "../../index.html"
        return
    }
    alert("As senhas não são iguais ou o campo de usuário está vazio. Por favor, tente novamente.")
}

btnRegistro.addEventListener("click", cadastroUsuario)
  