const buttons = document.querySelectorAll('button')
const display = document.getElementById('display')

//percorre os elementos do array sem a necessidade do for
buttons.forEach((item) =>{
    item.onclick = ()=> {
        if(item.id == 'reset'){
            display.textContent = ''
        } else if(item.id == 'del'){
            let string = display.textContent.toString()
            display.textContent = string.substring(0, string.length -1)
        } else if(display.textContent != '' && item.id == '='){
            //executa a string como se fosse um código
            display.textContent = eval(display.textContent)
        } else if(display.textContent == '' && item.id == '='){
            display.textContent = 'Vazio!'
            setTimeout(()=> (display.textContent = ''), 2000)
        } else{
            display.textContent += item.id
        }
    }
})

/*troca a posição do button do tema*/
const btTheme = document.getElementById('btTheme')
const position = ['start','center','end']
let c = 0

function changePosition(){
    const positionIndex = c % position.length
    btTheme.style.justifyContent = position[positionIndex]
}

btTheme.addEventListener('click', ()=> {
    c++
    changePosition()
})