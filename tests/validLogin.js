require('dotenv').config();
module.exports ={
    'Valid Login Test'(browser)
    {
        const usernamevalue= process.env.VALID_USER
        const passwordvalue= process.env.VALID_PASSWORD
        const page= browser.page.loginPage();

        
        page
        .navigate()
        .waitElement('@loginButton')
        .assert.title("Swag Labs")
        .setUsername(usernamevalue)
        .setPassword(passwordvalue)
        .clickBtn('@loginButton')
        
    }


}
