const prompt = require('prompt-sync')({sigint: true});

let alunos = [
    // Estrutura: [ID, Nome, Idade, Curso]
    [1, "João Silva", 20, "Ciência da Computação"],
    [2, "Maria Oliveira", 22, "Engenharia de Software"],
    [3, "Carlos Souza", 19, "Sistemas de Informação"],
    [4, "Ana Ferreira", 21, "Matemática Computacional"],
    [5, "Luiz Costa", 23, "Física"]
];

console.log(alunos)

function adicionarAluno(id, nome, idade, curso) {
    alunos.push([id, nome, idade, curso]);
}

removerAluno = function(id) {
    let index = encontrarIndexPorId(id);
    if (index !== -1) {
        alunos.splice(index, 1);
    } else {
        console.log("Aluno não encontrado.");
    }
}

encontrarIndexPorId = (id) => {
    for (let i = 0; i < alunos.length; i++) {
        if (alunos[i][0] === id) {
            return i;
        }
    }
    return -1; // Não encontrado
}

function ordenarAlunosPorNome(desc = false) {
    alunos.sort(function(a, b) {
        if (a[1] < b[1]) return desc ? 1 : -1;
        if (a[1] > b[1]) return desc ? -1 : 1;
        return 0;
    });
}

function ordenarAlunosPorNome_BubleSort(desc = false) {
    let n = alunos.length;
    let trocado;
    do {
        trocado = false;
        for (let i = 1; i < n; i++) {
            // Comparação para ordem ascendente ou descendente
            if ((desc && alunos[i - 1][1] < alunos[i][1]) || (!desc && alunos[i - 1][1] > alunos[i][1])) {
                // Troca os elementos de lugar
                let temp = alunos[i - 1];
                alunos[i - 1] = alunos[i];
                alunos[i] = temp;
                trocado = true;
            }
        }
    } while (trocado);
}

function lerAlunoPorId(id) {
    let aluno = alunos.find(aluno => aluno[0] === id);
    if (aluno) {
        console.log(`ID: ${aluno[0]}, Nome: ${aluno[1]}, Idade: ${aluno[2]}, Curso: ${aluno[3]}`);
    } else {
        console.log("Aluno não encontrado.");
    }
}

function lerAlunoPorId_For(id) {
    let alunoEncontrado = null;

    // Loop através do array de alunos
    for (let i = 0; i < alunos.length; i++) {
        if (alunos[i][0] === id) {
            alunoEncontrado = alunos[i];
            break; // Interrompe o loop uma vez que o aluno é encontrado
        }
    }

    // Verifica se um aluno foi encontrado
    if (alunoEncontrado) {
        console.log(`ID: ${alunoEncontrado[0]}, Nome: ${alunoEncontrado[1]}, Idade: ${alunoEncontrado[2]}, Curso: ${alunoEncontrado[3]}`);
    } else {
        console.log("Aluno não encontrado.");
    }
}


function mostrarAlunos() {
    console.log("##############Lista de Alunos:");
    alunos.forEach(aluno => {
        console.log(`ID: ${aluno[0]}, Nome: ${aluno[1]}, Idade: ${aluno[2]}, Curso: ${aluno[3]}`);
    });
}

function mostrarAlunos_for() {
    console.log("##############Lista de Alunos:");
    for (let i = 0; i < alunos.length; i++) {
        console.log(`ID: ${alunos[i][0]}, Nome: ${alunos[i][1]}, Idade: ${alunos[i][2]}, Curso: ${alunos[i][3]}`);
    }
}


// Menu interativo
function menu() {
    let opcao;
    do {
        console.log("\nMenu de Gerenciamento de Alunos:");
        console.log("1 - Ler alunos");
        console.log("2 - Ler alunos desc");
        console.log("3 - Ler alunos asc");
        console.log("4 - Ler pelo ID do aluno");
        console.log("5 - Criar aluno");
        console.log("6 - Excluir um aluno");
        console.log("0 - Encerrar o sistema");
        opcao = parseInt(prompt("Escolha uma opção: "));
    
        switch(opcao) {
            case 1:
                console.log("A");
                mostrarAlunos_for();
                break;
            case 2:
                console.log("B");
                ordenarAlunosPorNome(true);
                mostrarAlunos_for();
                break;
            case 3:
                console.log("C");
                ordenarAlunosPorNome();
                mostrarAlunos_for();
                break;
            case 4:
                let idConsulta = parseInt(prompt("Digite o ID do aluno: "));
                lerAlunoPorId(idConsulta);
                break;
            case 5:
                let id = parseInt(prompt("ID do aluno: "));
                let nome = prompt("Nome do aluno: ");
                let idade = parseInt(prompt("Idade do aluno: "));
                let curso = prompt("Curso do aluno: ");
                adicionarAluno(id, nome, idade, curso);
                break;
            case 6:
                let idRemover = parseInt(prompt("Digite o ID do aluno a ser removido: "));
                removerAluno(idRemover);
                break;
            case 0:
                console.log("Encerrando o sistema...");
                break;
            default:
                console.log("Opção inválida.");
        }
    } while (opcao !== 0);
}

menu();
