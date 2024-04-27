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
        trocarTema('#2a0646','#3b0764','#3b0764','#9333ea','#581c87','#22d3ee','#d946ef','#c026d3','#67e8f9','#fde047','')
    } else{
        trocarTema('','','','','','','','#475569','#7f1d1d','','')
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