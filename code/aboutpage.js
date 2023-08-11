/*----Slideshow-----*/
document.getElementById("card_st").src = "media/Cards/Units/Ava_Dreadnought.png";
document.getElementById("card_nd").src = "media/Cards/Units/Laire_Shadows.png";
document.getElementById("card_rd").src = "media/Cards/Units/Mayo_Senate.png";
document.getElementById("card_th").src = "media/Cards/Units/Shei.png";
document.getElementById("slideshowimages").src = "media/slide1.png";
let currentSlide = 1;

function prevSlide()
{
    if (currentSlide <= 1)
    {
        currentSlide = 4;
    }
    else
    {
        currentSlide--;
    }
    changeSlide(currentSlide);
}

function nextSlide()
{
    if (currentSlide >= 4)
    {
        currentSlide = 1;
    }
    else
    {
        currentSlide++;
    }
    changeSlide(currentSlide);
}

function changeSlide(slide)
{
    switch(slide)
    {
        case 1:
            document.getElementById("slideshowimages").src = "media/slide1.png";
            break;
        case 2:
            document.getElementById("slideshowimages").src = "media/slide2.png";
            break;
        case 3:
            document.getElementById("slideshowimages").src = "media/slide3.png";
            break;
        case 4:
            document.getElementById("slideshowimages").src = "media/slide4.png";
            break;
        default:
            console.log("Error");
            break;
    }
}

window.onload(autoslide());
function autoslide() {setTimeout(() => {nextSlide();autoslide()}, 3000);};

function changeCardShowcase(n)
{
    switch(n)
    {
        case 1:
            document.getElementById("card_st").src = "media/Cards/Units/Ava_Dreadnought.png";
            document.getElementById("card_nd").src = "media/Cards/Units/Laire_Shadows.png";
            document.getElementById("card_rd").src = "media/Cards/Units/Mayo_Senate.png";
            document.getElementById("card_th").src = "media/Cards/Units/Shei.png";
            break;
        case 2:
            document.getElementById("card_st").src = "media/Cards/Tricks/t_17++.png";
            document.getElementById("card_nd").src = "media/Cards/Tricks/t_27.png";
            document.getElementById("card_rd").src = "media/Cards/Tricks/t_37.png";
            document.getElementById("card_th").src = "media/Cards/Tricks/t_42.png";
            break;
        case 3:
            document.getElementById("card_st").src = "media/Cards/Fusion/Arsenal.png";
            document.getElementById("card_nd").src = "media/Cards/Fusion/Power.png";
            document.getElementById("card_rd").src = "media/Cards/Fusion/Status.png";
            document.getElementById("card_th").src = "media/Cards/Fusion/Wealth.png";
            break;
        case 4:
            document.getElementById("card_st").src = "media/Cards/Items/DevilDice.png";
            document.getElementById("card_nd").src = "media/Cards/Items/Pan.png";
            document.getElementById("card_rd").src = "media/Cards/Items/Sickle_Hook.png";
            document.getElementById("card_th").src = "media/Cards/Items/Skullsplitter_Destruction.png";
            break;
        case 5:
            document.getElementById("card_st").src = "media/Cards/Directory/Dayl_Mount.png";
            document.getElementById("card_nd").src = "media/Cards/Directory/Hole.png";
            document.getElementById("card_rd").src = "media/Cards/Directory/Juicer_Juggernog.png";
            document.getElementById("card_th").src = "media/Cards/Directory/Monastery.png";
            break;
        default:
            console.log("error");
            break;
    }
}