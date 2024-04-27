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
        } else if(item.id != 'bt'){
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
    buttonPosition(position[positionIndex])//alterar depois se necessario
}

btTheme.addEventListener('click', ()=> {
    c++
    changePosition()
})

function buttonPosition(position){
    if(position == 'center'){
        trocartema('#d6d3d1', 'red', 'black')
    } else if(position == 'end'){
        document.body.style.backgroundColor = '#3b0764'
    } else{
        document.body.style.backgroundColor = '#334155'
    }
}

function trocartema(bg, bg2, color1){
    document.body.style.backgroundColor = bg
    buttonsContainer.style.backgroundColor = bg2
    header.style.color = color1

    buttons.forEach((item)=>{
        if(item.id == 'del'){
            item.style.backgroundColor = bg2
        }
    })
}

const buttonsContainer = document.getElementById('buttonsContainer')
const header = document.getElementById('header')