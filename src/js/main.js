$ = require('jquery');

$(document).ready(function(){
    (function( $ ) {
        $.fn.backgroundZoomPlugin = function() {
            let background_zoom_plugin = this;
            $(window).on('scroll', () => {
                let finalHeightPercent = 150;
                let screenScroll = $(window).scrollTop();
                let fimScroll = background_zoom_plugin.offset().top + background_zoom_plugin.height();
                if((screenScroll > background_zoom_plugin.offset().top) && (screenScroll < fimScroll)){
                    let finalHeight = ((finalHeightPercent) * background_zoom_plugin.height() / 100) - background_zoom_plugin.height();
                    let sizePerHeight = finalHeight / background_zoom_plugin.height();
                    let backgroundNewSize = (sizePerHeight * (screenScroll - background_zoom_plugin.offset().top)) + background_zoom_plugin.height();
                    let backgroundNewSizePercent = backgroundNewSize / background_zoom_plugin.height() * 100;
                    let backgroundNewSizePercentString = backgroundNewSizePercent + '% auto';
                    background_zoom_plugin.css('background-size', backgroundNewSizePercentString);
                }
            })
        };
    })( $ );
})
