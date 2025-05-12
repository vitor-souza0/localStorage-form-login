const inputUser = document.querySelector("#log-usuario")
const inputSenha = document.querySelector("#log-senha")
const confirmarSenha = document.querySelector("#log-confirmar-senha")
const btnRegistro= document.querySelector("#SignInBtn")

const cadastroUsuario = () =>{
    let user = inputUser.value
    let senha = inputSenha.value
    let confirmarSenha = confirmarSenha.value

    if(user.trim() != "" && senha == confirmarSenha){
        localStorage.setItem("user" , user)
        localStorage.setItem("senha" , senha)
        window.location.href = "../../index.html"
        alert("usuario cadastrado com sucesso")
        return
    }
    alert("as senhas não são iguais ou o campo de usario esta vazio,por favor tente novamente")

}

btnRegistro.addEventListener("click" , cadastroUsuario)