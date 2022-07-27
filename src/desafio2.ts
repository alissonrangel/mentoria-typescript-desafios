// Como podemos melhorar o esse código usando TS? 

interface Profissao {
  nome: string;
  idade: number | string;
  profissao: "Atriz" | "Padeiro";
}

let pessoa1 = {} as Profissao;
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = "Atriz"

let pessoa2 = {} as Profissao
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = "Padeiro";

let pessoa3: Profissao = {
    nome: "laura",
    idade: "32",
    profissao: "Atriz"
};

let pessoa4: Profissao = {
    nome: "carlos",
    idade: 19,
    profissao: "Padeiro"
}