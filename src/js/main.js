window.addEventListener('scroll', function(){
    var screenHeight = window.innerHeight;
    var screenScroll = this.scrollY;
    var background = document.getElementsByClassName("background-grow")[0];
    var fimScroll = background.offsetTop + background.offsetHeight;
    var finalHeightPercent = 150;
    if((screenScroll > background.offsetTop) && (screenScroll < fimScroll)){
        var finalHeight = ((finalHeightPercent) * background.offsetHeight / 100) - background.offsetHeight;
        var sizePerHeight = finalHeight / background.offsetHeight;
        var backgroundNewSize = (sizePerHeight * (screenScroll - background.offsetTop)) + background.offsetHeight;
        var backgroundNewSizePercent = backgroundNewSize / background.offsetHeight * 100;
        background.style.backgroundSize = backgroundNewSizePercent + '% auto';
    }
});
