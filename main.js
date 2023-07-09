
let scrollTop = document.querySelector(".scrollTop");
let scrollHight = document.querySelector(".scrollhight");



window.addEventListener("scroll", () => {
    let mainHight = document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
    let persent = document.documentElement.scrollTop / mainHight
    scrollHight.style.width = ` ${persent * 100}%`;
    // scrollToTop

    scrollToTop() 
 
})

scrollTop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});
 

function scrollToTop() {
    if (window.scrollY > 600) {
        scrollTop.style.display = "block";


    } else {
        scrollTop.style.display = "none"
    }
}