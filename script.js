let btn = document.querySelector('.btn');
btn.addEventListener('click', clicou);

function clicou(){
    const fipe = document.querySelector('.fipe').value;
    const radio_men = document.querySelectorAll('input[name="men"]');
    const radio_fra = document.querySelectorAll('input[name="fra"]');
    let multiplicadormen = 0;
    let multiplicadormenV = false;

    if(fipe == ""){
        alert('Ensira um valor de Fipe')
    }

    for (let i = 0; i < radio_men.length; i++) {
        if(radio_men[i].checked){
            multiplicadormen = parseFloat(radio_men[i].value);
            multiplicadormenV = true;
            break;
        }
    }

    if(multiplicadormenV == false){
        alert('Selecione uma opção para mensalidade');
        return;
    }

    let multiplicadorfra = 0;
    let multiplicadorfraV = false;

    for (let i = 0; i < radio_fra.length; i++) {
        if(radio_fra[i].checked){
            multiplicadorfra = parseFloat(radio_fra[i].value);
            multiplicadorfraV = true;
            break;
        }
    }

    if(multiplicadorfraV == false){
        alert('Selecione uma opção para franquia');
        return;
    }

    document.querySelector('.fipe_resultado').value = fipe;
    
    const calculomen = (fipe * multiplicadormen)+20;
    document.querySelector('.mensalidade_resultado').value = calculomen;

    const calculofra = fipe * multiplicadorfra;
    document.querySelector('.franquia_resultado').value = calculofra;
}


