![logo](https://user-images.githubusercontent.com/78443398/146002241-dc9adf95-b60b-4568-a793-8ebeca5b8939.png)

## 📄 Introdução do Projeto
<br/><br/>

A aplicação trata-se de um catálogo comercial densevolvido para um cliente habituado com o Google Planilhas.

A ideia era criar uma página com detalhes para cada um dos produtos de uma planilha.

Além disso, o projeto conta com atualização em tempo real, assim que um produto novo é adicionado, ele é integrado ao projeto.

<br/><br/>
## 🖥 O Projeto
<br/><br/>

 <img src="https://user-images.githubusercontent.com/78443398/146037286-b9454216-73db-4da1-b0d1-38d5388f8863.png" alt="planilha" width="750">

A planilha acima recebe os dados dos produtos e o SheetsDB a tranforma em uma API.

O Node faz a leitura de cada objeto na API e define uma rota para um deles, onde são enviados arquivos .html .css e .js padrões.

O script enviado observa um identificador na URL para poder carregar as informações do produto, assim todas as rotas aproveitam o mesmo código.
Em resumo: o nome do produto, a descrição, a imagem e o valor são carregados de acordo com a URL requisitada.

E o mais interessante é que todos os dados são atualizados no momento em que alguma alteração é feita na planilha, inclusive o catálogo mostrando todos os produtos, que carrega um novo produto de imediato.

<div>
 <img src="https://user-images.githubusercontent.com/78443398/146038998-b7470ade-fe9b-4b62-bb10-26d8768e79d7.png" alt="planilha" width="400">
 <img src="https://user-images.githubusercontent.com/78443398/146039520-b11f815f-93f1-4e12-b64b-6f019b5efeee.png" alt="planilha" width="400">
</div>

<br/><br/>
### Caso queira acessar o projeto, clique [aqui](https://catalogo-semear-shop.herokuapp.com/).
<br/><br/>
## ⚙ Tecnologias Usadas

- [Javascript](https://www.javascript.com/)
- [Node.Js](https://nodejs.org/pt-br/)
- [Express](https://expressjs.com/pt-br/)
- [Google Sheets](https://docs.google.com/spreadsheets/u/0/)
- [SheetsDB](https://sheetdb.io/)

<br/><br/>
Feito por Gustavo Vasquez.<br/><br/>
Contato: [Linkedin](https://www.linkedin.com/in/gustavo-vasquez-480753143/)
