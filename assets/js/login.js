const inputLogin = document.querySelector("#log-usuario")
const inputSenha = document.querySelector("#log-senha")
const btnLogin = document.querySelector("#SignInBtn")

const login = () => {
    let user = inputLogin.value
    let senha = inputSenha.value  
    
    let cadastroLogin = localStorage.getItem("user")
    let cadastradosenha = localStorage.getItem("senha")

    if (user == cadastroLogin && senha == cadastradosenha) {
        window.location.href = `../../pages/home.html`
        alert("logado com sucesso")
        return
    }
    alert("usuario ou senha incorreto")
}

btnLogin.addEventListener("click" , login)