function updateClock () {
    const data = new Date();
    let hours = data.getHours();
    let minutes = data.getMinutes();
    let seconds = data.getSeconds();

hours = hours < 10 ? '0' + hours : hours;
minutes = minutes < 10 ? '0' + minutes : minutes;
seconds = seconds < 10 ? '0' + seconds : seconds;

document.getElementById('hours').textContent = hours;
document.getElementById('minutes').textContent = minutes;
document.getElementById('seconds').textContent = seconds;

}

setInterval(updateClock, 1000);

//Date = Pegar as horas, minutos, segundos e data em geral.
//data.getHours, getMinutes, getSeconds = Sub variações do Date para eventos especificos.

//hours = hours < 10 ? '0' + horas : horas;
//Tradução = Se horas for menor que 10, acrescente 0 na frente de horas, ou seja. 9 => 09 (Operador Ternário, sempre mostrar dois digitos)

//document.getElementById('hours').textContent = hours;
//Atribuir um texto a determinado elemendo selecionado.

//setInterval(atualizarRelogio, 1000);
//Definir que a função será executada a cada 1 segundo (1000 milissegundos)
