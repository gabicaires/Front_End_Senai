var aluno = {nome: "Gabi", idade: 21, dirige: true}
var alunos = [
    {nome: "Erivelton", idade: 25, dirige: true, altura: 1.80, peso: 78},
    {nome: "Arthur", idade: 18, dirige: false, altura: 1.75, peso: 70},
    {nome: "Gabriel", idade: 20, dirige: false, altura: 1.75, peso: 75},
    {nome: "Matheus", idade: 18, dirige: true, altura: 1.79, peso: 65},
]

// for(let i = 0; i < alunos.length; i++){
//     console.log(`${i + 1} - ${alunos[i].nome}`)
// }

for (const aluno in alunos) {
    console.log(alunos[aluno].nome)
}

for (const aluno of alunos) {
    console.log(`Nome: ${aluno.nome} Idade: ${aluno.idade}`)
}
