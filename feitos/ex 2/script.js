// Busca no DOM
const btn = document.querySelector("#cepButton");
const resultado = document.getElementById('resultado');

// Declara as funcoes
function searchLocation(cep) { 
	const url = `https://viacep.com.br/ws/${cep}/json/`
	return fetch(url).then(function(res) { 
    return res.ok ? res.json() : Promise.reject(res)
  });
 }


function capitalize(text) {
	const [ firtLetter, ...restOfLetters] = text.split('')
	const capitalizedText = `${firtLetter.toUpperCase()}${restOfLetters.join('')}`
	
  
  return capitalizedText
}


function renderResult(finalResult) {
	let str; // undefined
	if (finalResult.erro) {
  	str = "Cep não encontrado!"
  } else {
    let arr = []
    for (let key in finalResult) {
    	const value = finalResult[key]
      arr.push(`<li>${capitalize(key)}: ${value}</li>`)
    }
  
    str = `<ul>${arr.join('')}</ul>`
  }
  
  resultado.innerHTML = str;
}

// Inicializa os eventos
btn.addEventListener("click", function() {
	const cepValue = document.querySelector("#cepInput").value * 1;
  searchLocation(cepValue)
  .then(renderResult)
  .catch(error => console.log(error));
});