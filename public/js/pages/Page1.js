import globals from "../globals.js";
import Page1Content from "./Page1Content.js";

window.globals = globals;

const content = document.createElement("div");
content.className = "page-content";
content.innerHTML = Page1Content;

let hasTax = true,
  twoYearsBill = 0,
  oneYearBill = 0;

const hasTaxButtons = content.querySelectorAll(
  '[data-field="has-tax"] .option'
);
const twoYearsBillLabel = content.querySelector(
  '[data-field="two-years-bill"] .label'
);
const oneYearBillLabel = content.querySelector(
  '[data-field="one-year-bill"] .label'
);
for (const button of hasTaxButtons) {
  button.addEventListener("click", function () {
    hasTaxButtons.forEach((button) => button.classList.remove("selected"));
    this.classList.add("selected");
    hasTax = button.dataset.value === "true";
    if (hasTax) {
      twoYearsBillLabel.textContent =
        "ادخل اجمالي الفواتير للسنتين مع الضريبة 15%";
      oneYearBillLabel.textContent =
        "ادخل اجمالي الفواتير للسنة مع الضريبة 15%";
    } else {
      twoYearsBillLabel.textContent =
        "ادخل اجمالي الفواتير للسنتين بدون الضريبة 15%";
      oneYearBillLabel.textContent =
        "ادخل اجمالي الفواتير للسنة بدون الضريبة 15%";
    }
    updateTotal();
  });
}

const twoYearsBillInput = content.querySelector(
  '[data-field="two-years-bill"] input'
);
twoYearsBillInput.addEventListener("change", function () {
  this.value = +(this.valueAsNumber || 0).toFixed(2);
  twoYearsBill = +(((this.valueAsNumber || 0) / 2).toFixed(2));
  nextBtn.disabled = Boolean(!twoYearsBill && !oneYearBill);
  updateTotal();
});

const oneYearBillInput = content.querySelector(
  '[data-field="one-year-bill"] input'
);
oneYearBillInput.addEventListener("change", function () {
  this.value = +(this.valueAsNumber || 0).toFixed(2);
  oneYearBill = +((this.valueAsNumber || 0).toFixed(2));
  nextBtn.disabled = Boolean(!twoYearsBill && !oneYearBill);
  updateTotal();
});

const total = content.querySelector('[data-field="total"] .value');

const numberFormat = Intl.NumberFormat("en-US");
function updateTotal() {
  let sum = twoYearsBill + oneYearBill;
  if (hasTax) sum = (100 / 115) * sum;
  total.textContent = numberFormat.format(sum.toFixed(2));
  globals.Page1.total = +sum.toFixed(2);
}

const nextBtn = content.querySelector(".next");

nextBtn.addEventListener("click", () => {
  if (twoYearsBill || oneYearBill) globals.currentPageIndex++;
});

export { content };
