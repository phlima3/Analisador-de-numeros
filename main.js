let num = [];
let valorDigitado = document.querySelector("#num");
let sel = document.querySelector("#selNum");
let res = document.querySelector("#res");

function isNumero(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true;
  } else {
    return false;
  }
}

function inLista(n, l) {
  if (l.indexOf(Number(n)) != -1) {
    return true;
  } else {
    return false;
  }
}

function adicionar() {
  if (isNumero(valorDigitado.value) && !inLista(valorDigitado.value, num)) {
    num.push(Number(valorDigitado.value));
    let item = document.createElement("option");
    item.text = `Valor ${valorDigitado.value} adicionado`;
    sel.appendChild(item);
    res.innerHTML = "";
  } else {
    alert("[ERRO] Valor inválido, ou já encontrado na lista.");
  }
  valorDigitado.value = "";
  valorDigitado.focus();
}

function finalizar() {
  if (num.length == 0) {
    alert("[ERRO]Por favor, insira valores antes de começar");
  } else {
    var max = num.reduce(function (a, b) {
      return Math.max(a, b);
    });

    var min = num.reduce(function (a, b) {
      return Math.min(a, b);
    });
    var soma = 0;
    for (var i = 0; i < num.length; i++) {
      soma += num[i];
    }

    res.innerHTML = `<p>Ao todo, temos ${num.length} números cadastrados.</p>
      <p>O maior valor digitado foi ${max}</p>
      <p>O menor valor digitado foi ${min}</p>
      <p>A soma de todos os valores é de ${soma}
      <p>A média dos valores digitados é ${soma / num.length}</p>`;
  }
}

//=======================================
