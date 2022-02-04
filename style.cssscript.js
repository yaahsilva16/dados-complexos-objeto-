// Crie um objeto que receba ao menos três propriedades sobre você.
let sobreMim= {
    nome: "Yasmin",
    sobrenome: "silva",
    idade: 16
}

console.log (sobreMim)
// Adicione uma nova propriedade sem alterar seu objeto inicial.
sobreMim.cor="rosa"

// Remova uma propriedade desse objeto.
delete sobreMim.idade

//Mostre no console todas as propriedades desse objeto.
console.log (sobreMim)

// Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 
//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
//Na propriedade amigos, adicione ao menos 4 itens.
let cadastro= [{
    nome:"Rita",
    idade: 45,
    telefone: 2197264789,
    amigos:["Jorge", "Maria","José","Christina"]

},
{
  nome: "Márcio",
  idade: 18,
  telefone: 2138449489,
  amigos: ["Juliana","Aline","Mayara","Liliane"]

},
{
  nome: "tatyane",
  idade: 26,
  telefone: 2136400587,
  amigos: ["Fabiana","Cauã","Patrck","Lorrany"]
},
{
 nome: "patrícia",
 idade: 37,
 telefone: 21364065339,
 amigos: ["André","Andresa","Walter","Rosemere"]
}
]

// Mostre no console o nome de um amigo de cada lista.
console.log (cadastro[0].amigos)
console.log (cadastro[1].amigos)
console.log (cadastro[3].amigos)
console.log (cadastro[2].amigos)
