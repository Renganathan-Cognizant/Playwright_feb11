import { chromium, test} from "@playwright/test";

test("kickstart", async () => {
    const browser = await chromium.launch({channel: 'chrome', headless: false})
    const context = await browser.newContext() // Create a new browser context
    const page = await context.newPage();

    await page.goto("https://www.google.com/")
})

//page.click


