const one =document.getElementsByClassName('toggle-collapse');
const nav = document.getElementsByClassName('nav');
one.addEventListener("click",()=>{
nav.toggleClass('collapse')
})
// $(document).ready(function () {

//     $nav = $('.nav');
//     $toggleCollapse = $('.toggle-collapse');

//     /** click event on toggle menu */
//     $toggleCollapse.click(function () {
//         $nav.toggleClass('collapse');
//     })

//     // owl-crousel for blog
  

// });