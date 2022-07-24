const path = require('path')


console.log(path.join('content', "second.txt"))

console.log(path.resolve(__dirname, 'content', 'first.txt'))