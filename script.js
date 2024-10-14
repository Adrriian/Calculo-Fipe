function result(){
    let fipe = document.querySelector('.fipe').value;
    let calculo = document.querySelector('.calculo1').value;
    let calculo2 = document.querySelector('.calculo3').value;
    let resulta = Number(fipe) * Number(calculo);
    let resulta2 = Number(fipe) * Number(calculo2);

    document.querySelector('.resultado_mensalidade').value = resulta;
    document.querySelector('.resultado_franquia').value = resulta2;
}




const button = document.querySelector('.botao');
button.addEventListener('click', result);