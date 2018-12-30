/**
 * requir.ensure(): 只是加载并不执行
 * import(): 加载并且自动执行
 */

// import(/* webpackChunkName: 'suba' */ './suba').then(suba => {
//   // console.log(suba);
// });

// import(/* webpackChunkName: 'subb' */ './subb').then(subb => {
//   // console.log(subb);
// });

let el = document.querySelector('button')

el.addEventListener('click', () => {
  import(/* webpackChunkName: 'suba' */ './suba').then(suba => {
    // console.log(suba);
    console.log(suba.default);
  });
})

function handleClickA() {
  
}

require.ensure(
  [],
  () => {
    let subb = require('./subb');
    console.log(subb);
  },
  'subb'
);
