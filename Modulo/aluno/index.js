/*let aluno = {
    nome: "",
    quantidadeFaltas: 0,
    notas: [0],
    calcularMedia: function(){
        let calc=0;
        for(i=0; i<this.notas.length; i++){
            calc += this.notas[i];
        }
        return console.log("A média do aluno é de: " + calc/i)
    },
    faltas: function(){
        this.quantidadeFaltas++
        return
    }
}*/
 
//Passo 1- Crie um objeto aluno que tenha como atributos: nome (string), quantidade de faltas (number) e notas (array de números). Crie um construtor para ele e importe-o como o módulo aluno.

    function Aluno(nomeAluno, faltasAluno, notasAluno){
    this.nome = nomeAluno;
    this.quantidadeFaltas = faltasAluno;
    this.notas = notasAluno;

    // Passo 2- Nosso objeto aluno terá o método calcularMedia que retorna a média de suas notas. Também terá um método chamado faltas, que simplesmente aumenta o número de faltas em 1.

    this.calcularMedia = function(){
        let i=0;
        let calc=0;
        let media= 0;
        for(i=0; i<this.notas.length; i++){
            calc += this.notas[i];
        }
        media =  calc/i;
        return media
    },
    this.faltas = function(){
        this.quantidadeFaltas++;
        return this.quantidadeFaltas;
    }
    }

    const aluno1 = new Aluno('Lennon Martins', 0, [7, 7, 7]);
    const aluno2 = new Aluno('Maruan Verardi', 5,[8, 9, 10]);
    const aluno3 = new Aluno('Esther Beatriz', 2, [5, 7, 9]);
    const aluno4 = new Aluno('Lucas Silva', 1,[10, 9, 7]);
    const aluno5 = new Aluno('Cristina Laranjeira', 2, [5, 9, 7]);
    
    module.exports={
        novoAluno: function(nomeAluno, faltasAluno, notasAluno){
            const aluno = new Aluno(nomeAluno, faltasAluno, notasAluno);
            this.alunos.push(aluno)
        },

        alunos: [aluno1,aluno2,aluno3,aluno4,aluno5],
    }
    
console.log(this.alunos)
console.log(aluno1)
console.log(aluno2)
console.log("A média desse aluno é de: " + aluno5.calcularMedia())
console.log("O numero final de faltas é de: " + aluno1.faltas()) 

//Passo 3 - Em um arquivo diferente, crie o objeto literal curso que tem como atributos: nome do curso (string), nota de aprovação (number), faltas máximas (number) e uma lista de estudantes (um array composto pelos alunos criados no passo 1).

let curso = {
    nomeDoCurso: "",
    notaDeAprovacao: 7,
    faltasMaximas:  2,
    listaDeEstudantes: [aluno1,aluno2],
    situacao: function(aluno){
        //let notaDeAprovacao = 7;
        let resultado = 0;
        let totalFaltas = aluno.quantidadeFaltas;
        switch (totalFaltas) {
            case 0:
                resultado = (aluno.calcularMedia() >= this.notaDeAprovacao)    
                break;
        
            case 1:
                resultado = (aluno.calcularMedia() >= this.notaDeAprovacao)    
                break;
        
            case 2:
                resultado = (aluno.calcularMedia()>(this.notaDeAprovacao+(this.notaDeAprovacao*0.10)))        
                break;
        
            default:
                resultado = false;
        }
        return resultado;
    },
    listaFinal: function(){
        let arrayNota =[];
        let i =0;
        let listaResultado = this.listaDeEstudantes;
        for(i=0;i<(listaResultado.length);i++){
            let resultadoFinal = this.situacao(listaResultado[i]);
            arrayNota.push(resultadoFinal)
        }
        return arrayNota;
    }

}
console.log(curso)
console.log(curso.listaFinal())
//console.log(aluno1)
console.log(curso.situacao(aluno1))
console.log(curso.situacao(aluno2))


/* console.log(typeof curso.nomeDoCurso)
console.log(typeof curso.notaDeAprovacao)
console.log(typeof curso.faltasMaximas)
console.log(typeof curso.listaDeEstudantes)
console.log(curso.listaDeEstudantes) */

