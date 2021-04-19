require('dotenv').config();
module.exports ={
    'Invalid Login Test'(browser)
    {
        const usernamevalue= process.env.INVALID_USER
        const passwordvalue= process.env.INVALID_PASSWORD
        const page= browser.page.loginPage();

        
        page
        .navigate()
        .waitElement('@loginButton')
        .assert.title("Swag Labs")
        .setUsername(usernamevalue)
        .setPassword(passwordvalue)
        .saveScreenshot('tests_output/FormData.png')
        .clickBtn('@loginButton')
        .waitElement('@errorMessage')
        .expect.element('@errorMessage').text.to.equal('Epic sadface: Username and password do not match any user in this service')
        page.saveScreenshot('tests_output/error.png')

       
    }

}