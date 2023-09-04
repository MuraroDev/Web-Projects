let tl = document.querySelector(".tl")
let tm = document.querySelector(".tm")
let tr = document.querySelector(".tr")
let ml = document.querySelector(".ml")
let mm = document.querySelector(".mm")
let mr = document.querySelector(".mr")
let bl = document.querySelector(".bl")
let bm = document.querySelector(".bm")
let br = document.querySelector(".br")

tl.addEventListener('click', function() { jogada(tl) } );
tm.addEventListener('click', function() { jogada(tm) } );
tr.addEventListener('click', function() { jogada(tr) } );
ml.addEventListener('click', function() { jogada(ml) } );
mm.addEventListener('click', function() { jogada(mm) } );
mr.addEventListener('click', function() { jogada(mr) } );
bl.addEventListener('click', function() { jogada(bl) } );
bm.addEventListener('click', function() { jogada(bm) } );
br.addEventListener('click', function() { jogada(br) } );

let tabuleiro = document.querySelector("#tabuleiro")
let MensagemFinal = document.querySelector("#mensagem-final")
let titulo = document.querySelector("#titulo")
let contagem = 1
let AlguemVenceu = false

 function jogada(variavel){
    contagem += 1
        if( AlguemVenceu == true) {return}
        if( contagem%2 == 0 && variavel.innerHTML == "") {variavel.innerHTML = "x"}
        if( contagem%2 == 1 && variavel.innerHTML == "") {variavel.innerHTML = "o"}
     Checar_jogo();
 }

 function Checar_jogo() {
    if (tl.innerHTML != "" && tl.innerHTML === tm.innerHTML && tm.innerHTML === tr.innerHTML){display(tl)}
    if (ml.innerHTML != "" && ml.innerHTML === mm.innerHTML && mm.innerHTML === mr.innerHTML){display(ml)}
    if (bl.innerHTML != "" && bl.innerHTML === bm.innerHTML && bm.innerHTML === br.innerHTML){display(bl)}
    if (tl.innerHTML != "" && tl.innerHTML === ml.innerHTML && ml.innerHTML === bl.innerHTML){display(tl)}
    if (tm.innerHTML != "" && tm.innerHTML === mm.innerHTML && mm.innerHTML === bm.innerHTML){display(tm)}
    if (tr.innerHTML != "" && tr.innerHTML === mr.innerHTML && mr.innerHTML === br.innerHTML){display(tr)}
    if (tl.innerHTML != "" && tl.innerHTML === mm.innerHTML && mm.innerHTML === br.innerHTML){display(tl)}
    if (tr.innerHTML != "" && tr.innerHTML === mm.innerHTML && mm.innerHTML === bl.innerHTML){display(tr)}
  }


 
  const htmlElement = document.documentElement
  
function display(quadrado){
   AlguemVenceu = true
   var ganhador;
       ganhador = quadrado.innerHTML
         titulo.innerHTML = "'" + ganhador + "'" + " ganhou o jogo!!!"
         MensagemFinal.innerHTML = "Clique em 'F5' para jogar novamente."
         htmlElement.style.backgroundColor = '#98d57f';
}