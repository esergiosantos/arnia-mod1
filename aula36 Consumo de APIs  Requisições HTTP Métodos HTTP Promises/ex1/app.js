const timestamp = new Date().getTime();
const publicKey = "db2cddcc20246f9102363311c365e03b";
const privateKey = "47eff9bcf2aa664cf2ac71098741c88e198ad248";
const hash = timestamp + privateKey + publicKey;
const hashMd5 = MD5.generate(hash);

const promise = fetch(
  `https://gateway.marvel.com:443/v1/public/characters?apikey=${publicKey}&ts=${timestamp}&hash=${hashMd5}`
);

promise
  .then((respostaHttp) => respostaHttp.json())
  .then((resposta) => {
    console.log(resposta.data.results);
    const personagens = resposta.data.results;
    const content = document.querySelector("#content");

    personagens.forEach((personagem) => {
      content.innerHTML =
        content.innerHTML +
        `
                <div>
                    ${personagem.name}
                    <img class="imagem" src="${personagem.thumbnail.path}.${personagem.thumbnail.extension}">
                </div>
            `;
    });
  });