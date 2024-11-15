# Documentação do Projeto "Digital Clock"

## Descrição Geral
O projeto **Digital Clock** é um relógio digital simples, criado com HTML, CSS e JavaScript, que exibe a hora atual com atualização em tempo real. O relógio apresenta um estilo futurista com um efeito de sombra e muda de cor ao passar o mouse sobre ele.

## Estrutura de Arquivos
O projeto é composto pelos seguintes arquivos:

- **index.html**: Arquivo HTML principal que estrutura o relógio.
- **style.css**: Arquivo CSS que estiliza o relógio, incluindo layout, cores e animações.
- **script.js**: Arquivo JavaScript que atualiza a hora a cada segundo.

## Descrição dos Arquivos

### 1. index.html
Define a estrutura do relógio digital:
- Inclui uma `<div class="clock">` que contém as divisões para horas, minutos e segundos.
- Cada divisão (`<div id="hours">`, `<div id="minutes">`, `<div id="seconds">`) é inicializada com "00" e atualizada dinamicamente.
- Utiliza `<span>:</span>` para separar visualmente as horas, minutos e segundos&#8203;:contentReference[oaicite:0]{index=0}.

### 2. style.css
Define o estilo visual do relógio:
- Centraliza o relógio na tela e estiliza o contorno, cor do texto e efeitos de sombra.
- A classe `.clock:hover` altera a cor e sombra do relógio ao passar o mouse, criando uma animação de transição suave.
- Utiliza a fonte "Courier New" para dar um estilo digital retrô ao relógio&#8203;:contentReference[oaicite:1]{index=1}.

### 3. script.js
Contém as funções JavaScript responsáveis pela atualização do relógio:
- **updateClock()**: Função que obtém a hora atual e a exibe no formato HH:MM:SS.
    - Usa `data.getHours()`, `data.getMinutes()` e `data.getSeconds()` para obter horas, minutos e segundos.
    - Aplica um operador ternário para exibir dois dígitos sempre (ex.: "09" em vez de "9").
    - Atualiza os elementos HTML com `document.getElementById` para exibir a hora em tempo real.
- **setInterval(updateClock, 1000)**: Chama a função `updateClock` a cada segundo (1000 milissegundos), garantindo que o relógio seja atualizado em tempo real&#8203;:contentReference[oaicite:2]{index=2}.

## Funcionalidades

- **Exibir a hora em tempo real**: Atualiza o relógio digital automaticamente a cada segundo, refletindo o horário atual.
- **Animação ao passar o mouse**: Aplica uma sombra e mudança de cor ao passar o mouse, melhorando a interatividade visual.

## Tecnologias Utilizadas
- **HTML**: Estrutura do relógio digital e dos separadores visuais.
- **CSS**: Estilos para layout centralizado, cores e animações visuais.
- **JavaScript**: Função para atualizar o horário em tempo real.

---

Este projeto serve como uma boa introdução à manipulação de DOM em JavaScript, além de ser um exemplo interessante de como CSS e JavaScript podem ser combinados para criar uma interface dinâmica e visualmente atraente.
