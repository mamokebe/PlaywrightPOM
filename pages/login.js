exports.LoginPage =class LoginPage {

  constractor(page) {

    this.page = page
    username_textbox = page.getByLabel('Username')
    password_textbox = page.getByLabel('Password')
    login_button = page.getByRole('button', { name: ' Login' })
  }

  async gotoLoginPage(){
    await this.page.goto('https://the-internet.herokuapp.com/login');
  }

  async login(username,password){
    await this.username_textbox.fill(username)
    await this.password_textbox.fill(password)
    await this.login_button.click()

  }

  
}