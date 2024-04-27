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
    buttonPosition(position[positionIndex])
}

btTheme.addEventListener('click', ()=> {
    c++
    changePosition()
})

/*troca o tema*/
function buttonPosition(position){
    if(position == 'center'){
        trocarTema('#e4e4e7','#fafafa','#a1a1aa','#e4e4e7','#0891b2','#ea580c','#78716c','#164e63','#7c2d12','#0c0a09','#f8fafc')
    } else if(position == 'end'){
        trocarTema()
    } else{
        trocarTema()
    }
}

const buttonsContainer = document.getElementById('buttonsContainer')
const header = document.getElementById('header')


function trocarTema(bg,dp,bg2,bt1,bt2,bt3,sd1,sd2,sd3,text,textbt){
    bgText(bg,dp,bg2,text)

    buttons.forEach((item)=>{
        if(item.id == 'del' || item.id == 'reset'){
            corButtons(item,bt2,sd2,textbt)
        } else if(item.id == '=' || item.id == 'bt'){
            corButtons(item,bt3,sd3,textbt)
        } else{
            corButtons(item,bt1,sd1,text)
        }
    })
}

function corButtons(item,bt,sd,text) {
    item.style.backgroundColor = bt
    item.style.boxShadow = `inset 0px -5px 0px ${sd}`
    item.style.color = text
}

function bgText(bg1,dp,bg2,text){
    document.body.style.backgroundColor = bg1
    display.style.backgroundColor = dp
    display.style.color = text
    buttonsContainer.style.backgroundColor = bg2
    btTheme.style.backgroundColor = bg2
    header.style.color = text
}
/**
tema2:

item.style.backgroundColor = bt2
item.style.boxShadow = `inset 0px -5px 0px ${sd2}`

bg- #e4e4e7
bgContainer - #a1a1aa
bgbuttons1 - #e4e4e7
bgbuttons2 - #0891b2
bgbuttons3 - #ea580c
sd1- #78716c
sd2 - #164e63
sd3 - #7c2d12
display - #e4e4e7
text - #0c0a09
* 
 * document.body.style.backgroundColor = bg
    buttonsContainer.style.backgroundColor = bg2
    header.style.color = color1

    buttons.forEach((item)=>{
        if(item.id == 'del'){
            item.style.backgroundColor = bg2
        }
    })
 */