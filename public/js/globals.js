const acceptedIndexes = [0, 1, 2];
let currentPageIndex = 0;

let __page1_total = 0;

let
  __page2_isFirstTeam = true,
  __page2_convertionRatio = 0,
  __page2_STCClients = 0,
  __page2_week1 = 0,
  __page2_week2 = 0,
  __page2_week3 = 0,
  __page2_week4 = 0,
  __page2_weeksCommissions = [0, 0, 0, 0];

export default {
  Page1: {
    get total() {
      return __page1_total;
    },
    set total(value) {
      __page1_total = value;
      this.onupdate.forEach((cb) => (typeof cb === "function") && cb());
    },
    onupdate: []
  },
  Page2: {
    get isFirstTeam() {
      return __page2_isFirstTeam;
    },
    set isFirstTeam(value) {
      __page2_isFirstTeam = value;
      this.onupdate.forEach((cb) => (typeof cb === "function") && cb());
    },
    get convertionRatio() {
      return __page2_convertionRatio;
    },
    set convertionRatio(value) {
      __page2_convertionRatio = value;
      this.onupdate.forEach((cb) => (typeof cb === "function") && cb());
    },
    get STCClients() {
      return __page2_STCClients;
    },
    set STCClients(value) {
      __page2_STCClients = value;
      this.onupdate.forEach((cb) => (typeof cb === "function") && cb());
    },
    get week1() {
      return __page2_week1;
    },
    set week1(value) {
      __page2_week1 = value;
      this.onupdate.forEach((cb) => (typeof cb === "function") && cb());
    },
    get week2() {
      return __page2_week2;
    },
    set week2(value) {
      __page2_week2 = value;
      this.onupdate.forEach((cb) => (typeof cb === "function") && cb());
    },
    get week3() {
      return __page2_week3;
    },
    set week3(value) {
      __page2_week3 = value;
      this.onupdate.forEach((cb) => (typeof cb === "function") && cb());
    },
    get week4() {
      return __page2_week4;
    },
    set week4(value) {
      __page2_week4 = value;
      this.onupdate.forEach((cb) => (typeof cb === "function") && cb());
    },
    get weeksCommissions() {
      return __page2_weeksCommissions;
    },
    onupdate: []
  },
  get currentPageIndex() {
    return currentPageIndex;
  },
  set currentPageIndex(value) {
    if (!acceptedIndexes.includes(value)) throw Error('Wrong index');
    currentPageIndex = value;
    if (typeof this.onpagechange) this.onpagechange(value);
  },
  onpagechange: null
}