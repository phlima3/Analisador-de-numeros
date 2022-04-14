let num = [];
function adicionar() {
  let valorDigitado = Number(document.querySelector("#num").value);
  let sel = document.querySelector("#selNum");
  let res = document.querySelector("#res");

  if (valorDigitado < 1 || valorDigitado > 100 || !valorDigitado) {
    alert("[ERRO!] Por favor digite um valor válido.");
  } else {
    let item = document.createElement("option");
    num.push(valorDigitado);
    item.text = `Valor ${valorDigitado} adicionado`;
    sel.appendChild(item);
    console.log(num);
    var max = num.reduce(function (a, b) {
      return Math.max(a, b);
    }, -Infinity);

    var min = num.reduce(function (a, b) {
      return Math.min(a, b);
    });
    var soma = 0;
    for (var i = 0; i < num.length; i++) {
      soma += num[i];
    }
  }
}


function finalizar(res,num,max,min,soma) {
    res.innerHTML = `<p>Ao todo, temos ${num.length} números cadastrados.</p>
    <p>O maior valor digitado foi ${max}</p>
    <p>O menor valor digitado foi ${min}</p>
    <p>A soma de todos os valores é de ${soma}
    <p>A média dos valores digitados é ${soma / num.length}</p>`;
  }
  
