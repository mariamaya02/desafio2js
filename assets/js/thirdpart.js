const option1 = document.getElementById('number-1')
const option2 = document.getElementById('number-2')
const option3 = document.getElementById('number-3')
let result = document.getElementById('passwordResult')

const button = document.querySelector('button')
button.addEventListener("click", function(){
    if (option1.value == 9 && option2.value == 1 && option3.value == 1){
        result.innerHTML= "Password 1 es correcto"
    } else if (option1.value == 7 && option2.value == 1 && option3.value == 4){
        result.innerHTML= "Password 2 es correcto"
    } else {
        result.innerHTML = "Password es incorrecto"
    }
}
) 