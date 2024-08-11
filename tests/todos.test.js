import {test,expect} from '@playwright/test'

test('This should be running', async ({page}) => {
    await page.goto('http://localhost:3000');
    const textbox = page.getByRole("textbox") 
    await textbox.fill('secret');              
    await expect(textbox).toHaveValue('secret') 
    

})

test('To do list', async ({page}) => {
    await page.goto('http://localhost:3000');
    const header = page.getByRole('heading', {name: "Todo List App"})
    await expect(header).toBeVisible()
})
