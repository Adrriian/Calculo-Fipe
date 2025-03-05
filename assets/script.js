let phone = document.querySelector(".phone");
phone.addEventListener("input", function () {
    this.value = this.value.replace(/[^0-9]/g, ""); // Remove qualquer caractere que não seja número
    
});

let btn = document.querySelectorAll(".btn")
btn.forEach(btns =>{
    btns.addEventListener("click", () => {

        //Variaveis gerais 
        let acao = btns.getAttribute("data-acao");
        let modalcar = document.querySelector(".modalcar");
        let modalcl = document.querySelector(".modalcl");
        let modalclplus = document.querySelector(".modalclplus");
        let minmencar = 91.5
        let minmenbike = 86.50
        let minpar = 1600

        //Variaveis de coleta de dados 
        let name = document.querySelector(".name");
        let phone = document.querySelector(".phone");
        let fipe =  document.querySelector(".fipe")
        let cotamen = document.querySelector('input[name="men"]:checked')
        let cotapar = document.querySelector('input[name="par"]:checked')

        //variveis de dados armazenados
        


        //Variaveis de inserir dados
        let name_result = document.querySelector(".name_result");
        let phone_result = document.querySelector(".phone_result");
        let fipe_result = document.querySelector(".fipe_result");
        let cota_men_result = document.querySelector(".cota_men_result");
        let cota_par_result = document.querySelector(".cota_par_result");
        let par_result = document.querySelector(".par_result")

       
        //Transformando o input da fipe 

        fipe.addEventListener("input", function () {
            let value = this.value.replace(/\D/g, ""); // Remove tudo que não for número
            if (value === "") {
                this.value = "";
                return;
            };
    
            let number = (parseInt(value) / 100).toFixed(2); // Converte para decimal
            this.value = "R$ " + number.replace(".", ",").replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        });
        
        switch(acao){ 
            case "carro":
                modalcar.style.display = "flex"
            break;
            case "moto 150 CL":
                    modalcl.style.display = "flex"
            break
            case "moto 150 CL+":
                modalclplus.style.display = "flex"
            break
            case "cotacaocar":
                 //If de verificações 
                modalcar.style.display = "none"
                name_result.innerText = name.value
                phone_result.innerText = phone.value
                fipe_result.innerText = fipe.value
                cota_men_result.innerText = cotamen.value
                cota_par_result.innerText = cotapar.value
                par_result.innerText = minpar;
            break;
            case "cotacaocl":
                modalcl.style.display = "none"
                name_result.innerText = name.value
                phone_result.innerText = phone.value
                fipe_result.innerText = fipe.value
                cota_men_result.innerText = cotamen.value
                cota_par_result.innerText = cotapar.value
                par_result.innerText = minpar;
                
            break;
            case "cotacaocl+":
                    //If de verificações 
                    modalclplus.style.display = "none"
                    if(name.value === ""){
                        alert("Digite um nome")  
                    }else if(phone.value === ""){
                        alert("Digite um Número")
                    }else if(fipe.value == ""){
                        alert("Digite a Fipe do Veiculo") 
                    } else{
                        name_result.innerText = name.value
                        phone_result.innerText = phone.value
                        fipe_result.innerText = fipe.value
                        cota_men_result.innerText = cotamen.value
                        cota_par_result.innerText = cotapar.value
                        par_result.value = minpar
                    } 
            break;
        }
     })})
