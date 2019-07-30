
// function mostrarMouse(event){
//     if(`Eixo X: ${event.pageX} e Eixo Y: ${event.pageY}`);
//     if(event.pageX <= 20 || event.pageY <= 20 ){
//         alert("Não por favor, Naooooooooooooooooooo")  
//     }   
// }
// window.onmousemove = mostrarMouse;


// localStorage.setItem('email', 'guilhermemouraa5@gmail.com');

let nome = document.querySelector("input");
let h2 = document.querySelector("h2");
let botao = document.querySelector("button");
let a = document.querySelector("a");

let div = document.querySelector("div");
let section = document.querySelector("section")

if(localStorage.login){
    h2.innerHTML = `SEJA BEM VINDO ${localStorage.login}`;
    a.innerHTML = `NÂO È O ${localStorage.login}`;
    div.style.display = `none`;
    section.style.display = `initial`

} else {
    function acessar(){
    localStorage.setItem("login", nome.value);
    div.style.display = "initial"

    if(localStorage.login){
        h2.innerHTML = `SEJA BEM VINDO ${localStorage.login}`;
        a.innerHTML = `NÂO È O ${localStorage.login}`;
        div.style.display = `none`;
        section.style.display = `initial`
        }
    }
}

function limpar() {
    localStorage.clear();
    
}

botao.onclick = acessar;

naosou.onclick = limpar;