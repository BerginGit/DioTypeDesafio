/*
Desafio 2
// Como podemos melhorar o esse código usando TS? 

let pessoa1 = {};
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = "atriz"

let pessoa2 = {}
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = "Padeiro";

let pessoa3 = {
    nome: "laura",
    idade: "32",
    profissao: "Atriz"
};

let pessoa4 = {
    nome = "carlos",
    idade = 19,
    profissao = "padeiro"
}

/*
Resposta
*/

interface Pessoa {
    nome: string,
    idade: Number,
    profissao: string   
}

let pessoa1 = {} as Pessoa;
pessoa1.nome = "Maria";
pessoa1.idade = 29;
pessoa1.profissao = "Atriz"

let pessoa2 = {} as Pessoa
pessoa2.nome = "Roberto";
pessoa2.idade = 19;
pessoa2.profissao = "Padeiro";

let pessoa3 = {} as Pessoa
pessoa3.nome = "Laura";
pessoa3.idade = 32;
pessoa3.profissao = "Atriz";

let pessoa4 = {} as Pessoa
pessoa4.nome = "Carlos";
pessoa4.idade = 19;
pessoa4.profissao = "Padeiro";
