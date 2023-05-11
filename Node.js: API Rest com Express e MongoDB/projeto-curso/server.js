const http = require("http");
const port = 3000;

const rotas = {
    '/': 'Curso de Node',
    '/livros': 'Entrei na pagina de livros',
    '/autores': 'Lista de autores',
    '/editora': 'pag de edirora',
    '/sobre': 'Info sobre o projeto'
}

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Contente-Type': 'text/plain'});
    res.end(rotas[req.url]);
})

server.listen(port, () =>{
    console.log(`Servidor escutando em http://localhost:${ port}`) 
})