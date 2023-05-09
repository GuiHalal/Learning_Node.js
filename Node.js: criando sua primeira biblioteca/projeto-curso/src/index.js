import fs from 'fs';
import chalk from 'chalk';


function extraiLinks(texto){
    const regex = /\[([^\[\]]*?)\]\((https?:\/\/[^\s#.].[^\s]*)\)/gm; 

// Alura:
// \[([^\[\]]*?)\]\((https?:\/\/[^\s#.].[^\s]*)\)
// GEPETO
// \[([^\]]+)\]\((.*?)\) 

    const capturas = [...texto.matchAll(regex)];

    const resultados = 
        capturas.map(captura=> ({[captura[1]]: captura[2]}));
// engloba entre parenteses pra informar pro js que isto é um objeto. 
//    console.log(resultados);
    return resultados.length !==0 ? resultados : 'não há links no arquivo';
}

function trataErro(erro){
   throw new Error(chalk.red(erro.code, 'Não há arquivo no diretório')) 
}

// async/await

async function pegaArquivo(caminhoDoArquivo){
    try{
        const encoding = 'utf-8';
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
        return extraiLinks(texto)
    } catch(erro){
        trataErro(erro)
    }
}

// promises com then()

// function pegaArquivo(caminhoDoArquivo){
//     const encoding = 'utf-8';
//     fs.promises
//         .readFile(caminhoDoArquivo, encoding)
//         .then((texto)=> console.log(chalk.green(texto)))
//         .catch((erro)=> trataErro(erro))
//         //ou .catch(trataErro)
// }

export default pegaArquivo;
