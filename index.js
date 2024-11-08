class Heroi {  
    constructor(nome, idade, tipo) {  
        this.nome = nome;  
        this.idade = idade;  
        this.tipo = tipo;  
    }  

    atacar() {  
        let ataque;  
        switch (this.tipo) {  
            case "Mago Negro":  
                ataque = "Magia negra";  
                break;  
             
            case "Monge a prova de balada":  
                ataque = "golpes com o seu cajado ";  
                break;  
            
           
        }  
        const mensagem = `o ${this.tipo} atacou usando ${ataque}`;  
        console.log(mensagem);  
    }  
}  

// Exemplo de uso  
const heroi1 = new Heroi("Papus", 300, "Mago Negro");  
heroi1.atacar();  // Saída: O Mago Negro atacou usando magia negra  

 

const heroi3 = new Heroi("Lee", 200, "Monge a prova de balada");  
heroi3.atacar();  // Saída: o Monge a prova de balada atacou golpes com o seu cajado  

  