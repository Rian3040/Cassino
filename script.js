let balance = 1000;
const bet = 50;
const symbols = ["🐅", "💰", "🔥", "🍀", "⭐"];
let control = {
  rtp: 0.95,
  rodadas_sem_pagamento: 3,
};

let rodadas = 0;

document.getElementById("spinBtn").addEventListener("click", () => {
  if (balance < bet) {
    alert("Saldo insuficiente!");
    return;
  }

  document.getElementById("spinSound").play();
  balance -= bet;
  rodadas++;

  let slot1 = symbols[Math.floor(Math.random() * symbols.length)];
  let slot2 = symbols[Math.floor(Math.random() * symbols.length)];
  let slot3 = symbols[Math.floor(Math.random() * symbols.length)];

  document.getElementById("slot1").textContent = slot1;
  document.getElementById("slot2").textContent = slot2;
  document.getElementById("slot3").textContent = slot3;

  let ganhou = false;

  if (rodadas > control.rodadas_sem_pagamento &&
      Math.random() <= control.rtp &&
      slot1 === slot2 && slot2 === slot3) {
    ganhou = true;
  }

  if (ganhou) {
    document.getElementById("winSound").play();
    balance += 500;
    document.getElementById("result").textContent = "🎉 Jackpot! +500 moedas!";
    rodadas = 0; // resetar controle de rodadas sem pagamento
  } else {
    document.getElementById("result").textContent = "😢 Tente novamente!";
  }

  document.getElementById("balance").textContent = balance;
});
