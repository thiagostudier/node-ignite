# Fundamentos do Node.js - Projeto de Fluxo de Deliveries

Este projeto é parte do curso "Fundamentos do Node.js" oferecido pela Rockeseat. Nele, desenvolvemos um sistema de fluxo de deliveries utilizando Prisma e Express. A seguir, você encontrará instruções sobre como configurar e executar o projeto.

## Pré-requisitos

Antes de começar, certifique-se de ter o Node.js e o Yarn instalados em seu ambiente de desenvolvimento.

## Configuração do Projeto

1. **Inicialização do Projeto:**

```bash
 yarn init -y
```

2. **Instalação de Dependências:**

```bash
  yarn add typescript prisma ts-node-dev @types/express @types/jsonwebtoken @types/bcrypt -D
  yarn add express bcrypt jsonwebtoken @prisma/client
```

3. **Configuração do TypeScript:**

```bash
  yarn tsc --init
```

4. **Configuração do Prisma:**

```bash
  yarn prisma init
```

5. **Execução das Migrações do Banco de Dados:**

```bash
  yarn prisma migrate dev
```

6. **Formatação das Migrações do Prisma:**

```bash
  yarn prisma format
```

7. **Instalação de Middleware para Tratamento de Erros Async:**

```bash
  yarn add express-async-errors
```

## Execução do Projeto

- **Atualizar o Banco de Dados (com migração):**

```bash
  yarn prisma migrate dev
```

- **Atualizar o Banco de Dados (sem migração):**

```bash
  yarn prisma generate
```

## Comandos Úteis

Aqui estão alguns comandos úteis que podem ser executados no projeto:

- **Atualizar o Banco de Dados (com migração):**

  ```bash
  yarn prisma migrate dev
  ```

- **Atualizar o Banco de Dados (sem migração):**

  ```bash
  yarn prisma generate
  ```

- **Executar o Projeto em Modo de Desenvolvimento:**

  ```bash
  yarn dev
  ```

- **Compilar o Código TypeScript:**
  ```bash
  yarn build
  ```
