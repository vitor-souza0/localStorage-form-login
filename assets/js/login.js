const inputLogin = document.querySelector("#log-usuario")
const inputSenha = document.querySelector("#log-senha")
const btnLogin = document.querySelector("#SignInBtn")

const login = () => {
    let user = inputLogin.value
    let senha = inputSenha.value  
    
    let cadastroLogin = localStorage.getItem("user")
    let cadastradosenha = localStorage.getItem("senha")

    if (user == cadastroLogin && senha == cadastradosenha) {
        localStorage.setItem("status" , ("true"))

        setTimeout(() => {
         window.location.href = `../../pages/home.html`
        alert("logado com sucesso")
        }, 1000);
        return
    }
    alert("usuario ou senha incorreto")
}
const loginAuto = () => {
    let status = localStorage.getItem("status")

    if(status == "true"){
        window.location.href = "../../pages/home.html"
    }
}
loginAuto()

btnLogin.addEventListener("click" , login)