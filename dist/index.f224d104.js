$(document).ready(function() {
    function checkWidth() {
        var windowWidth = $("body").innerWidth();
        const elem = $(".slider");
        const block = $(".block");
        const firstBlock = $("#first");
        if (windowWidth < 767) {
            elem.removeClass("posts__wrapper").addClass("slideshow-container");
            block.removeClass("posts__block").addClass("mySlides");
            block.css("display", "none");
            firstBlock.css("display", "block");
        } else {
            elem.removeClass("slideshow-container").addClass("posts__wrapper");
            block.removeClass("mySlides").addClass("posts__block");
            block.css("display", "block");
            firstBlock.css("display", "block");
        }
    }
    checkWidth();
    $(window).resize(function() {
        checkWidth();
    });
});
let slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;
    for(i = 0; i < slides.length; i++)slides[i].style.display = "none";
    for(i = 0; i < dots.length; i++)dots[i].className = dots[i].className.replace(" active", "");
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

//# sourceMappingURL=index.f224d104.js.map
