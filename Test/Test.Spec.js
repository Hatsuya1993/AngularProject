// import {
//   browser,
//   element,
//   by,
// } from 'protractor'
// import {
//   protractor
// } from 'protractor/built/ptor';

const {
  browser,
  element,
  by
} = require("protractor");
const {
  protractor
} = require("protractor/built/ptor");

describe('Test Suite', function () {

  it('Successfull register for new users', function () {

    browser.get('http://localhost:4200/login');

    element(by.xpath('//*[@id="navbarNav"]/ul/li[1]/a')).click()

    element(by.xpath('//*[@id="exampleInputName1"]')).sendKeys('Qaz')

    element(by.xpath('//*[@id="exampleInputAge1"]')).sendKeys('26')

    element(by.xpath('//*[@id="mat-checkbox-8"]/label/span[1]')).click()

    element(by.xpath('//*[@id="exampleInputEmail1"]')).sendKeys('hazrul@hotmail.com')

    element(by.xpath('//*[@id="exampleInputPassword1"]')).sendKeys('!Qaz12345')

    element(by.xpath('//*[@id="registerButton"]')).click()

    var name = element(by.xpath('//*[@id="name"]'))
    var password = element(by.xpath('//*[@id="password"]'))

    expect(name.getText()).toEqual('Name')
    expect(password.getText()).toEqual('Password')

  })

  it('Login success', function () {

    browser.get('http://localhost:4200/login');

    element(by.xpath('//*[@id="exampleInputEmail1"]')).sendKeys('Qaz')

    element(by.xpath('//*[@id="exampleInputPassword1"]')).sendKeys('!Qaz12345')

    element(by.xpath('//*[@id="submitButton"]')).click().then(function () {
      browser.waitForAngular();
      expect(browser.getCurrentUrl()).toEqual("http://localhost:4200/user/Qaz");
    })
  })

  it('Login unsuccessful', function () {

    browser.get('http://localhost:4200/login');

    element(by.xpath('//*[@id="exampleInputEmail1"]')).sendKeys('rfv')

    element(by.xpath('//*[@id="exampleInputPassword1"]')).sendKeys('rfv')

    element(by.xpath('//*[@id="submitButton"]')).click().then(function () {
      browser.waitForAngular();
      expect(browser.getCurrentUrl()).toEqual("http://localhost:4200/user/Qaz");
    })
  })

  it('Insurance registration', function () {

    browser.get('http://localhost:4200/login');

    element(by.xpath('//*[@id="exampleInputEmail1"]')).sendKeys('Qaz')

    element(by.xpath('//*[@id="exampleInputPassword1"]')).sendKeys('!Qaz12345')

    element(by.xpath('//*[@id="submitButton"]')).click()

    element(by.xpath('//*[@id="insuranceSelect"]/div/div[1]')).click()

    element(by.xpath('//*[@id="mat-option-0"]/mat-pseudo-checkbox')).click()

    element(by.xpath('//*[@id="submitSelection"]')).click()

    browser.sleep(3000)

    expect(browser.getCurrentUrl()).toEqual("http://localhost:4200/login");
    var name = element(by.xpath('//*[@id="name"]'))
    var password = element(by.xpath('//*[@id="password"]'))
    expect(name.getText()).toEqual('Name')
    expect(password.getText()).toEqual('Password')

  })

  it('Login as guest', function () {

    browser.get('http://localhost:4200/login');

    element(by.xpath('//*[@id="loginGuestButton"]')).click()

    element(by.xpath('//*[@id="exampleInputName1"]')).sendKeys('frank')

    element(by.xpath('//*[@id="exampleInputAge1"]')).sendKeys('23')

    element(by.xpath('//*[@id="mat-checkbox-8"]/label/span[1]')).click()

    element(by.xpath('//*[@id="exampleInputEmail1"]')).sendKeys('gal123@hotmail.com')

    element(by.xpath('//*[@id="submitGuest"]')).click().then(function () {
      browser.waitForAngular();
      expect(browser.getCurrentUrl()).toEqual("http://localhost:4200/user/frank");
    })
  })

  it('Login as guest and apply insurance', function () {

    browser.get('http://localhost:4200/login');

    element(by.xpath('//*[@id="loginGuestButton"]')).click()

    element(by.xpath('//*[@id="exampleInputName1"]')).sendKeys('frank')

    element(by.xpath('//*[@id="exampleInputAge1"]')).sendKeys('23')

    element(by.xpath('//*[@id="mat-checkbox-8"]/label/span[1]')).click()

    element(by.xpath('//*[@id="exampleInputEmail1"]')).sendKeys('gal123@hotmail.com')

    element(by.xpath('//*[@id="submitGuest"]')).click()

    element(by.xpath('//*[@id="insuranceSelect"]/div/div[1]')).click()

    element(by.xpath('//*[@id="mat-option-0"]/mat-pseudo-checkbox')).click()

    element(by.xpath('//*[@id="submitSelection"]')).click()

    browser.sleep(3000)

    expect(browser.getCurrentUrl()).toEqual("http://localhost:4200/login");
    var name = element(by.xpath('//*[@id="name"]'))
    var password = element(by.xpath('//*[@id="password"]'))
    expect(name.getText()).toEqual('Name')
    expect(password.getText()).toEqual('Password')

  })
})
