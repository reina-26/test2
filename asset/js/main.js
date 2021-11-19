'use strict';
// const window_width = window.innerWidth;
// alert(window_width);

// alert(window_width);

// const win_width = window.innerWidth;
// alert(win_width);






// const nul1 = 5;
// const nul2 = 8;

// alert(nul1 + nul2);



// const text1 = "リンゴ・バナナ";
// const text2 = "レモン";

// const result = text1 + text2;

// const jo = result.replace('バナナ', "");

// console.log(jo);

// document.querySelector(.apple).addEventListener('click',
//   function () {

//   }
// )

// $(function () {
//   $('li').on('click', function () {
//     alert($(this).attr('class'));
//   });
// });

// document.getElementsByTagName('li').addEventListener('click',
//   function () {
//     alert($(this).dataset);
//   }
// )

// $(function () {
//   $('[data-delete]').on('click', function () {
//     let my_attr = $(this).attr('data-delete');
//     $('[data-delete-target]').attr(my_attr, '');
//     // console.log(my_attr);
//   });
// });

'use strict';
// document.querySelector('.box__item').addEventListener('click', function () {
//   document.querySelector('.box__item').style.background = 'yellow';
// })

// const target = document.querySelectorAll('.box__item');


// // console.log(targetItem);

// for (let i in target) {
//   const targetItem = target[i];
//   targetItem.addEventListener('click', function () {
//     this.style.background = 'yellow';
//   })
// }

// 'use strict';
// document.querySelectorAll('.box__item').addEventListener('click', function () {
//   document.querySelector('.box__item').style.background = 'yellow';
// })

const target = document.querySelectorAll('.box__item');

for (let i in target) {
  const targetItem = target[i];
  targetItem.addEventListener('click', function () {
    // this.style.background = 'yellow';
    // this.classList.toggle('ul-color-yellow');
  })
}
console.log(targetItem);
