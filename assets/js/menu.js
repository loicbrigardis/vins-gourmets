const $headerLinks = document.querySelector('.header__nav');

$headerLinks.addEventListener('mouseover', handleMenu);
$headerLinks.addEventListener('mouseout', handleMenu);

function handleMenu(e) {

}

// function handleMenu(e) {
//     if (e.target.tagName === "A" && e.target.parentNode.classList.length > 0) {
//         const anchor = e.target.parentNode.classList[0];
//         const menu = document.querySelector(`.menu__sub > .${anchor}`);
//         if (e.type === 'mouseover') {
//             console.log('1');
//             toVisible(menu);
//         } else {
//             menu.addEventListener('mouseover', (e) => {
//                 toVisible(menu);
//             })
//             menu.addEventListener('mouseout', (e) => {
//                 toInvisible(menu);
//             })
//             // toInvisible(menu);
//         }
//     }
// }

// function toVisible(el) {
//     console.log('over');
//     el.style.opacity = 1;
//     el.style.visibility = "visible";
// }

// function toInvisible(el) {
//     console.log('leave');
//     el.style.opacity = 0;
//     el.style.visibility = "hidden";
// }