//动态加载css
// window.addEventListener('mousedown', () => {
//   import('./theme1.css');
// });

// window.addEventListener('mouseup', () => {
//   import('./theme2.css');
// });

//内联css，会打包一个js，用以动态生成css
import './inline.css';

// 动态加载卸载css
// import t1 from './theme1.css';
// let flag = false;
// window.addEventListener('click', () => {
//   if (flag) {
//     t1.use();
//     flag = !flag;
//   } else {
//     t1.unuse();
//     flag = !flag;
//   }
// });
