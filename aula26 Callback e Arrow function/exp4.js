const io = require("../io/io")

/** Criar uma função que recebe os dados de um usuário e posteriormente utilizar uma segunda função */

const darBoasVindas = (nome) => {
    io.write(`Olá ${nome}`)
}

/** Imagina que a função "receberUsuario" [NÂO TEM] acesso direto à função "darBoasVindas" */

const receberUsuario = (fnBoasVindas) => {
    io.write("Informe o seu nome:")
    const nome = io.read()
    // darBoasVindas(nome) -> acesso direto
    fnBoasVindas(nome) //chamado ela pelo apelido
}

receberUsuario(darBoasVindas)