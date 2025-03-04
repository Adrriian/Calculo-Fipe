let btnc = document.querySelector(".btncarro");
let btnm = document.querySelector(".btnmoto");
let btnmt = document.querySelector(".btnmotocl");

btnc.addEventListener("click", () => selecionarBotao(btnc, btnm, btnmt));
btnm.addEventListener("click", () => selecionarBotao(btnm, btnc, btnmt));
btnmt.addEventListener("click", () => selecionarBotao(btnmt, btnc, btnm));

function selecionarBotao(botaoAtivo, botaoInativo1, botaoInativo2) {
    // Verifica se algum dos botões inativos tem a classe "selecionado"
    if (botaoInativo1.classList.contains("selecionado") || botaoInativo2.classList.contains("selecionado")) {
        // Se sim, adiciona a classe ao botão ativo e remove dos botões inativos
        botaoAtivo.classList.add("selecionado");
        botaoInativo1.classList.remove("selecionado");
        botaoInativo2.classList.remove("selecionado");
    } else {
        // Se não, apenas adiciona a classe ao botão ativo
        botaoAtivo.classList.add("selecionado");
    }
}



let btn = document.querySelectorAll(".btn")

btn.forEach(btns =>{
    btns.addEventListener("click", () => {
        let acao = btns.getAttribute("data-acao")
        let modal = document.querySelector(".modal")
        let minmencarbike = 91.50
        let minmenbike = 86.50


        switch(acao){
            case "carro":
                selecionarBotao()
            break
            case "moto 150 CL":
                selecionarBotao()
            break
            case "moto 150 CL+":
                selecionarBotao()
            break
            case "fipe":
                alert("clicou na fipe")
            break
            case "salvar":

            break
            case "cotacao":

            break
        }
    })

}) 
