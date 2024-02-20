let input1= document.getElementById('sticker-1')
let input2= document.getElementById('sticker-2')
let input3= document.getElementById('sticker-3')

let total= document.getElementById('total')

const button = document.querySelector('button')
button.addEventListener('click', function(){
    let quantity= Number(input1.value) + Number(input2.value) + Number(input3.value)
    if (quantity > 10){
        total.innerHTML= "Llevas demasiados stickers"
    } else {
        total.innerHTML= "Llevas: " + quantity + " stickers"
    }
})