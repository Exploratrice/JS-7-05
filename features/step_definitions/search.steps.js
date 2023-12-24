const puppeteer = require("puppeteer");
const chai = require("chai");
const expect = chai.expect;
const { Given, When, Then, Before, After, /*setDefaultTimeout*/ } = require("cucumber");
const { putText, getText } = require("../../lib/commands.js");
 
// setDefaultTimeout(60000);

Before(async function () {
  const browser = await puppeteer.launch({ headless: false, slowMo: 50 });
  const page = await browser.newPage();
  this.browser = browser;
  this.page = page;
});

After(async function () {
  if (this.browser) {
    await this.browser.close();
  }
});

Given("user is on page {string}", async function (string) {
  return await this.page.goto(`${string}`, { setTimeout: 60000, });
});

When("user chooses date", async function () {
  return await clickElement(this.page, "body nav a:nth-child(3)");
});
When("user choose date that has been choosen earlier", async function () {
  return await clickElement(this.page, "body nav a:nth-child(3)");
  });
When("user chooses time of a movie", async function () {
  return await clickElement(this.page, "body main section:nth-child(1) div:nth-child(2) ul li:nth-child(3) a");
});
When("user chooses time of a movie that has been choosen earlier", async function () {
  return await clickElement(this.page, "body main section:nth-child(1) div:nth-child(2) ul li:nth-child(3) a");
  });
When("user chooses the first sit", async function () {
  return await clickElement(
    this.page,
    ".buying-scheme__wrapper div:nth-child(1) span:nth-child(1)"
  );
});
When("user chooses the second sit", async function () {
  return await clickElement(
    this.page,
    ".buying-scheme__wrapper div:nth-child(1) span:nth-child(2)"
  );
});
When("user chooses a sit", async function () {
  return await clickElement(
    this.page,
    ".buying-scheme__wrapper div:nth-child(4) span:nth-child(2)"
  );
});
When("user chooses a sit that has been choosen earlier", async function () {
  return await clickElement(
    this.page,
    ".buying-scheme__wrapper div:nth-child(1) span:nth-child(1)"
  );
});
When("user clicks on the booking button", async function () {
  return await clickElement(this.page, "button.acceptin-button");
});
When("user clicks on the button to get booking code", async function () {
  return await clickElement(this.page, "button.acceptin-button");
});

Then("user gets the code and the header {string}", async function (string) {
  const actual = await getText(this.page, "h2.ticket__check-title");
  const expected = await string;
  expect(actual).contains(expected);
});

Then("button for booking is inactive {string}", async function (string) {
  const actual = String(
    await this.page.$eval("button", (button) => {
      return button.disabled;
    })
  );
  const expected = await string;
  expect(actual).contains(expected);
});