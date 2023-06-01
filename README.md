# Student Manager System

## **Requisitos Funcionais**

|      Atividade      |                                                Descrição                                                |
| :-----------------: | :-----------------------------------------------------------------------------------------------------: |
| Cadastro de alunos  |         **(Tela 2)** Os campos necessários: Nome, Data De Nascimento, Matrícula, Status, E-mail         |
| Listagem de alunos  |                  **(Tela 1)** Similar a uma tabela onde cada linha representa um aluno                  |
| Alteração de alunos |        **(Tela 2)** Ao clicar em alterar deve abrir a Tela 2 preenchida com os dados dos alunos         |
| Exclusão de alunos  | **(Tela 1)** Ao clicar no botão excluir, o aluno é excluído e a linha deve ser removida da visualização |

## **Requisitos Não-Funcionais**

|     Atividade     |     Descrição      |
| :---------------: | :----------------: |
|    Arquitetura    | Clean Architecture |
| Framework Backend |      Express       |
|  Template Engine  |        EJS         |

## **Alguns comandos pro desenvolvimento**

```bash
$ npm i
$ npx sequelize-cli init
$ nano example.env
$ nano config/config.json
$ npx sequelize-cli db:create
$ npx sequelize-cli db:migrate
```

Ou pode utilizar o Makefile, se estiver com GNU Make instalado na sua máquina, com os seguintes
comandos na raiz do projeto:

```bash
$ make 1-config
$ make 2-config
$ make run
```

Caso precise, crie a sua migrate com o comando:

```bash
$ npx sequelize-cli migration:generate --name <name-of-migrate>
```

## **Tasks**

Criar duas telas para representar as operações básicas de um CRUD (Create, Read, Update, Delete) de alunos.
Os campos necessários: Nome, Data De Nascimento, Matrícula, Status, E-mail

Tela 1:

- [ ] READ: Listagem de todos os alunos. Similar a uma tabela onde cada linha representa um aluno.
      No final desta linha deve ter 2 botões, para alterar e excluir o aluno.

- [ ] DELETE: Ao clicar no botão excluir, o aluno é excluído e a linha deve ser removida da visualização.

- [ ] UPDATE: Ao clicar em alterar deve abrir a Tela 2 preenchida com os dados dos alunos.

- [ ] CREATE: Em cima, no canto superior direito, deve ter um botão para Cadastrar Novo Aluno que deve abrir a Tela 2 com os campos não preenchidos.

Tela 2: Cadastro e Alteração de Aluno

- [ ] Um formulário com os campos de aluno para serem preenchidos ou alterados.
- [ ] O formulário deve ter dois botões, Salvar e Cancelar.
- [ ] Ao clicar em Salvar um novo aluno deve ser inserido ou atualizado, e
- [ ] depois o sistema deve ir para a Tela 1.
- [ ] Ao clicar em Cancelar o sistema deve ir para Tela 1, mas sem salvar o aluno.

## Referências

- [Rocketseat](https://www.youtube.com/watch?v=mxiRCcnsKDw)
- [Rocketseat](https://www.youtube.com/watch?v=0mYq5LrQN1s)
