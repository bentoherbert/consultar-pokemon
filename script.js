var formulario = document.querySelector('form')

formulario.addEventListener('submit', function(e){
  // Bloqueia o refresh da página
  e.preventDefault()
  // Url da pesquisa
  let urlForm = "https://pokeapi.co/api/v2/pokemon/";
  // Valor do input Name
  let nome = document.getElementById("name")

  urlForm = urlForm + this.name.value

  alert(urlForm)
});