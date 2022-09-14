const boxes = document.querySelectorAll('.box') /*ye sare .box css/html walo ko arraylist / nodelist me dal dega */
window.addEventListener('scroll', checkBoxes) /*jab scroll karenge tab checkboxes function ko call karenge*/
checkBoxes() /*ye ni call karenge pehle to jab tak scroll nai karenge vo hidden rehenge */
function checkBoxes() {
   console.log(window.innerHeight)
   const triggerBottom = window.innerHeight*0.8; /*innerheight ke 4/5 ki position */
   boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top /*returns DOM rectangle object and its position relative to viewport*/
        if (boxTop < triggerBottom) {
            box.classList.add('show')
        }
        else {
            box.classList.remove('show')
        }
   })
}