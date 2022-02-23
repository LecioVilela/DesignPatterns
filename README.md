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

## Abstract Factory ("Método Abstrato"):
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