// BUSCAR LINKS

export async function getLinksSave(key){

    const myLinks = await localStorage.getItem(key);

    //se linksSaves estiver vazio, inicia com array vazio.
    let linksSaves = JSON.parse(myLinks) || [];

    return linksSaves;
}

// SALVAR UM LINK NO  LOCAL STORAGE

export async function saveLink(key, newLink){
    let linkStored = await getLinksSave(key);

    //se já tiver um link salvo com algum ID eu nao vou duplicar
    const hasLink = linkStored.some(link => link.id === newLink.id); //devolve true ou false

    if(hasLink){
        console.log('esse link já existe');
        return
    }

    //ADICIONAR UM NOVO LINK NA LISTA
    linkStored.push(newLink);
    await localStorage.setItem(key, JSON.stringify(linkStored));
    console.log('link salvo com sucesso')


}



// DELETAR ALGUM LINK SALVO

