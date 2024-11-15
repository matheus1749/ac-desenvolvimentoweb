
let atleta;
let conteudo ='';

const montaCard = (atleta) => 
`

    <article>
        <h1>${atleta.nome}</h1>
        <img src='${atleta.imagem}'>
        <p>${atleta.detalhes}</p>
    </article>

    `



dados.forEach(
    (ele) => conteudo += montaCard(ele)
)

/*for(let i=0; i < dados.length; i++){
    atleta = dados[i]
     conteudo+= `

    <h1>${atleta.nome}</h1>
    <img src='${atleta.imagem}'>
    <p>${atleta.detalhes}</p>
    `
    ;
} */


container.innerHTML = conteudo;