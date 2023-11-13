import globals from "../globals.js";
import Page3Content from "./Page3Content.js";

const content = document.createElement("div");
content.className = "page-content";
content.innerHTML = Page3Content;

const commission = content.querySelector(".commission");
const details = content.querySelectorAll(".detail span:last-child");

const commissions = [];

const numberFormat = Intl.NumberFormat("en-US");

function render() {
  commissions.length = 0;

  for (let i = 0; i < 4; i++) {
    commissions.push(globals.Page2.weeksCommissions[i]);
    details[i].textContent = `${globals.Page2.weeksCommissions[i]}%`;
    details[i].setAttribute('is-negative', globals.Page2.weeksCommissions[i] < 0);
  }

  const stcCommission = globals.Page2.STCClients < 5 ? -2 : 0;
  commissions.push(stcCommission);
  details[4].textContent = `${stcCommission}%`;
  details[4].setAttribute('is-negative', stcCommission < 0);

  const teamCommission = globals.Page2.isFirstTeam ? 2 : 0;
  commissions.push(teamCommission);
  details[5].textContent = `${teamCommission}%`;
  details[5].setAttribute('is-negative', teamCommission < 0);

  const totalCommission =
    globals.Page1.total < 25000
      ? 0
      : globals.Page1.total < 42000
      ? 5
      : globals.Page1.total < 58000
      ? 20
      : 25;
  commissions.push(totalCommission);
  details[6].textContent = `${totalCommission}%`;
  details[6].setAttribute('is-negative', totalCommission < 0);

  const convertionRatio =
    globals.Page2.convertionRatio < 15
      ? -2
      : globals.Page2.convertionRatio < 25
      ? 0
      : 2;
  commissions.push(convertionRatio);
  details[7].textContent = `${convertionRatio}%`;
  details[7].setAttribute('is-negative', convertionRatio < 0);

  const commissionsSum = commissions.reduce((a, c) => a + c);

  commission.textContent = numberFormat.format(
    (commissionsSum / 100) * globals.Page1.total
  );

  details[8].textContent = `${commissionsSum}%`;
  details[8].setAttribute('is-negative', commissionsSum < 0);

  console.log('render', commissions);
}

render();
globals.Page1.onupdate.push(render);
globals.Page2.onupdate.push(render);

content
  .querySelector(".prev")
  .addEventListener("click", () => globals.currentPageIndex--);
content
  .querySelector(".next")
  .addEventListener("click", () => location.reload());

export { content };
