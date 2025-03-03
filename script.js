document.addEventListener("DOMContentLoaded", function () {
    const priceInput = document.querySelector(".fipe");
    const btn = document.querySelector(".btn");

    // Formata o input enquanto o usuário digita
    priceInput.addEventListener("input", function () {
        let value = this.value.replace(/\D/g, ""); // Remove tudo que não for número
        if (value === "") {
            this.value = "";
            return;
        }

        let number = (parseInt(value) / 100).toFixed(2); // Converte para decimal
        this.value = "R$ " + number.replace(".", ",").replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    });

    // Retorna o valor do input sem formatação
    function getRawValue() {
        return parseFloat(priceInput.value.replace(/\D/g, "")) / 100 || 0; // Se vazio, retorna 0
    }

    // Função chamada ao clicar no botão
    function clicou() {
        let fipe = getRawValue(); // Obtém o valor numérico do input
        const radio_men = document.querySelectorAll('input[name="men"]');
        const radio_fra = document.querySelectorAll('input[name="fra"]');

        let multiplicadormen = 0;
        let multiplicadormenV = false;

        if (fipe === 0) {
            alert("Insira um valor de Fipe");
            return;
        }

        for (let i = 0; i < radio_men.length; i++) {
            if (radio_men[i].checked) {
                multiplicadormen = parseFloat(radio_men[i].value);
                multiplicadormenV = true;
                break;
            }
        }

        if (!multiplicadormenV) {
            alert("Selecione uma opção para mensalidade");
            return;
        }

        let multiplicadorfra = 0;
        let multiplicadorfraV = false;

        for (let i = 0; i < radio_fra.length; i++) {
            if (radio_fra[i].checked) {
                multiplicadorfra = parseFloat(radio_fra[i].value);
                multiplicadorfraV = true;
                break;
            }
        }

        if (!multiplicadorfraV) {
            alert("Selecione uma opção para franquia");
            return;
        }

        // Calcula e exibe os resultados
        document.querySelector(".fipe_resultado").value = formatCurrency(fipe);

        const calculomen = fipe * multiplicadormen + 20;
        document.querySelector(".mensalidade_resultado").value = formatCurrency(calculomen);

        const calculofra = fipe * multiplicadorfra;
        document.querySelector(".franquia_resultado").value = formatCurrency(calculofra);
    }

    // Função para formatar valores numéricos como moeda
    function formatCurrency(value) {
        return new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(value);
    }

    btn.addEventListener("click", clicou);
});
