let binInput = document.querySelector("#bin")
let decInput = document.querySelector("#dec")

function convert(bin){
  let dec = 0
  
  for(let i = bin.length-1; i >= 0; i--){
    dec += parseInt(bin[i])*Math.pow(2, bin.length-1-i)
  }
  
  return dec;
}


function checkNumber(inputValue) {
    var rule = /^[0-1]+$/;
    if (!inputValue.match(rule)) {
        if (!inputValue==''){
            alert("Permitido somente dígitos 0 e 1");
        }
        binInput.value=''
    }
}


binInput.addEventListener("keyup", ()=>{
  decInput.value=convert(binInput.value)
  if(decInput.value=='0'){
      decInput.value=''
  }
})