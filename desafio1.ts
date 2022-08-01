/*
Desafio 1
// Como podemos rodar isso em um arquivo .ts sem causar erros? 


let employee = {};
employee.code = 10;
employee.name = "John";
*/

/*
Resposta
*/

interface Empregado {
    code: number,
    name: string
}

let employee = {} as Empregado;
employee.code = 10;
employee.name = "John";
