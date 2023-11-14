import globals from "./globals.js";
import * as Page1 from "./pages/Page1.js";
import * as Page2 from "./pages/Page2.js";
import * as Page3 from "./pages/Page3.js";

const page = document.getElementById('page');

const pages = [Page1, Page2, Page3];

page.append(pages[globals.currentPageIndex].content);

globals.onpagechange = index => {
  while (page.firstChild) page.firstChild.remove();
  page.append(pages[index].content);
}

window.addEventListener('keydown', (e) => {
  if (e.target instanceof HTMLInputElement && ["ArrowUp", "ArrowDown"].includes(e.code)) {
    e.preventDefault();
    window.scrollBy({
      top: 40 * (e.code === "ArrowUp" ? -1 : 1),
      behavior: "smooth"
    });
    return false;
  }
});