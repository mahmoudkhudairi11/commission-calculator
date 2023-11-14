import globals from '../globals.js';
import Page2Content from './Page2Content.js';

const content = document.createElement('div');
content.className = 'page-content';
content.innerHTML = Page2Content;

const total = content.querySelector('[data-field="total"] .value');

const numberFormat = Intl.NumberFormat('en-US');

total.textContent = numberFormat.format(globals.Page1.total.toFixed(2));

globals.Page1.onupdate.push(() => {
  total.textContent = numberFormat.format(globals.Page1.total.toFixed(2));
});

const isFirstTeamButtons = content.querySelectorAll(
  '[data-field="is-first-team"] .option'
);
for (const button of isFirstTeamButtons) {
  button.addEventListener('click', function () {
    isFirstTeamButtons.forEach((button) => button.classList.remove('selected'));
    this.classList.add('selected');
    globals.Page2.isFirstTeam = button.dataset.value === 'true';
  });
}

const convertionRatio = content.querySelector(
  '[data-field="convertion-ratio"] input'
);
convertionRatio.addEventListener('input', function () {
  if (this.value > 100) this.value = 100;
  globals.Page2.convertionRatio = +(this.valueAsNumber || 0).toFixed(2);
});
convertionRatio.addEventListener('change', function () {
  this.value = +(this.valueAsNumber || 0).toFixed(2);
});

const STCClients = content
.querySelector('[data-field="stc-clients"] input');
STCClients.addEventListener('input', function () {
    if (this.value > 100) this.value = 100;
    globals.Page2.STCClients = +(this.valueAsNumber || 0).toFixed(2);
  });
STCClients.addEventListener('change', function () {
    this.value = Math.trunc(this.valueAsNumber || 0);
  });

const weeks = Array(4).fill(0);

for (let i = 1; i <= 4; i++) {
  const field = content.querySelector(`[data-field='week${i}']`);
  const front = field.querySelector('.front');
  front.addEventListener('click', function (e) {
    field.classList.add('flip');
    input.focus();
  });
  field.querySelector('.icon-btn').addEventListener('click', function () {
    field.classList.remove('flip');
  });
  const input = field.querySelector(`input`);
  input.addEventListener('input', function () {
    const otherWeeksTotal = weeks
      .filter((_, index) => (i - 1) !== index)
      .reduce((a, c) => a + c);
    const testWeeksTotal =
      +(this.valueAsNumber || 0).toFixed(2) + otherWeeksTotal;
    if (testWeeksTotal > globals.Page1.total) {
      this.value = +(globals.Page1.total - otherWeeksTotal).toFixed(2);
    }
    weeks[i - 1] = +(this.valueAsNumber || 0).toFixed(2);
    globals.Page2[`week${i}`] = weeks[i - 1];
  });
  input.addEventListener('change', function () {
    this.value = +(this.valueAsNumber || 0).toFixed(2);
  });
}
const weeksMin = [6000, 8000, 10000, 18000, 6000, 8000, 10000, 18000];

let rest = 0;

globals.Page2.onupdate.push(function () {
  for (let i = 0; i < 4; i++) {
    if (weeks[i] >= weeksMin[i]) {
      globals.Page2.weeksCommissions[i] = 2;
      rest = weeks[i] - weeksMin[i];
      while (i < 4 && rest + weeks[++i] >= weeksMin[i]) {
        globals.Page2.weeksCommissions[i] = 2;
        rest = (rest + weeks[i]) - weeksMin[i];
      }
    } else {
      globals.Page2.weeksCommissions[i] = -2;
      if (i < 3) weeksMin[i + 1] += weeksMin[i];
    }
  }
  weeksMin.copyWithin(0, 4);
});

const weeksError = content.querySelector('.weeks-error');

content
  .querySelector('.prev')
  .addEventListener('click', () => globals.currentPageIndex--);
content
  .querySelector('.next')
  .addEventListener('click', () => {
    weeksError.hidden = +weeks.reduce((a, c) => a + c).toFixed(2) === globals.Page1.total;
    if (weeksError.hidden) globals.currentPageIndex++
  });

export { content };
