require('dotenv').config();
const { client } = require('nightwatch-api');
const { Given, Then, When, Before } = require('cucumber');
const loginPage = client.page.loginPage()
const homePage = client.page.homePage()

Before(() => {
  loginPage.maximizeWindow()
});

Given(/^\I open the login page$/, () => {
  return loginPage
    .navigate()
    .assert.title('Swag Labs')
});

When(/^I enter my username$/, () => {
  return loginPage
    .setUsername(process.env.VALID_USER)
});

When(/^I enter my password$/, () => {
  return loginPage
    .setPassword(process.env.VALID_PASSWORD)
});

When(/^I enter my wrong user: "([^"]*)"$/, (string) => {
  return loginPage
    .setUsername(string)
}); 

When(/^I enter my wrong password: "([^"]*)"$/, (string) => {
  return loginPage
    .setPassword(string)
});

When(/^I click on the login button$/, () => {
  return loginPage
    .click('@loginButton')
});

Then(/^I\'m able to access the homepage$/, () => {
  return homePage
    .waitForElementVisible('@productLabel')
    .expect.element('@productLabel').text.to.equal('PRODUCTS')
});

Then(/^I am able to see the error: "([^"]*)"$/, (string) => {
  return loginPage
    .waitForElementVisible('@errorMessage')
    .expect.element('@errorMessage').text.to.equal(string)
});