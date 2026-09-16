// Importa a biblioteca Express e também o tipo Express
// O Express será utilizado para criar o servidor web
import express from "express";
import type { Express, Request, Response } from "express";
//importar a classe Player do arquivo Player.ts
import { Player } from "./models/Player.js";
// Cria uma aplicação Express
// A função express() devolve um objeto que representa o servidor da aplicação
const app: Express = express();


app.use(express.json());

// Define a porta onde o servidor ficará disponível
// Neste caso, o servidor poderá ser acessado pela porta 8081
const PORT: number = 8081;

const player = new Player("Mazutti", 100, 1);
//rota Get para obter informaçoes sobre o player
/*quando um usuario acessar a rota "/player" via get, o servidor ira retornar suas informaçoes em formato json */

app.get("/player", (req: Request, res: Response) => {
        res.json ({
        message: "informaçoes do Player",
        player: player,
    });
});

app.post("/player/attack", (req: Request, res: Response) => {
    const attackMessage = player.attack()
    res.json({
        message: attackMessage,
    });
});

app.post("/player/damage", (req: Request, res: Response) => {
    const {damage} = req.body;
    const damageMessage = player.takeDamage (damage);
    res.json({
        message: damageMessage,
        currentHealth: player.health,
        currentLevel: player.level,
    });
});

app.post("/player/heal", (req: Request, res: Response) => {
    const {Heal} = req.body;
    const healMessage = player.heal(Heal);    res.json({
        message: healMessage,
        currentHealth: player.health,
        currentLevel: player.level,
    });
});



// Inicializa o servidor utilizando a porta definida
// O método listen() faz o servidor começar a "escutar" requisições HTTP
app.listen(PORT, () => {
console.log(`Servidor rodando em http://localhost:${PORT}`);
console.log("rotas disponiveis:");
    console.log(`GET http://localhost:${PORT}/player - obter informações do player`);
    console.log(`POST http://localhost:${PORT}/player/attack - atacar o player`);
    console.log(`POST http://localhost:${PORT}/player/damage - causar dano ao player`);
    console.log(`POST http://localhost:${PORT}/player/heal - curar o player`)
});
