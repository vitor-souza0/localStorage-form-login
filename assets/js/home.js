const btnLogout = document.querySelector("#btn-logout")
const deteletarConta = document.querySelector("#deletar-conta")

const deletar = () =>{
    localStorage.clear
    window.location.href = "../../index.html"

}

const logout = () => {
    localStorage.removeItem("status")
    window.location.href = "../../index.html"
}

btnLogout.addEventListener("click" , logout)
deteletarConta.addEventListener("click" , deletar)