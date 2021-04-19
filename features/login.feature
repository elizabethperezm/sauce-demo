Feature: Login
  In order to valite the Login process with valid and invalid passwords
  As a Tester
  I want to be able to login using my email and password


Scenario: Successful Login

Given I open the login page
When I enter my username
And I enter my password
And I click on the login button
Then I'm able to access the homepage

Scenario Outline: Unsuccessful Login

Given I open the login page
When I enter my wrong user: "<username>"
When I enter my wrong password: "<password>"
And I click on the login button
Then I am able to see the error: "<errorMessage>"

Examples:
| username | password |                               errorMessage                                |
|  USER1   |   TEST   | Epic sadface: Username and password do not match any user in this service |