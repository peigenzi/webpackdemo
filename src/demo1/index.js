import sum from './js/sum'
console.log('sum(1,2)=', sum(1, 2))

const minus = require('./js/minus')
console.log('minus(1,2)=', minus(1, 2))

require(['./js/multi'], function (multi) {
  console.log('multi(1,2)=', multi(1, 2))
})