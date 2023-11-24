class heroi{
    constructor(nome, idade, tipo){
        this.nome = nome.toLowerCase()
        this.idade = idade
        this.tipo = tipo.toLowerCase()
    }
    atacar(){
        if(this.tipo === 'mago'){
            return `o ${this.tipo} atacou usando magia.`
        }else if(this.tipo === 'espadachim'){
            return `o ${this.tipo} atacou usando espada.`
        }else if(this.tipo === 'arqueiro'){
            return `o ${this.tipo} atacou usando flecha contundente.`
        }
    }
}
let nome = prompt('Qual o seu nome, herói?')
let idade = prompt(`Seja bem-vindo, Herói ${nome}, qual a sua idade?`)
for (let i=0; i<3; i++){
    let tipo = prompt('Que tipo de herói você quer ser? Mago/Espadachim/Arqueira.')
    let heroiNovo = new heroi(nome, idade, tipo)
    console.log(heroiNovo.atacar())
}