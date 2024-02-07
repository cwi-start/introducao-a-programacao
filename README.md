# Roteiro para Cadastro de Alunos em JavaScript
Este roteiro explica como gerenciar um cadastro de alunos usando JavaScript e a biblioteca `prompt-sync` para interação com o usuário através do terminal.

## Pré-requisitos
- Node.js instalado em seu sistema.
- Conhecimento básico de JavaScript.

## Configuração Inicial
1. **Instalação do `prompt-sync`**: Para interagir com o usuário através do terminal, precisamos da biblioteca prompt-sync. Instale-a executando o seguinte comando no terminal:
```bash
npm install prompt-sync
```
2. **Estrutura do Script:**
O script contém uma lista de alunos inicializada com alguns dados e funções para manipular esses dados, incluindo adicionar, remover, e listar alunos, além de ordená-los por nome.

## Entendendo o Código
### Inicialização dos Dados
A lista de alunos é inicializada com alguns registros para começar:

```javascript
let alunos = [
    [1, "João Silva", 20, "Ciência da Computação"],
    [2, "Maria Oliveira", 22, "Engenharia de Software"],
    ...
];
```
### Funções de Manipulação

- **Adicionar Aluno:**

```javascript
function adicionarAluno(id, nome, idade, curso) {
    alunos.push([id, nome, idade, curso]);
}
```
- **Remover Aluno:**

```javascript
function removerAluno(id) {
    let index = encontrarIndexPorId(id);
    if (index !== -1) {
        alunos.splice(index, 1);
    } else {
        console.log("Aluno não encontrado.");
    }
}
```

- **Encontrar Index por ID:**

```javascript
function encontrarIndexPorId(id) {
    for (let i = 0; i < alunos.length; i++) {
        if (alunos[i][0] === id) {
            return i;
        }
    }
    return -1;
}
```

- **Ordenar Alunos por Nome:**

```javascript
function ordenarAlunosPorNome(desc = false) {
    alunos.sort(function(a, b) {
        ...
    });
}
```

- **Listar Alunos:**

```javascript
function mostrarAlunos() {
    alunos.forEach(aluno => {
        console.log(`ID: ${aluno[0]}, Nome: ${aluno[1]}, Idade: ${aluno[2]}, Curso: ${aluno[3]}`);
    });
}
```

### Menu Interativo

O script apresenta um menu interativo que permite ao usuário escolher entre várias opções para gerenciar o cadastro de alunos.

```javascript	
function menu() {
    let opcao;
    do {
        console.log("\nMenu de Gerenciamento de Alunos:");
        ...
        opcao = parseInt(prompt("Escolha uma opção: "));
        switch(opcao) {
            case 1: mostrarAlunos(); break;
            ...
            case 0: console.log("Encerrando o sistema..."); break;
            default: console.log("Opção inválida.");
        }
    } while (opcao !== 0);
}
```

## Executando o Script

Para rodar o script:

1. Salve o código em um arquivo `.js`, por exemplo, `cadastroAlunos.js`.
2. Abra o terminal e navegue até o diretório onde o arquivo foi salvo.
3. Execute o script com o comando `node cadastroAlunos.js`.
4. Siga as instruções no menu para gerenciar o cadastro de alunos.

## Conclusão

Este roteiro detalha como implementar e utilizar um sistema simples de cadastro de alunos em JavaScript, utilizando a biblioteca `prompt-sync` para interação com o usuário. Com funções para adicionar, remover, listar e ordenar alunos, além de um menu interativo, este exemplo demonstra conceitos básicos de manipulação de dados e interação com o usuário em aplicações Node.js.