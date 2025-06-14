function setup() {
  createCanvas(windowWidth, windowHeight);
}

let xJogador = [0, 0, 0, 0, 0, 0, 0];
let yJogador = [75, 140, 205, 275, 350, 415, 480];	   
let jogador = ["❤️", "💕", "💗", "💙", "💜", "💛", "🤍"];
let teclas = ["a", "s", "d", "f", "g", "h", "j"];
let quantidade = jogador.length;

function draw() {
  ativaJogo();
  desenhaJogadores();
  desenhaLinhaDeChegada();
  verificaVencedor();
}

function ativaJogo() {
  if (focused == true) {
    background("#FD858E");
  } else {
    background("rgb(253,177,212)");
  }
}

function desenhaJogadores() {
  textSize(40);
  for (let i = 0; i < quantidade; i++) {
    text(jogador[i], xJogador[i], yJogador[i]);
  }
}

function desenhaLinhaDeChegada() {
  fill("white");
  rect(width - 50, 0, 10, height); // linha branca do topo até a base da tela

  fill("black");
  for (let yAtual = 0; yAtual < height; yAtual += 20) {
    rect(width - 50, yAtual, 10, 10); // quadrados pretos intercalados
  }
}

function verificaVencedor() {
  for (let i = 0; i < quantidade; i++) {
    if (xJogador[i] > width) {
      text("heart:" + jogador[i] + "win!", 70, 200);
      noLoop();
    }
  }
}

function keyReleased() {
  for (let i = 0; i < quantidade; i++) {
    if (key == teclas[i]) {
      xJogador[i] += random(20);
    }
  }
}
