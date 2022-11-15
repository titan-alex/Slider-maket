let maxWidth = 1200;
let itemCount = 3;
const slider = document.querySelectorAll(".slider")
let curentIndex = 0;
let curentMargin = 0;
let nextdef = 3;


// MEDIA
addEventListener("resize", () => {
    const wrapper = document.querySelector(".slider")
    const items = wrapper.querySelectorAll(".slider__item");
    if (document.documentElement.clientWidth <= 1250) {
        nextdef = 1;
        wrapper.style.width = maxWidth / itemCount + "px";
        console.log(wrapper.style.width);
    } else {
        nextdef = 3
        wrapper.style.width = maxWidth / itemCount * items.length + "px";
        console.log(wrapper.style.width);
    }
   
})


slider.forEach(slider => {

    const wrapper = slider.querySelector(".slider__container");

    const items = wrapper.querySelectorAll(".slider__item");

    // ALIGNMENT
    items.forEach(item => {
        item.style.width = maxWidth / itemCount + 'px';
    })

    wrapper.style.width = maxWidth / itemCount * items.length + "px";


    // RIGHT CONTROL
    const right = slider.querySelector(".slider__control--r");
    right.addEventListener('click', () => {
        if (curentIndex < items.length - nextdef) {
            curentIndex++;
            curentMargin = curentMargin - 400;
            wrapper.style.marginLeft = curentMargin + 'px';
        }
    })

    // LEFT CONTROL
    const left = slider.querySelector(".slider__control--l");
    left.addEventListener('click', () => {

        if (curentIndex > 0) {
            curentIndex--;
            curentMargin = curentMargin + 400;
            wrapper.style.marginLeft = curentMargin + 'px';
        };
    });
});

