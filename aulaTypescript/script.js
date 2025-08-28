var num1 = document.getElementById('num1');
var num2 = document.getElementById('num2');
var botao = document.getElementById('calcular');
var res = document.getElementById('result');
function calculo(n1, n2) {
    if (typeof n1 == 'number' && typeof n2 == 'number') {
        return n1 + n2;
    }
    else {
    }
}
botao.addEventListener('click', function () {
    res.innerHTML = calculo(num1.value, num2.value);
});
