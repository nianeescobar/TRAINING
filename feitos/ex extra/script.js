// buscar
const btn = document.querySelector("#calcTrigger");
const firstN = document.querySelector("#first");
const secondN = document.querySelector("#second");
const maxN = document.querySelector("#maxMult");
const rendered = document.querySelector("#result");

// separar
function renderTable(base, maximoMult) {
	let storage = [];
  for( let i = 1; i <= maximoMult; i++) {
  	let resultCalc = base*i;
    storage.push(`<li>${base} x ${i} = ${resultCalc}</li>`)
  }
  return `<ul>${storage.join("")}</ul>`
};

function generateTables() {
	let n1 = firstN.value * 1;
  let n2 = secondN.value * 1;
  let n3 = maxN.value * 1;
 
 // 5 , 3 = 2 + 1 = 3
  let dif = Math.abs(n1 - n2) + 1;
	let base = n1 > n2 ? n2 : n1
  
  
 	let mts = [];
  
  for(let i = 0; i < dif; i++) {
  	mts.push(renderTable(base + i, n3))
  };
  
  return mts.join("")
}


//renderixar
btn.addEventListener("click", function() {

  result.innerHTML = generateTables()
})