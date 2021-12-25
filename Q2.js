// let i = 0 // declare a mutable variable
// i += 1 // add one to the variable
// console.log(i) // log the variable
// aysnc file
// const fs = require('fs')
// const content = 'Logging to a file'
// fs.writeFile('test.txt', content, err => {
//     if (err) {
//         throw err
//     }
//     console.log('logs completed')
// })
// console.log('end script')

// const fs = require('fs')
// const content = 'Logging to a file'
// try {
//     fs.writeFileSync('test.txt', content)
//     console.log('logs completed')
// } catch (err) {
//     throw err
// }
// .from({ length: 5 }, (v, i) => i + 1)
// .forEach(value => console.log(value))

// const request = new XMLHttpRequest()
// request.open('GET', 'https://httpstat.us', false)
// request.send(null)

// if (request.status === 200) {
//   console.log(request.responseText)
// }
// const database = require('thecoolestnewestdbframework')
// database('table')
//     .select('*')
//     .asCallback((err, res) => {
//         if (err) {
//             throw err
//         }
//         // do something with the result
//     })
let done = true

const isItDoneYet = new Promise((resolve, reject) => {
  if (done) {
    const workDone = 'Here is the thing I built'
    resolve(workDone)
  } else {
    const why = 'Still working on something else'
    reject(why)
  }
})
