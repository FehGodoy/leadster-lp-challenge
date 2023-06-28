
![App Screenshot](https://i.imgur.com/4854Yyf.png)


# Leadster LP - Documentação

Bem-vindo ao repositório da Landing Page da empresa Leadster! Neste projeto, foi desenvolvido uma LP para apresentar algumas funcionalidades que foram exigidas. A Leadster é uma empresa especializada em geração de leads e marketing digital.


## Instalação
Para rodar este aplicativo localmente, siga as instruções abaixo:

Clone este repositório:

```bash
  git clone https://github.com/FehGodoy/leadster-lp-challenge.git
```

Entre no diretório do projeto:

```bash
  cd leadster-lp-challenge
```

Instale as dependências do projeto:

```bash
  npm install
```

Inicie o servidor de desenvolvimento:

```bash
  npm run dev
```
    
## Executando os testes

Na raiz do projeto, execute o seguinte comando


```bash
  npm run test
```


## Uso

Foram criadas todas as seções e funcionalidades exigidas no layout, como por exemplo: Filtros por ordenação,data de publicação e também por categorias de serviços.

## Decisões tomadas

Durante o desenvolvimento desta LP, foram tomadas algumas decisões para garantir uma implementação eficiente e eficaz. Como por exemplo:

**Utilização do Context API**
- Foi decidido utilizar a Context API, para gerenciar o estado global da aplicação e assim nos permitir compartilhar dados entre componentes sem a necessidade de passar propriedades manualmente em vários níveis.

## Organização do código:

Em minha organização do código tentei se assemelhar a estrutura em camadas (tiered structure) ou Atomic Design, onde diferentes partes do código sejam bem separadas em pastas com base em suas responsabilidades, e também enfatizar a reutilização e a modularidade dos componentes.

## Stack utilizada

**Front-end:** React,TypeScript, Styled Components, React Icons,Jest, Testing Library, Material UI, React Transition Group e React Player.

**Back-end:** TypeScript,Jest, Testing Library, Babel


## Entrega das funcionalidades

Pontos que foram entregues nesta aplicação:

- Testes unitários e um teste de integração com Jest;
- Responsividade;
- Componentes reutilizáveis;
- Context API, para um gerenciamento melhor dos componentes;
- Listagem de vídeos através de um arquivo {JSON}

## Feedback

Se você tiver algum feedback, por favor nos deixe saber por meio de felip.godoy10@gmail.com

