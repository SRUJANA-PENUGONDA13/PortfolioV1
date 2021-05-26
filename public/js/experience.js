
function defaultSlide()
{
    var slideIndex = 1;
    showSlides(slideIndex);
}

function currentSlide(n) 
{
  showSlides(n);
}

function showSlides(n) 
{
    var i;
    var slides = document.getElementsByClassName("experience-info");
    var dots = document.getElementsByClassName("dot");
    var slideIndex = n;
    if (n > slides.length)
    {
        slideIndex = 1
    }    
    if (n < 1) 
    {
        slideIndex = slides.length
    }
    if (n > 1)
    {
        slides[1].style.display = "flex"; 
        slides[0].style.display = "none"; 
    }
    if (n == 1)
    {
        slides[0].style.display = "flex"; 
        slides[1].style.display = "none";
    }
    console.log(n)
}