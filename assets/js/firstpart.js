let borderDisplay = document.querySelector('img')

borderDisplay.addEventListener('click', function(){
    if (borderDisplay.style.border === ""){
        borderDisplay.style.border = 'red solid 2px'
    } else{
        borderDisplay.style.border = ""
    }
})