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