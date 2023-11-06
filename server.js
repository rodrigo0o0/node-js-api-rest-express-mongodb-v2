import "dotenv/config";
import app from "./src/app.js"

const PORT = 3000;


const rotas = {
    "/": "Curso de Express Api.js",
    "/livros" : "Entrei na rota Livros",
    "/autores" : "Entrei na rota Autores",
}

// const server = http.createServer((req, res) => {

//     res.writeHead(200, { "Content-Type": "text/plain" });
//     console.log("Rota : " + req.url);
//     console.log("Rota encontrada : " + rotas[req.url]);
//     res.end(rotas[req.url]);

// });


app.listen(PORT, () => {
    console.log("Servidor escutando!");
});