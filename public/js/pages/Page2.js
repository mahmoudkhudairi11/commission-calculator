import globals from "../globals.js";
import Page2Content from "./Page2Content.js";

const content = document.createElement("div");
content.className = "page-content";
content.innerHTML = Page2Content;

const total = content.querySelector('[data-field="total"] .value');

const numberFormat = Intl.NumberFormat("en-US");

total.textContent = numberFormat.format(globals.Page1.total.toFixed(2));

globals.Page1.onupdate.push(() => {
  total.textContent = numberFormat.format(globals.Page1.total.toFixed(2));
});

const isFirstTeamButtons = content.querySelectorAll(
  '[data-field="is-first-team"] .option'
);
for (const button of isFirstTeamButtons) {
  button.addEventListener("click", function () {
    isFirstTeamButtons.forEach((button) => button.classList.remove("selected"));
    this.classList.add("selected");
    globals.Page2.isFirstTeam = button.dataset.value === "true";
  });
}

content
  .querySelector('[data-field="convetion-ratio"] input')
  .addEventListener("change", function () {
    globals.Page2.convertionRatio = this.valueAsNumber || 0;
  });

content
  .querySelector('[data-field="stc-clients"] input')
  .addEventListener("change", function () {
    globals.Page2.STCClients = this.valueAsNumber || 0;
  });

for (let i = 1; i <= 4; i++) {
  const field = content.querySelector(`[data-field="week${i}"]`);
  field.addEventListener("click", function () {
    this.classList.add("flip");
  });
  field.querySelector(`input`).addEventListener("change", function () {
    globals.Page2[`week${i}`] = this.valueAsNumber || 0;
  });
}

const weeks = Array(4).fill(4);
const weeksMin = [6000, 8000, 10000, 18000];

globals.Page2.onupdate.push(function () {
  weeks[0] = globals.Page2.week1;
  weeks[1] = globals.Page2.week2;
  weeks[2] = globals.Page2.week3;
  weeks[3] = globals.Page2.week4;
  for (let i = 0; i < 4; i++) {
    if (weeks[i] >= weeksMin[i]) {
      globals.Page2.weeksCommissions[i] = 2;
    } else {
      globals.Page2.weeksCommissions[i] = -2;
      if ((i + 1) in weeksMin) weeksMin[i + 1] += weeksMin[i];
    }
  }
  weeksMin[0] = 6000;
  weeksMin[1] = 8000;
  weeksMin[2] = 10000;
  weeksMin[3] = 18000;
});

content
  .querySelector(".prev")
  .addEventListener("click", () => globals.currentPageIndex--);
content
  .querySelector(".next")
  .addEventListener("click", () => globals.currentPageIndex++);

export { content };
