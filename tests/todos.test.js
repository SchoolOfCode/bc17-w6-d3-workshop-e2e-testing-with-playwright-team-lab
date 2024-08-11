import {test,expect} from '@playwright/test'

test('This should be running', async ({page}) => {
    // ticket 4
    await page.goto('http://localhost:3000');
    // ticket 5
    const textbox = page.getByRole("textbox") 
    // ticket 6
    await textbox.fill('secret');              
    // ticket 7
    await expect(textbox).toHaveValue('secret') 
    

})

test('To do list', async ({page}) => {
    await page.goto('http://localhost:3000');
    // task 8
    // 2. see the "Todo List App" heading
    const header = page.getByRole('heading', {name: "Todo List App"})
    await expect(header).toBeVisible()
    // 3. enter a todo into the input with the "New Todo:" label
    const input = page.getByLabel("New Todo");
    await input.fill("a todo")
    await expect(input).toHaveValue("a todo")


})
