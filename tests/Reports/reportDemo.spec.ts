import {expect, test} from '@playwright/test';

test('radiobutton', async({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator('#male').check();
    await expect(page.locator('#male')).toBeChecked();
})

test('Basic Assertions', async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com")
    await expect(page).toHaveURL("https://testautomationpractice.blogspot.com") //hard assertion -
    await expect.soft(page).toHaveTitle("Automation Testing Practice")
})

test("shadow DOM", async ({page}) => {

    await page.goto ('https://books-pwakit.appspot.com/')
    await page.locator('#input').fill('testing books')
})