async function getAPI() {
  try {
    const response = await fetch("https://sheetdb.io/api/v1/6gnniw4yzpsz3")
    const products = await response.json()
//Fetch da API 
    async function getInfosByAPI() {
    const actualURL = window.location.href.substring(54, 60);
//Recebendo o ID da URL do produto requisitado    
      const title = document.getElementById("title")
      const review = document.getElementById("review")
      const img = document.getElementById("img")
      const value = document.getElementById("value")
      
       title.innerHTML = (products.filter(product => {return product.id == actualURL}))[0].name
       review.innerHTML = (products.filter(product => {return product.id == actualURL}))[0].description
       img.src = `${(products.filter(product => {return product.id == actualURL}))[0].image}`
       value.innerHTML = (products.filter(product => {return product.id == actualURL}))[0].price
//Alterando dados visuais de acordo com o ID do produto
}
    getInfosByAPI()
  } catch (error) {
    console.error(error)
  } 
}
getAPI()
