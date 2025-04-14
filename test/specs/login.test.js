import {  expect, driver } from '@wdio/globals'
import homePage from '../pageobjects/home.page.js'
import loginPage from '../pageobjects/login.page.js'
import profilePage from '../pageobjects/profile.page.js'


describe('My App', () => {
    it('should open and close the application', async () => {
        await homePage.openMenu('profile')
        await loginPage.login('ebac2406@hotmail.com', 'ebac1234')
        await homePage.openMenu('profile')
        expect((await profilePage.profileName('ebac ebac')).isDisplayed()).toBeTruthy()
                   
        
    })
})
