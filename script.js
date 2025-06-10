let balance = 1000;
const symbols = ["🍒", "🍋", "🍊", "⭐", "🔔"];
const bet = 50;

document.getElementById("spinBtn").addEventListener("click", () => {
  if (balance < bet) {
    alert("Saldo insuficiente!");
    return;
  }

  balance -= bet;

  let slot1 = symbols[Math.floor(Math.random() * symbols.length)];
  let slot2 = symbols[Math.floor(Math.random() * symbols.length)];
  let slot3 = symbols[Math.floor(Math.random() * symbols.length)];

  document.getElementById("slot1").textContent = slot1;
  document.getElementById("slot2").textContent = slot2;
  document.getElementById("slot3").textContent = slot3;

  if (slot1 === slot2 && slot2 === slot3) {
    document.getElementById("result").textContent = "🎉 Jackpot! +500 moedas!";
    balance += 500;
  } else if (slot1 === slot2 || slot2 === slot3 || slot1 === slot3) {
    document.getElementById("result").textContent = "😊 Quase lá! +100 moedas!";
    balance += 100;
  } else {
    document.getElementById("result").textContent = "😢 Tente novamente!";
  }

  document.getElementById("balance").textContent = balance;
});
