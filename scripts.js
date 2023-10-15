function calculate() {
    // Obter os valores e operador do formulário
    const value1 = parseFloat(document.getElementById("value1").value);
    const value2 = parseFloat(document.getElementById("value2").value);
    const operator = document.getElementById("operator").value;

    let result = 0;
    let remainder = "";

    // Realizar a operação com base no operador selecionado
    switch (operator) {
        case "+":
            result = value1 + value2;
            break;
        case "-":
            result = value1 - value2;
            break;
        case "*":
            result = value1 * value2;
            break;
        case "/":
            if (value2 === 0) {
                result = "Erro: Divisão por zero!";
            } else {
                result = Math.floor(value1 / value2);
                remainder = `Sobra: ${value1 % value2}`;
            }
            break;
    }

    // Exibir o resultado e a sobra (se houver)
    document.getElementById("calc-result").textContent = result;
    document.getElementById("remainder").textContent = remainder;
}
