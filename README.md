# DesignPatterns
---
## Factory Method ("Método Fábrica"):
O Factory Method é um padrão criacional de projeto que fornece uma interface para criar objetos em uma superclasse, mas permite que as subclasses alterem os tipos de objetos que serão criados.

* Prós:
Você evita acoplamentos firmes entre o criado e os produtos concretos.
Princípio da responsabilidade única. Você pode mover o código de criação do produto para um único local do programa, facilitando a manutenção do código.
Princípio aberto/fechado. Você pode introduzir novos tipos de produtos no programa sem quebrar o código cliente existente.
&nbsp;
* Contras:
O código pode se tornar mais complicado, pois você precisa introduzir muitas subclasses novas para implementar o padrão.

## Abstract Factory ("Fábrica Abstrata"):
O Abstract Factory é um padrão de projeto criacional que permite que você produza famílias de objetos relacionados sem ter que especificar suas classes conctretas.

* Prós:
Você pode ater certeza que os produtos que você obtém de uma fábrica são compatíveis entre si.
Você evita um vínculo forte entre produtos concretos e o código cliente.
Princípio de responsabilidade única.
Você pode extrair o código de criação do produto para um lugar, fazendo o código ser de fácil manutenção.
Princípio aberto/fechado. Você pode instroduzir novas variantes de produtos sem quebrar o código cliente existente.
&nbsp;
* Contras:
O código pode tornar-se mais complicado do que deveria ser, uma vez que muitas novas interfaces e classes são introduzidas junto com o padrão.

## Singleton:
O Singleton é um padrão de projeto criacional que permite a você garantir que uma calsse tenha apenas uma instância, enquanto provê um ponto de acesso global para essa instância.

* Prós:
Você pode ter certeza que uma classe só terá uma única instância. 
Você ganha um ponto de acesso global para aquela instância.
O objeto singleton é inicializado somente quando for pedido pela primeira vez.
&nbsp;
* Contras:
Viola o princípio de responsabilidade única. O padrão resolve dois problemas de uma só vez.
O padrão Singleton pode mascarar um desgin ruim por exemplo, quando os componentes do programa sabem muito sobre cada um.
O padrão requer tratamento especial em um ambiente multithread para que múltiplas threads não possam criar um objeto singleton várias vezes.
Pode ser difícil realizar testes unitários do código cliente do Singleton, porque muitos frameworks de teste dependem de herança quando produzem objetos simulados. Já o que o construtor da classe singleton é privado e sobrescrever métodos estáticos é impossível na maioria das linguagens, você terá que pensar em uma maneira criativa de simular o singleton. Ou apenas não escreva os testes, ou não use o padrão Singleton.
