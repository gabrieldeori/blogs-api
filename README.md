# Habilidades 

Nesse projeto, foi construir um back-end usando `ORM` com o pacote `sequelize` do `npm`, e será capaz de:
 - Criar e associar tabelas usando `models` do `sequelize`
 - Construir endpoints para consumir os models que criar 
 - Fazer um `CRUD` com o `ORM`

# Entregáveis

Para entregar o seu projeto você deverá criar um Pull Request neste repositório.

Lembre-se que você pode consultar nosso conteúdo sobre [Git & GitHub](https://course.betrybe.com/intro/git/) sempre que precisar!

---

## O que deverá ser desenvolvido

Foi arquiteturarado e desenvolvido uma API de um CRUD posts de blog (com o Sequelize). Começando pela API, foi desenvolvido alguns endpoints (seguindo os princípios do REST) que estarão conectados ao seu banco de dados.

Primeiro, foi criado uma tabela para os usuários que desejam se cadastrar na aplicação. Após isso, foi criado também uma tabela de Categorias para seus Posts e por fim a tabela de Posts.

---

## Desenvolvimento

Foi desenvolvida uma aplicação em `Node.js` usando o pacote `sequelize` para fazer um `CRUD` de posts.

Para fazer um post é necessário usuário e login, portanto foi trabalhada a **relação entre** `user` e `post`. Também foi necessário a utilização de categorias para seus posts, assim trabalhando a relação de `posts` para `categorias` e de `categorias` para `posts`.
 
### Data de Entrega

  - Serão `3` dias de projeto.

  - Data de entrega do projeto: `17/01/2022 - 14:00h`.

---

# Instruções para iniciar o projeto:

1. Clone o repositório
  * `git clone git@github.com:gabrieldeori/blogs-api.git`.
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd blogs-api`

2. Instale as dependências
  * `npm install`
