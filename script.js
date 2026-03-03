const palette = document.getElementById("palette");
const generateBtn = document.getElementById("generateBtn");
const hint = document.querySelector(".hint");

// ===============================
// 2. FUNKCIA NA GENEROVANIE NÁHODNEJ HEX FARBY
// ===============================

function generateRandomColor() {
  let color = "#";
  const chars = "0123456789ABCDEF";

  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    color += chars[randomIndex];
  }
  return color;
}

// ===============================
// 3. FUNKCIA NA VYTVORENIE JEDNEJ COLOR CARD
// ===============================

function createColorCard(color) {
  const card = document.createElement("div");
  card.classList.add("color-card");
  card.style.backgroundColor = color;

  const colorCode = document.createElement("span");
  colorCode.textContent = color;
  colorCode.classList.add("color-code");

  card.appendChild(colorCode);

  // Pridanie event listenera na kopírovanie farby do schránky
  card.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(color);
      hint.textContent = "Copied!";
    } catch {
      hint.textContent = "Copy failed";
    }

    setTimeout(() => {
      hint.textContent = "Click color to copy";
    }, 1500);
  });

  return card;
}

// ===============================
// 4. FUNKCIA, KTORÁ VYGENERUJE CELÚ PALETU
// ===============================

function generatePalette() {
  palette.innerHTML = "";

  const numberofColors = 4;

  for (let i = 0; i < numberofColors; i++) {
    const color = generateRandomColor();
    const card = createColorCard(color);
    palette.appendChild(card);
  }
}

// ===============================
// 5. EVENT LISTENER NA BUTTON
// ===============================

generateBtn.addEventListener("click", generatePalette);

// ===============================
// 6.  VYGENERUJ PALETU PRI NAČÍTANÍ STRÁNKY
// ===============================

generatePalette();
