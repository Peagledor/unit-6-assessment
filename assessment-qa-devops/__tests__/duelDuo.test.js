const { Builder, By, Key, until } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser("chrome").build();
});

afterEach(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);

  });

  test("that clicking the Draw button displays the div with id='choices'", async () => {
    
    
    await driver.get("http://localhost:8000");
    const drawButton =  await driver.findElement(By.id("draw"));
    await drawButton.click();

    const choicesDiv =  driver.findElement(By.id("choices"));
    await driver.wait(until.elementIsVisible(choicesDiv), 1000);

    expect(await choicesDiv.isDisplayed()).toBe(true);

  });

  test("that clicking an 'Add to Duo' button displays the div with id='player-duo", async () => {
    
    
    await driver.get("http://localhost:8000");
    const drawButton =  await driver.findElement(By.id("draw"));
    await drawButton.click();
    
    const choicesDiv =  driver.findElement(By.id("choices"));
    await driver.wait(until.elementIsVisible(choicesDiv), 1000);

    const addToDuoButton =  driver.findElement(By.css('.bot-btn'));
    await addToDuoButton.click();
    
    const playerDuoDiv =  driver.findElement(By.id("player-duo"));
    await driver.wait(until.elementIsVisible(playerDuoDiv), 1000);
    
    expect(await playerDuoDiv.isDisplayed()).toBe(true);

  })
});