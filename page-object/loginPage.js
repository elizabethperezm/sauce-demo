module.exports = {
    url:'https://www.saucedemo.com',
    elements:
    {
        username :'[data-test="username"]',
        password: '[data-test="password"]',
        loginButton: '#login-button',
        errorMessage: '[data-test="error"]'

    },
    commands:[{
        clickBtn(selector){
            return this
            .click(selector)
            
        },
        waitElement(selector){
            return this
            .waitForElementVisible(selector)
            
        },
        setUsername(username) {
            this
              .waitForElementVisible('@username')
              .setValue('@username', `${username}`)
            return this
          },
      
          setPassword(password) {
            this
              .waitForElementVisible('@password')
              .setValue('@password', `${password}`)
            return this
          }
    }]


}
