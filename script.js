document.addEventListener("DOMContentLoaded", function () {
    const priceInput = document.querySelector(".fipe");
    const btn = document.querySelector(".btn");
    const btnPdf = document.querySelector(".btn-pdf");

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
        const radio_vec = document.querySelectorAll('input[name="vec"]'); // Tipo de veículo

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

        let tipoVeiculo = "";
        let tipoVeiculoV = false;

        for (let i = 0; i < radio_vec.length; i++) {
            if (radio_vec[i].checked) {
                tipoVeiculo = radio_vec[i].value; // 'carro' ou 'moto'
                tipoVeiculoV = true;
                break;
            }
        }

        if (!tipoVeiculoV) {
            alert("Selecione um tipo de veículo");
            return;
        }

        // Definir valores mínimos de mensalidade
        const minMensalidadeCarro = 91.50;
        const minMensalidadeMoto = 86.50;

        // Cálculo da mensalidade considerando o mínimo
        let calculomen = fipe * multiplicadormen;
        if (tipoVeiculo === "carro" && calculomen < minMensalidadeCarro) {
            calculomen = minMensalidadeCarro;
        } else if (tipoVeiculo === "moto" && calculomen < minMensalidadeMoto) {
            calculomen = minMensalidadeMoto;
        }
        calculomen += 20; // Soma os R$ 20 fixos

        // Cálculo da franquia
        const calculofra = fipe * multiplicadorfra;

        // Exibir resultados formatados
        document.querySelector(".fipe_resultado").value = formatCurrency(fipe);
        document.querySelector(".mensalidade_resultado").value = formatCurrency(calculomen);
        document.querySelector(".franquia_resultado").value = formatCurrency(calculofra);
    }

    // Função para formatar valores numéricos como moeda
    function formatCurrency(value) {
        return new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(value);
    }

    // Função para gerar o PDF
    function gerarPDF() {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        const fipe = document.querySelector(".fipe_resultado").value;
        const mensalidade = document.querySelector(".mensalidade_resultado").value;
        const franquia = document.querySelector(".franquia_resultado").value;

        doc.text("COTAÇÃO DE SEGURO", 10, 10);
        doc.text(`Fipe: ${fipe}`, 10, 20);
        doc.text(`Mensalidade: ${mensalidade}`, 10, 30);
        doc.text(`Franquia: ${franquia}`, 10, 40);

        doc.save("cotacao.pdf");
    }

    btn.addEventListener("click", clicou);
    btnPdf.addEventListener("click", gerarPDF);
});
