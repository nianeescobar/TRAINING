let btn = document.querySelector("#calcularBtn");

btn.addEventListener("click", function() {
	const bs = document.querySelector("#base").value;
  const exp = document.querySelector("#expoente").value;  
  const result = squareRoot(bs * 1, exp * 1);
  
	document.getElementById("resultado").innerHTML = result
});



  function squareRoot(bs, exp) {
  
  	console.log(typeof exp)
  
		if(exp === 0) {
    	return Infinity
    }
    let calc = 1;
    	for(let i = 1; i <= exp; i++) {
      	calc = calc*bs;   
    }
    return calc
}
