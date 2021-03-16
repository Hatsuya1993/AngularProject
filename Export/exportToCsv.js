const axios = require('axios').default
const { Parser } = require('json2csv')
const schedule = require('node-schedule')

let insuranceRegistered = "https://604c607fd3e3e10017d518a0.mockapi.io/RegisteredInsurance"

const job = schedule.scheduleJob('23 * * *', () => {
    axios.get(insuranceRegistered).then(el =>{ csv = json2csvParser.parse(el.data)}).then(data => {
    console.log(csv)
})  
})