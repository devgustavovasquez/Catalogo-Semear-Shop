async function getAPI() {
  try {
    const response = await fetch("https://sheetdb.io/api/v1/6gnniw4yzpsz3")
    const products = await response.json()
    //Fetch da API 
    async function getInfosByAPI() {
      // Criando o catalago de acordo com a quantidade e atributos 
      const produtos = document.getElementById("lista-produtos")
      products.forEach(produto => {
        var li = document.createElement("li")
        var a = document.createElement("a")
        var img = document.createElement("img")
        var div = document.createElement("div")
        var h2 = document.createElement("h2")
        a.href = produto.link
        img.src = produto.image
        h2.innerHTML = produto.name
        li.insertAdjacentElement('beforeend', a)
        a.insertAdjacentElement('beforeend', img)
        a.insertAdjacentElement('beforeend', div)
        div.insertAdjacentElement('beforeend', h2)
        produtos.appendChild(li)
      });
    }
    getInfosByAPI()

  } catch (error) {
    console.error(error)
  }
}
getAPI()

