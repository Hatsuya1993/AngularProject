// import {browser, element, by,} from 'protractor'
// import { protractor } from 'protractor/built/ptor';

const { browser, element } = require("protractor");

describe('Test Suite', function() {

  it('Successfull register for new users', function() {

    browser.get('http://localhost:4200/login');

    element(by.xpath('//*[@id="navbarNav"]/ul/li[1]/a')).click()

    // browser.sleep(1000)

    element(by.xpath('//*[@id="exampleInputName1"]')).sendKeys('Hazrul')

    // browser.sleep(1000)

    element(by.xpath('//*[@id="exampleInputAge1"]')).sendKeys('56')

    // browser.sleep(1000)

    element(by.xpath('//*[@id="exampleInputCondition1"]')).sendKeys('Healthy')

    // browser.sleep(1000)

    element(by.xpath('//*[@id="exampleInputEmail1"]')).sendKeys('hazrul@hot.com')

    // browser.sleep(1000)

    element(by.xpath('//*[@id="exampleInputPassword1"]')).sendKeys('!Qaz123456')

    // browser.sleep(1000)

    element(by.xpath('//*[@id="registerButton"]')).click()

    // browser.sleep(1000)

    var name = element(by.xpath('//*[@id="name"]'))
    var password = element(by.xpath('//*[@id="password"]'))

    expect(name.getText()).toEqual('Name')
    expect(password.getText()).toEqual('Password')

    // browser.sleep(1000)

    // var success = element(by.xpath('//*[@id="successRegister"]'))

    // expect(success.getText()).toEqual('successfully register')
  })

  it('Successfully logged in and retrieving the greeting', function() {
    browser.get('http://localhost:4200/login');

    element(by.xpath('//*[@id="exampleInputEmail1"]')).sendKeys('Hazrul');

    // browser.sleep(1000)

    element(by.xpath('//*[@id="exampleInputPassword1"]')).sendKeys('!Qaz123456');

    // browser.sleep(1000)

    element(by.xpath('//*[@id="submitButton"]')).click()

    // browser.sleep(1000)

    var greeting = element(by.xpath('//*[@id="greeting"]'))

    expect(greeting.getText()).toEqual('Hello Hazrul')

    // browser.sleep(1000)

  });

  it('Unsuccessful login attempt', function() {

    browser.get('http://localhost:4200/login');

    element(by.xpath('//*[@id="exampleInputEmail1"]')).sendKeys('qaz');

    // browser.sleep(1000)

    element(by.xpath('//*[@id="exampleInputPassword1"]')).sendKeys('zxc');

    // browser.sleep(1000)

    element(by.xpath('//*[@id="submitButton"]')).click()

    // browser.sleep(500)

    var name = element(by.xpath('//*[@id="name"]'))
    var password = element(by.xpath('//*[@id="password"]'))

    expect(name.getText()).toEqual('Name')
    expect(password.getText()).toEqual('Password')

    // browser.sleep(1000)

    // var unsuccess = element(by.xpath('//*[@id="errorLogin"]'))

    // expect(unsuccess.getText()).toEqual('Submit')

  })

  it('Logout from user', function() {

    browser.get('http://localhost:4200/login');

    element(by.xpath('//*[@id="exampleInputEmail1"]')).sendKeys('Hazrul');

    // browser.sleep(1000)

    element(by.xpath('//*[@id="exampleInputPassword1"]')).sendKeys('!Qaz123456');

    // browser.sleep(1000)

    element(by.xpath('//*[@id="submitButton"]')).click()

    // browser.sleep(1000)

    element(by.xpath('//*[@id="logoutButton"]')).click()

    // browser.sleep(1000)

    var name = element(by.xpath('//*[@id="name"]'))
    var password = element(by.xpath('//*[@id="password"]'))

    expect(name.getText()).toEqual('Name')
    expect(password.getText()).toEqual('Password')

    // browser.sleep(1000)

  })

    it('All Insurance available for age < 50', function() {

    browser.get('http://localhost:4200/login');

    element(by.xpath('//*[@id="navbarNav"]/ul/li[1]/a')).click()

    // browser.sleep(1000)

    element(by.xpath('//*[@id="exampleInputName1"]')).sendKeys('Hazrul')

    // browser.sleep(1000)

    element(by.xpath('//*[@id="exampleInputAge1"]')).sendKeys('24')

    // browser.sleep(1000)

    element(by.xpath('//*[@id="exampleInputCondition1"]')).sendKeys('Healthy')

    // browser.sleep(1000)

    element(by.xpath('//*[@id="exampleInputEmail1"]')).sendKeys('hazrul@hot.com')

    // browser.sleep(1000)

    element(by.xpath('//*[@id="exampleInputPassword1"]')).sendKeys('!Qaz1234567')

    // browser.sleep(1000)

    element(by.xpath('//*[@id="registerButton"]')).click()

    // browser.sleep(1000)

    element(by.xpath('//*[@id="exampleInputEmail1"]')).sendKeys('Hazrul');

    // browser.sleep(1000)

    element(by.xpath('//*[@id="exampleInputPassword1"]')).sendKeys('!Qaz1234567');

    // browser.sleep(1000)

    element(by.xpath('//*[@id="submitButton"]')).click()

    // browser.sleep(1000)

    element(by.xpath('//*[@id="insuranceSelect"]')).click()

    // browser.sleep(1000)

    var disbilityIncomeInsurance = element(by.xpath('//*[@id="mat-option-0"]/span'))
    var lifeInsurance = element(by.xpath('//*[@id="mat-option-1"]/span'))
    var healthInsurance = element(by.xpath('//*[@id="mat-option-2"]/span'))
    var criticalIllnessInsurance = element(by.xpath('//*[@id="mat-option-3"]/span'))

    expect(disbilityIncomeInsurance.getText()).toEqual('Disability income insurance')
    expect(lifeInsurance.getText()).toEqual('Life Insurance')
    expect(healthInsurance.getText()).toEqual('Health Insurance')
    expect(criticalIllnessInsurance.getText()).toEqual('Critical illness insurance')

    // browser.sleep(3000)

  })

    it('Some Insurance available for age > 56', function() {

    browser.get('http://localhost:4200/login');

    element(by.xpath('//*[@id="navbarNav"]/ul/li[1]/a')).click()

    // browser.sleep(1000)

    element(by.xpath('//*[@id="exampleInputName1"]')).sendKeys('Hazrul')

    // browser.sleep(1000)

    element(by.xpath('//*[@id="exampleInputAge1"]')).sendKeys('56')

    // browser.sleep(1000)

    element(by.xpath('//*[@id="exampleInputCondition1"]')).sendKeys('Healthy')

    // browser.sleep(1000)

    element(by.xpath('//*[@id="exampleInputEmail1"]')).sendKeys('hazrul@hot.com')

    // browser.sleep(1000)

    element(by.xpath('//*[@id="exampleInputPassword1"]')).sendKeys('!Qaz12345678')

    // browser.sleep(1000)

    element(by.xpath('//*[@id="registerButton"]')).click()

    // browser.sleep(1000)

    element(by.xpath('//*[@id="exampleInputEmail1"]')).sendKeys('Hazrul');

    // browser.sleep(1000)

    element(by.xpath('//*[@id="exampleInputPassword1"]')).sendKeys('!Qaz12345678');

    // browser.sleep(1000)

    element(by.xpath('//*[@id="submitButton"]')).click()

    // browser.sleep(1000)

    element(by.xpath('//*[@id="insuranceSelect"]')).click()

    // browser.sleep(1000)

    var disbilityIncomeInsurance = element(by.xpath('//*[@id="mat-option-0"]/span'))
    var lifeInsurance = element(by.xpath('//*[@id="mat-option-1"]/span'))
    var healthInsurance = element(by.xpath('//*[@id="mat-option-2"]/span'))
    var criticalIllnessInsurance = element(by.xpath('//*[@id="mat-option-3"]/span'))

    expect(disbilityIncomeInsurance.getText()).toEqual('Not Applicable')
    expect(lifeInsurance.getText()).toEqual('Life Insurance')
    expect(healthInsurance.getText()).toEqual('Not Applicable')
    expect(criticalIllnessInsurance.getText()).toEqual('Critical illness insurance')

    // browser.sleep(3000)

  })

  it('Purchasing service/insurance by placing an order as a registered user', function() {

    browser.get('http://localhost:4200/login');

    // browser.sleep(1000)

    element(by.xpath('//*[@id="exampleInputEmail1"]')).sendKeys('Hazrul');

    // browser.sleep(1000)

    element(by.xpath('//*[@id="exampleInputPassword1"]')).sendKeys('!Qaz1234567');

    // browser.sleep(1000)

    element(by.xpath('//*[@id="submitButton"]')).click()

    // browser.sleep(1000)

    element(by.xpath('//*[@id="insuranceSelect"]')).click()

    // browser.sleep(1000)

    var disbilityIncomeInsurance = element(by.xpath('//*[@id="mat-option-0"]/mat-pseudo-checkbox'))
    var lifeInsurance = element(by.xpath('//*[@id="mat-option-1"]/mat-pseudo-checkbox'))
    var healthInsurance = element(by.xpath('//*[@id="mat-option-2"]/mat-pseudo-checkbox'))
    var criticalIllnessInsurance = element(by.xpath('//*[@id="mat-option-3"]/mat-pseudo-checkbox'))

    disbilityIncomeInsurance.click()
    lifeInsurance.click()
    healthInsurance.click()
    criticalIllnessInsurance.click()

    // browser.sleep(1000)
    
    element(by.xpath('//*[@id="submitSelection"]')).click()

    // browser.sleep(1000)

    var name = element(by.xpath('//*[@id="name"]'))
    var password = element(by.xpath('//*[@id="password"]'))

    expect(name.getText()).toEqual('Name')
    expect(password.getText()).toEqual('Password')

    // browser.sleep(3000)

  })

    it('Purchasing service/insurance by placing an order as a registered user as guest', function() {

    browser.get('http://localhost:4200/login');

    // browser.sleep(1000)

    element(by.xpath('//*[@id="loginGuestButton"]')).click()

    // browser.sleep(1000)

    element(by.xpath('//*[@id="exampleInputName1"]')).sendKeys('zal');

    // browser.sleep(1000)

    element(by.xpath('//*[@id="exampleInputAge1"]')).sendKeys('25');

    // browser.sleep(1000)

    element(by.xpath('//*[@id="exampleInputCondition1"]')).sendKeys('Healthy');

    // browser.sleep(1000)

    element(by.xpath('//*[@id="exampleInputEmail1"]')).sendKeys('haz@hot.com');

    // browser.sleep(1000)

    element(by.xpath('//*[@id="submitGuest"]')).click()

    // browser.sleep(1000)

    element(by.xpath('//*[@id="insuranceSelect"]')).click()

    // browser.sleep(1000)

    var disbilityIncomeInsurance = element(by.xpath('//*[@id="mat-option-0"]/mat-pseudo-checkbox'))
    var lifeInsurance = element(by.xpath('//*[@id="mat-option-1"]/mat-pseudo-checkbox'))
    var healthInsurance = element(by.xpath('//*[@id="mat-option-2"]/mat-pseudo-checkbox'))
    var criticalIllnessInsurance = element(by.xpath('//*[@id="mat-option-3"]/mat-pseudo-checkbox'))

    disbilityIncomeInsurance.click()
    lifeInsurance.click()
    healthInsurance.click()
    criticalIllnessInsurance.click()

    // browser.sleep(1000)
    
    element(by.xpath('//*[@id="submitSelection"]')).click()

    // browser.sleep(1000)

    var name = element(by.xpath('//*[@id="name"]'))
    var password = element(by.xpath('//*[@id="password"]'))

    expect(name.getText()).toEqual('Name')
    expect(password.getText()).toEqual('Password')

    // browser.sleep(3000)

  })

});
