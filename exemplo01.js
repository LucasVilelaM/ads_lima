class Livro {
    constructor(pNome, pPreco){
        this.Nome = pNome;
        this.Preco =pPreco
    }
    
    get Nome() {return this.Nome;}
    set Nome(pNome) {this.nome = pNome;}
    }


var obj_livro1 = new Livro("Duna");
console.log("Nome do livro: " + obj_livro1.nome)