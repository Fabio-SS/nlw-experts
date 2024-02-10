const perguntas = [
    {
      pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
      respostas: ["variable x = 10;", "let x = 10;", "const x = 10;"],
      correta: 1,
    },
    {
      pergunta: "O que o operador '===' faz em JavaScript?",
      respostas: [
        "Compara dois valores sem verificar o tipo de dado.",
        "Compara dois valores e verifica se são do mesmo tipo e valor.",
        "Atribui um valor a uma variável.",
      ],
      correta: 1,
    },
    {
      pergunta: "Qual é a forma correta de comentar uma linha em JavaScript?",
      respostas: [
        "/* Este é um comentário */",
        "// Este é um comentário",
        "<!-- Este é um comentário -->",
      ],
      correta: 1,
    },
    {
      pergunta: "O que o método 'querySelector' faz em JavaScript?",
      respostas: [
        "Seleciona um elemento do HTML pelo seu ID.",
        "Seleciona um elemento do HTML pelo seu nome de classe.",
        "Seleciona um elemento do HTML pelo seu nome de tag.",
      ],
      correta: 0,
    },
    {
      pergunta: "O que é um array em JavaScript?",
      respostas: [
        "Um tipo de dado que armazena apenas um valor por vez.",
        "Uma coleção ordenada de valores.",
        "Um elemento de estilo para manipular o layout de uma página web.",
      ],
      correta: 1,
    },
    {
      pergunta:
        "Qual é a maneira correta de escrever um comentário de uma linha em JavaScript?",
      respostas: [
        "/* Este é um comentário de uma linha */",
        "// Este é um comentário de uma linha",
        "<!-- Este é um comentário de uma linha -->",
      ],
      correta: 1,
    },
    {
      pergunta: "O que o operador '===' faz em JavaScript?",
      respostas: [
        "Compara dois valores sem verificar o tipo de dado.",
        "Compara dois valores e verifica se são do mesmo tipo e valor.",
        "Realiza uma atribuição de valor.",
      ],
      correta: 1,
    },
    {
      pergunta:
        "Qual método é utilizado para adicionar um elemento ao final de um array em JavaScript?",
      respostas: ["push()", "unshift()", "append()"],
      correta: 0,
    },
    {
      pergunta: "O que é o DOM em JavaScript?",
      respostas: [
        "Um método para selecionar elementos HTML.",
        "Uma linguagem de programação.",
        "Uma interface de programação que representa a estrutura de uma página web como um objeto.",
      ],
      correta: 2,
    },
    {
      pergunta: "O que o método 'addEventListener' faz em JavaScript?",
      respostas: [
        "Adiciona uma função para ser executada quando um evento ocorre em um elemento HTML.",
        "Remove um elemento do HTML.",
        "Altera o estilo de um elemento HTML.",
      ],
      correta: 0,
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  // loop ou laço de repetição
  for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for (let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
  
        corretas.delete(item)
        if (estaCorreta) {
          corretas.add(item)
        }
  
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
      quizItem.querySelector('dl').appendChild(dt)
    }
  
  
    quizItem.querySelector('dl dt').remove()
  
  
    // coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }