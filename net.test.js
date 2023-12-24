const puppeteer = require("puppeteer");
const expect = require("chai");
const {clickElement, getText, putText} = require("./lib/commands.js");
const { generateName } = require("./lib/util.js");

let page;

beforeEach(async () => {
  page = await browser.newPage();
  // await page.setDefaultNavigationTimeout(0);
  await page.goto("http://qamid.tmweb.ru/client/index.php");
});

afterEach(() => {
  page.close();
});

describe("Tests for booking tickets", () => {
    test("Should book available ticket on Zootopia", async () => {
      await clickElement(page, "body nav a:nth-child(3)");
      await clickElement(page, "body main section:nth-child(1) div:nth-child(2) ul li:nth-child(3) a");
      await clickElement(page, ".buying-scheme__wrapper div:nth-child(4) span:nth-child(2)");
      await clickElement(page, "button.acceptin-button");
      await page.waitForSelector("h2.ticket__check-title");
      await clickElement(page, "button.acceptin-button");
      const actual = await getText(page, "h2.ticket__check-title");
      expect(actual).toContain("Электронный билет");
    }); 
  
    test("Should book some available tickets on Zootopia", async () => {
      await clickElement(page, "body nav a:nth-child(3)");
      await clickElement(page, "body main section:nth-child(1) div:nth-child(2) ul li:nth-child(3) a");
      await clickElement(page, ".buying-scheme__wrapper div:nth-child(1) span:nth-child(1)");
      await clickElement(page, ".buying-scheme__wrapper div:nth-child(1) span:nth-child(2)");
      await clickElement(page, "button.acceptin-button");
      await page.waitForSelector("h2.ticket__check-title");
      await clickElement(page, "button.acceptin-button");
      const actual = await getText(page, "h2.ticket__check-title");
      expect(actual).toContain("Электронный билет");
    }); 
  
    test("Should try to book unavailable ticket on Zootopia, but unsuccessfully", async () => {
      await clickElement(page, "body nav a:nth-child(2)");
      await clickElement(page, "body main section:nth-child(1) div:nth-child(2) ul li:nth-child(3) a");
      await clickElement(page, ".buying-scheme__wrapper div:nth-child(4) span:nth-child(2)");
      expect(
        String(
          await page.$eval("button", (button) => {
            return button.disabled;
          })
        )
      ).toContain("true");
    });
  }); 