function calcular() {
    var valor1 = parseInt(document.getElementById('valor1').value);
    var valor2 = parseInt(document.getElementById('valor2').value);
    var operacao = document.getElementById('operacao').value;
    switch(operacao) {
    case 'Soma':
    var resultado = valor1 + valor2;
    break;
    case 'Subtração':
    var resultado = valor1 - valor2;
    break;
    case 'Multiplicação':
    var resultado = valor1 * valor2;
    break;
    case 'Divisão':
    if (valor2 == 0)
    {
    window.alert("Não existe divisão por zero! Altere o valor da operação...");
    break;
    } else {
    var resultado = valor1 / valor2;
    break;
    }
    default:
    window.alert("Favor informar o tipo de operação!");
    }
    document.getElementById('resultado').innerHTML = "O resultado é " +
   resultado.toFixed(2);
    }
   