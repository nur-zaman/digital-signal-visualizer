import utils, { getInputValue, randomIntFromRange } from './utils'
import formulas, {selectMethod} from './formulas'
import "./styles.css";

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

const HEIGHT = 300
let WIDTH = innerWidth

let BINARY = "";
let method ;
canvas.width = WIDTH
canvas.height = HEIGHT

const mouse = {
  x: WIDTH / 2,
  y: HEIGHT / 2
}

const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66']

// Event Listeners
addEventListener('mousemove', (event) => {
  mouse.x = event.clientX
  mouse.y = event.clientY
})

addEventListener('resize', () => {
  canvas.width = WIDTH
  canvas.height = HEIGHT

  init()
})

const coll = document.getElementsByClassName("collapsible");


coll[0].addEventListener("click", function () {
  this.classList.toggle("active");
  let content = this.nextElementSibling;
  if (content.style.maxHeight) {
    content.style.maxHeight = null;
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
  }
  document.getElementById('arrow').classList.toggle("fa-rotate-90")
});

document.getElementById('button').onclick =()=> {  
BINARY =  getInputValue()
document.getElementById('title').innerHTML = document.getElementById("options").options[document.getElementById("options").selectedIndex].text;
method = document.getElementById("options").value
if((/^[0-1]/.test(BINARY))){
  if(((50*BINARY.length)+50)>WIDTH){
    WIDTH=(50*BINARY.length)+100
    }
    else
    WIDTH = innerWidth
    init()

    }
    else{
      document.getElementById('binary').value=null
      document.getElementById('binary').placeholder ="Enter A Valid Binary"
      c.clearRect(0, 0, canvas.width, canvas.height)
      drawBoard()
    }

  };  


function drawBoard() {
  //outer box
  c.clearRect(0, 0, canvas.width, canvas.height)
  c.beginPath(); 
  c.moveTo(5,5);
  c.lineTo(WIDTH-5,5)
  c.lineTo(WIDTH-5,HEIGHT - 5)
  c.lineTo(WIDTH-5,HEIGHT-5)
  c.lineTo(5,HEIGHT-5)
  c.lineTo(5,5)
  c.stroke();
  c.closePath()

  //oV line
  c.beginPath();
  c.moveTo(50, HEIGHT / 2)
  c.lineTo(WIDTH-5,HEIGHT / 2)
  c.setLineDash([10, 5])
  c.lineWidth = 2
  c.stroke();
   c.closePath()

  //Horizontal lines
  for (let i = 50,j=0; i <=(50*BINARY.length)+50; i += 50,j++) 
  {
    c.beginPath();
  c.lineWidth = .5
  c.setLineDash([0, 0])
  c.moveTo(i, 5);
  c.lineTo(i,HEIGHT -5);
  c.stroke();
  c.closePath()
  drawNumbers(i,j)
 }
//-v line
 c.beginPath();
 c.moveTo(50, (HEIGHT / 2 )+50)
 c.lineTo(WIDTH-5,(HEIGHT / 2 )+50)
 c.setLineDash([10, 5])
 c.lineWidth = 2
 c.stroke();
  c.closePath()

//+v line
  c.beginPath();
  c.moveTo(50, (HEIGHT / 2 )-50)
  c.lineTo(WIDTH-5,(HEIGHT / 2 ) - 50)
  c.setLineDash([10, 5])
  c.lineWidth = 2
  c.stroke();
   c.closePath()


   c.fillText('+v', 25, (HEIGHT / 2 )-50)
   c.fillText('-v', 25, (HEIGHT / 2 )+50)
   c.fillText('0', 25, (HEIGHT / 2 )+5)
}

function drawNumbers(i,j){
  c.font = 'bold 20px sans-serif';
  if(j<BINARY.length)
  c.fillText(BINARY.charAt(j)+"", i+25, 30)
}

function init() {
  canvas.width = WIDTH
  drawBoard()
selectMethod(method , c,BINARY,HEIGHT,WIDTH )
}
init()
