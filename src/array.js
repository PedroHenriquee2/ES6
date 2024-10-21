const alunos = [
    {nome: "João", nota: 8.5},
    {nome: "Maria", nota: 9.0},
    {nome: "Pedro", nota: 10},
    {nome: "Jeanette", nota: 8.8},
    {nome: "Ayla", nota: 5.0}
];

function filtrarAlunosAprovados(alunos) {
    return alunos.filter(aluno => aluno.nota >=6);
}

const alunosAprovados = filtrarAlunosAprovados(alunos);
console.log(alunosAprovados);