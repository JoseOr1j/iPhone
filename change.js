var alliPhonesImg = ['iPhone7_black', 'iPhone7_gold', 'iPhone7_jetblack', 'iPhone7_rosegold', 'iPhone7_silver'];
var imgPro = document.querySelector('.imgPro images');
var allColors = document.querySelector('.allColors li');


allColors.forEach(colors => colors.addEventListener('click', function (elem)
{
    for (var i = 0; i < allColors.length; i++)
    {
        allColors[i].classList.remove('active');
    }

    if(this.className === 'black')
    {
imgPro.src = 'images/'+alliPhonesImg[0]+'.png';
    imgPro.classList.add('animate');
    }

    if(this.className === 'gold')
    {
imgPro.src = 'images/'+alliPhonesImg[1]+'.png';    
    imgPro.classList.add('animate');
    }

    if(this.className === 'jetblack')
    {
imgPro.src = 'images/'+alliPhonesImg[2]+'.png';
    imgPro.classList.add('animate');
    }

    if(this.className === 'rosegold')
    {
imgPro.src = 'images/'+alliPhonesImg[3]+'.png';
    imgPro.classList.add('animate');
    }

    if(this.className === 'silver')
    {
imgPro.src = 'images/'+alliPhonesImg[4]+'.png';
    imgPro.classList.add('animate');
    }

    // when clicks a color the color is changed
// 26:09 Has to check what the page looks like 

    this.classList.add('active');
    setTimeout(function()
    {
        imgPro.classList.remove('animate');
    }, 500);
}))

