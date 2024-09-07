// Formatação de CPF
const inputCpf = document.querySelector('#cpf');

inputCpf.addEventListener('keypress', () => {
    let inputLength = inputCpf.value.length;

    // Adiciona pontos e hífen no CPF conforme o comprimento do input
    if (inputLength === 3 || inputLength === 7) {
        inputCpf.value += '.';
    } else if (inputLength === 11) {
        inputCpf.value += '-';
    }
});

// Formatação de Telefone
const handlePhone = (event) => {
    let input = event.target;
    input.value = phoneMask(input.value);
};

const phoneMask = (value) => {
    if (!value) return "";
    value = value.replace(/\D/g, ''); // Remove caracteres não numéricos
    value = value.replace(/(\d{2})(\d)/, "($1) $2"); // Formata código de área
    value = value.replace(/(\d)(\d{4})$/, "$1-$2"); // Adiciona hífen
    return value;
};

// Formatação de Data de Nascimento
const inputDataNascimento = document.getElementById("dataNascimento");

inputDataNascimento.addEventListener("input", (e) => {
    let valor = e.target.value.replace(/\D/g, ''); // Remove tudo que não é número
    valor = valor.replace(/(\d{2})(\d)/, '$1/$2'); // Adiciona '/'
    valor = valor.replace(/(\d{2})(\d)/, '$1/$2'); // Adiciona '/'
    e.target.value = valor;
});

// Aviso de Envio
function mostrarAviso() {
    alert('Dados enviados com sucesso!');
}
