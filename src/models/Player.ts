/*
a palavra-chave "export" é usada para exportar a classe player,
permitindo que ela seja importada e ultilizada para outros arquivos do projeto.
a palavras-chave "class" é usada para definir uma classe em TypeScript.
*/
export class Player {
    /*a palavra-chave "public" é usada para defiir propriedades públicas da classe,]
    que podem ser acessadas de fora da classe.*/
    public name: string; // nome do player (texto)
    public health: number;// a saúde do player (número)
    public level: number;// nível do player (número)

    //CONSTRUTOR DA CLASSE PLAYER
    //O Construtor é um método especial que é chamado quando uma nova instância dqa classe é criada.
    constructor(name: string, health: number = 100, level: number =1) {
        /* A palavra-chave "this" é usada para se referir à instância atual da classe. Ou seja, "Pegue o atributo 'health' da classe player
         e atriua o valor de 'health'= 100 a ele" */
        this.name = name; //inicializa o nome do player
        this.health = health; //inicializa a saúde do player
        this.level = level; //inicializa o nivel do player
    }

    //MÉTODOS DA CLASSE PLAYER
    /* Metodos são funções que permitem a uma classe e podem ser chamada de instância dessa classe. */
    //o método "attack" é usada para atacar outro player, reduzindo sua saúde.
    public attack(): string {
        //calcula o dano com base no nível do player
        const damage = this.level * 10;
        /* a palavra-chave "return" é usada para retornar um valor de uma função ou método.*/
        return`o player ${this.name} atacou e causou ${damage} de dano!`;
    }

    /*o método "takeDamage" é usado para receber dano de outro player,
    reduzindo a súde do player*/
    public takeDamage(damage: number): string {
        this.health -= damage;
        //reduz a saúde do player caiu para 0 ou menos
        if (this.health <= 0) {
            this.health = 0; 
            return `o player ${this.name} foi derrotado!`;
        };
        return `o player ${this.name} recebeu ${damage} de dano e agora tem ${this.health} de saúde.`;
    }

        public heal(heal: number): string {
        this.health += heal; //aumenta a saúde do player
        if (this.health = 100) {
            this.health = 100; 
            return `o player ${this.name} está com a saúde completa!`;
        }
        return `o player ${this.name} recebeu ${heal} de saúde e agora tem ${this.health} de saúde.`;
    }

}
