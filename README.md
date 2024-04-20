# Documentação da Aplicação TV Show

## Visão Geral
A aplicação TV Show é uma plataforma onde os usuários podem visualizar uma lista de séries de TV e seus detalhes, incluindo informações sobre episódios de cada série. Os usuários também podem acessar detalhes específicos de uma série selecionada.

## Funcionalidades

### Página Inicial
- Exibe uma lista de séries de TV.
- Cada série exibe uma imagem, título e link para acessar os detalhes da série.

### Detalhes da Série
- Mostra detalhes específicos de uma série selecionada, incluindo:
  - Nome da série
  - Imagem
  - Resumo
  - Ano de lançamento
  - Gêneros
- Lista os episódios da série, permitindo ao usuário filtrá-los por temporada.
- Para cada episódio, exibe:
  - Nome
  - Imagem
  - Resumo
  - Duração

## Bibliotecas Utilizadas

### Front-end
- React.js: Biblioteca JavaScript para criar interfaces de usuário.
- Material-UI: Uma biblioteca de componentes React para implementar designs visualmente atraentes.
- React Router: Biblioteca para roteamento na aplicação React.
- Emotion: Biblioteca para estilização de componentes React com CSS-in-JS.

### Testes
- Jest: Framework de teste de JavaScript.
- Testing Library: Conjunto de ferramentas para teste de componentes React.

## Estrutura do Projeto
A estrutura do projeto segue a seguinte organização:

tv-show-app/

│

├── public/ # Arquivos públicos

├── src/ # Código fonte da aplicação

│ ├── assets/ # Recursos estáticos (imagens)

│ ├── components/ # Componentes React

│ ├── layout/ # Estilos CSS e layouts

│ ├── models/ # Interfaces TypeScript para tipos de dados

│ ├── pages/ # Páginas da aplicação

│ ├── services/ # Serviços para fazer requisições à API

│ ├── Theme.ts # Definições do tema Material-UI

│ ├── App.tsx # Componente principal da aplicação

│ └── ...

├── package.json # Arquivo de configuração do projeto

└── ...


## Testes
Os testes são escritos utilizando Jest e Testing Library. Eles cobrem os serviços de requisição à API e os componentes da aplicação.

## Como Rodar a Aplicação
Para rodar a aplicação localmente, siga os passos abaixo:

1. Clone o repositório do projeto:

```
git clone https://github.com/seu-usuario/tv-show-app.git
```

2. Navegue até o diretório do projeto:

```
cd tv-show-app
```

3. Instale as dependências do projeto:

```
npm install
```

4. Inicie a aplicação:

```
npm start
```


5. Abra o navegador e acesse `http://localhost:3000` para visualizar a aplicação.

## Como Rodar os Testes
Para rodar os testes, execute o seguinte comando no terminal dentro do diretório do projeto:

```
npm test
```


Isso executará todos os testes e exibirá os resultados no terminal.

## Conclusão
A aplicação TV Show oferece uma maneira fácil de explorar e obter informações sobre diversas séries de TV. Com uma interface amigável e recursos de filtragem, os usuários podem encontrar facilmente as séries e episódios que desejam assistir.




