<h1 align="center">
    Daily Diet API - Desafio Prático #02
    <h3 align="center">Criando API REST com Node.js</h3>
</h1>

<p align="center">
  <a href="https://nodejs.org">
    <img alt="versão do Node.js" src="https://img.shields.io/badge/node.js-v20.11.0-43853D?style=flat&logo=node.js&logoColor=white&labelColor=43853D&color=5a5a5a">
  </a>

  <a href="https://github.com/gbdsantos/ignite/commits/master">
    <img alt="último commit GitHub" src="https://img.shields.io/github/last-commit/gbdsantos/ignite.svg">
  </a>
</p>

<p align="center">
    <a href="#sobre" alt="Sobre">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#business" alt="Regras de Negócio">Regras de Negócio</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#comandos-executados" alt="Commands executed">Comandos executados</a>
</p>

## Iniciando

```bash
# Executar aplicação
npm run dev
```

## Sobre

Neste desafio deve ser desenvolvido uma API para controle de dieta diária.

<br>

## Regras de Negócio e Rotas (endpoints) <a name="business"></a>

- [ ] Deve ser possível criar um usuário
- [ ] Deve ser possível identificar o usuário entre as requisições
- [ ] Deve ser possível registrar uma refeição feita, com as seguintes informações:
    *As refeições devem ser relacionadas a um usuário.*
    - [ ] Nome
    - [ ] Descrição
    - [ ] Data e Hora
    - [ ] Está dentro ou não da dieta
- [ ] Deve ser possível editar uma refeição, podendo alterar todos os dados acima
- [ ] Deve ser possível apagar uma refeição
- [ ] Deve ser possível listar todas as refeições de um usuário
- [ ] Deve ser possível visualizar uma única refeição
- [ ] Deve ser possível recuperar as métricas de um usuário
    - [ ] Quantidade total de refeições registradas
    - [ ] Quantidade total de refeições dentro da dieta
    - [ ] Quantidade total de refeições fora da dieta
    - [ ] Melhor sequência de refeições dentro da dieta
- [ ] O usuário só pode visualizar, editar e apagar as refeições o qual ele criou

**Rotas:**

<details>
  <summary>POST /users</summary>

- [ ] Deve ser possível criar um usuário
</details>

<br>

## Milha extra

<br>

## Comandos executados

```bash
# Iniciando projeto
 npm init -y

# Instalar TypeScript, @types/node, tsx e tsup
npm install typescript @types/node tsx tsup -D

# Incializar TypeScript
npx tsc --init

# Instalar Fastify, dotenv, knex e zod
npm install fastify dotenv knex zod

# Instalar eslint
npm install eslint -D

# Inicializar eslint
npx eslint --init
```

<br>

---

Feito com ♥ por **Guilherme Bezerra** 👋 [Entrar em contato!](https://www.linkedin.com/in/gbdsantos "LinkedIn - Guilherme Bezerra")
