//codigo específico para a API da Marvel
const timestamp = new Date().getTime();
const publicKey = "db2cddcc20246f9102363311c365e03b";
const privateKey = "47eff9bcf2aa664cf2ac71098741c88e198ad248";
const hash = timestamp + privateKey + publicKey;
const hashMd5 = MD5.generate(hash);

//REQUISIÇÃO HTTP - MÉTODO GET
const promise = fetch(`https://gateway.marvel.com:443/v1/public/characters?apikey=${publicKey}&ts=${timestamp}&hash=${hashMd5}`)

promise
    .then(respostaHttp => respostaHttp.json())
    .then(resposta => console.log(resposta))
    .catch(error => console.log(error))