
let listaAlunos= require ('./aluno')

console.log(listaAlunos.alunos)
listaAlunos.novoAluno('Fernanda Padua', 1,[9.4, 10, 8.5])
console.log(listaAlunos.alunos);


/* let curso = {
    nomeDoCurso: "",
    notaDeAprovacao: 0,
    faltasMaximas:  0,
    listaDeEstudantes: [aluno1,aluno2],
}

console.log(typeof curso.nomeDoCurso)
console.log(typeof curso.notaDeAprovacao)
console.log(typeof curso.faltasMaximas)
console.log(typeof curso.listaDeEstudantes)

const aluno6 = new Aluno('Fernanda Padua', 1,[9.4, 10, 8.5]); */