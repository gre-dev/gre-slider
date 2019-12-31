// This project was made by GRE Development (www.gredev.net/en)

(function ($) {

    var thedocument = $(document);
    window.isActive = true;
    $(window).focus(function() { this.isActive = true; });
    $(window).blur(function() { this.isActive = false; });

    $.fn.greSlider = function (options) {

        var settings = $.extend({
            fullscreen: true,
            width: 700,
            height: 500,
            borderRadius: 3,
            delay: 1000,
            dots: true,
            dotsStyle: 'circle',
            dotsPosition: 'bottomLeft',
            dotsColor: '#ccc',
            selectedDotsColor: '#9e9e9e',
            arrowColor: '#ccc',
            arrowsPosition: 'middleSides',
            animation: 'fadeIn',
            rippleColor: '#FFF',
            keyboard: false,
            autoPlay: false,
            onLoad: null
        }, options);

        var status = true;

        return this.each(() => {
            var imgs = [];
            var animations = ['fadeIn','none','slideTop','slideBottom','slideLeft','slideRight','ripple','rotation','theater','slideTheater','triangle'];
            var dotsStyles = ['circle','dash','square'];
            var dotsPositions = ['topLeft','topRight','bottomRight','bottomLeft','middleTop','middleBottom'];
            var arrowsPositions = ['middleSides','topSides','bottomSides','topRight','topLeft','bottomRight','bottomLeft'];

            if (!settings.fullscreen){
                if (!settings.width){
                    console.error('"width" option is not valid or you can set "fullscreen" option to "true" to set it automatically.');
                    status = false;
                }
            }

            if (settings.height <= 50) {
                console.error('"height" option should be greater than 50.');
                status = false;
            }

            if (isNaN(settings.height)) {
                console.error('"height" option should be a real number (pixels).');
                status = false;
            }

            if (isNaN(settings.borderRadius)) {
                console.error('"borderRadius" option should be a real number (pixels).');
                status = false;
            }

            if (!animations.includes(settings.animation)){
                console.error('"animation" option is not valid!');
                status = false;
            }

            if (isNaN(settings.delay)) {
                console.error('"delay" option should be a real number (milliseconds).');
                status = false;
            }

            if (settings.keyboard && settings.autoPlay){
                console.error('You cannot set "true" to both "keyboard" and "autoPlay".');
                status = false;
            }

            if (settings.delay < 1500){
                console.error('"delay" should not be less than 1500 milliseconds.');
                status = false;
            }

            if (settings.animation != 'ripple' && settings.rippleColor != '#FFF'){
                console.warn('There is no need to change the "rippleColor" value if you\'re not using "ripple" animation.');
            }

            if (!dotsStyles.includes(settings.dotsStyle)){
                console.error('"dotsStyle" option is not valid.');
                status = false;
            }

            if (!dotsPositions.includes(settings.dotsPosition)){
                console.error('"dotsPosition" option is not valid.');
                status = false;
            }

            if (!arrowsPositions.includes(settings.arrowsPosition)){
                console.error('"arrowsPosition" option is not valid.');
                status = false;
            }

            if ($.isFunction(settings.onLoad)) {
                if (status){
                    settings.onLoad.call(this);
                }
            } else {
                if (settings.onLoad != null) {
                    console.error('"onLoad" option should be a function.');
                    status = false;
                }
            }

            if (status) {
                var imgcountment = 0;
                var mainSlider = $(this);
                $(this).children().each(function (e) {
                    var perimg = $(this).attr('data-img');
                    imgs.push(perimg);
                    imgcountment++;

                    $(this).attr('data-num', imgcountment);

                    if (settings.animation == 'fadeIn'){
                        $(this).css('position','absolute');
                        $(this).css('width','100%');
                        $(this).css('height','100%');
                        $(this).css('top','0');
                        $(this).css('left','0');
                        $(this).css('background-position','center');
                        $(this).css('background-size','cover');
                        $(this).css('background-repeat','no-reapeat');
                        $(this).css('background-image','url('+perimg+')');
                    }else if (settings.animation == 'none'){
                        $(this).css('position','absolute');
                        $(this).css('width','100%');
                        $(this).css('height','100%');
                        $(this).css('top','0');
                        $(this).css('left','0');
                        $(this).css('background-position','center');
                        $(this).css('background-size','cover');
                        $(this).css('background-repeat','no-reapeat');
                        $(this).css('background-image','url('+perimg+')');
                    }else if (settings.animation == 'slideTop'){
                        $(this).css('position','absolute');
                        $(this).css('width','100%');
                        $(this).css('height','100%');
                        $(this).css('bottom','100%');
                        $(this).css('left','0');
                        $(this).css('background-position','center');
                        $(this).css('background-size','cover');
                        $(this).css('background-repeat','no-reapeat');
                        $(this).css('background-image','url('+perimg+')');
                    }else if (settings.animation == 'slideBottom'){
                        $(this).css('position','absolute');
                        $(this).css('width','100%');
                        $(this).css('height','100%');
                        $(this).css('top','100%');
                        $(this).css('left','0');
                        $(this).css('background-position','center');
                        $(this).css('background-size','cover');
                        $(this).css('background-repeat','no-reapeat');
                        $(this).css('background-image','url('+perimg+')');
                    }else if (settings.animation == 'slideRight'){
                        $(this).css('position','absolute');
                        $(this).css('width','100%');
                        $(this).css('height','100%');
                        $(this).css('bottom','0%');
                        $(this).css('left','100%');
                        $(this).css('background-position','center');
                        $(this).css('background-size','cover');
                        $(this).css('background-repeat','no-reapeat');
                        $(this).css('background-image','url('+perimg+')');
                    }else if (settings.animation == 'slideLeft'){
                        $(this).css('position','absolute');
                        $(this).css('width','100%');
                        $(this).css('height','100%');
                        $(this).css('bottom','0%');
                        $(this).css('right','100%');
                        $(this).css('background-position','center');
                        $(this).css('background-size','cover');
                        $(this).css('background-repeat','no-reapeat');
                        $(this).css('background-image','url('+perimg+')');
                    }else if (settings.animation == 'ripple'){
                        $(this).css('position','absolute');
                        $(this).css('width','100%');
                        $(this).css('height','100%');
                        $(this).css('top','0');
                        $(this).css('left','0');
                        $(this).css('background-position','center');
                        $(this).css('background-size','cover');
                        $(this).css('background-repeat','no-reapeat');
                        $(this).css('background-image','url('+perimg+')');
                    }else if (settings.animation == 'rotation'){
                        $(this).css('position','absolute');
                        $(this).css('width','100%');
                        $(this).css('height','100%');
                        $(this).css('top','0');
                        $(this).css('left','0');
                        $(this).css('background-position','center');
                        $(this).css('background-size','cover');
                        $(this).css('background-repeat','no-reapeat');
                        $(this).css('background-image','url('+perimg+')');
                    }else if (settings.animation == 'theater'){
                        $(this).css('position','absolute');
                        $(this).css('width','100%');
                        $(this).css('height','100%');
                        $(this).css('top','0');
                        $(this).css('left','0');
                        $(this).css('background-position','center');
                        $(this).css('background-size','cover');
                        $(this).css('background-repeat','no-reapeat');
                        $(this).css('background-image','url('+perimg+')');
                    }else if (settings.animation == 'slideTheater'){
                        $(this).css('position','absolute');
                        $(this).css('width','100%');
                        $(this).css('height','100%');
                        $(this).css('top','0');
                        $(this).css('left','0');
                        $(this).css('background-position','center');
                        $(this).css('background-size','cover');
                        $(this).css('background-repeat','no-reapeat');
                        $(this).css('background-image','url('+perimg+')');
                    }else if (settings.animation == 'triangle'){
                        $(this).css('position','absolute');
                        $(this).css('width','100%');
                        $(this).css('height','100%');
                        $(this).css('top','0');
                        $(this).css('left','0');
                        $(this).css('background-position','center');
                        $(this).css('background-size','cover');
                        $(this).css('background-repeat','no-reapeat');
                        $(this).css('background-image','url('+perimg+')');
                    }
                });

                if (settings.animation == 'fadeIn'){
                    $(this).children('#per-gre-slider').css('display', 'none');
                    $(this).children('#per-gre-slider').css('z-index', '1');
                }else if (settings.animation == 'none'){
                    $(this).children('#per-gre-slider').css('display', 'none');
                    $(this).children('#per-gre-slider').css('z-index', '1');
                }else if (settings.animation == 'slideTop'){
                    $(this).children('#per-gre-slider:first-child').css('bottom', '0%');
                    $(this).children('#per-gre-slider').css('z-index', '1');
                }else if (settings.animation == 'slideBottom'){
                    $(this).children('#per-gre-slider:first-child').css('top', '0%');
                    $(this).children('#per-gre-slider').css('z-index', '1');
                }else if (settings.animation == 'slideRight'){
                    $(this).children('#per-gre-slider:first-child').css('left', '0%');
                    $(this).children('#per-gre-slider').css('z-index', '1');
                }else if (settings.animation == 'slideLeft'){
                    $(this).children('#per-gre-slider:first-child').css('right', '0%');
                    $(this).children('#per-gre-slider').css('z-index', '1');
                }else if (settings.animation == 'ripple'){
                    $(this).children('#per-gre-slider').css('display', 'none');
                    $(this).children('#per-gre-slider').css('z-index', '1');
                    $(this).append('<div id="ripple"></div>');
                    $(this).find('#ripple').css('z-index', '3');
                    $(this).find('#ripple').css('position', 'absolute');
                    $(this).find('#ripple').css('top', '50%');
                    $(this).find('#ripple').css('left', '50%');
                    $(this).find('#ripple').css('transform', 'translate(-50%, -50%)');
                    $(this).find('#ripple').css('-webkit-transform', 'translate(-50%, -50%)');
                    $(this).find('#ripple').css('width', '0vw');
                    $(this).find('#ripple').css('height', '0vw');
                    $(this).find('#ripple').css('border-radius', '200%');
                    $(this).find('#ripple').css('-webkit-border-radius', '200%');
                    $(this).find('#ripple').css('background-color', settings.rippleColor);
                }else if (settings.animation == 'rotation'){
                    $(this).children('#per-gre-slider').css('z-index', '1');
                }else if (settings.animation == 'theater'){
                    $(this).children('#per-gre-slider').css('z-index', '1');
                    $(this).children('#per-gre-slider:first-child').css('z-index', '2');
                    $(this).children('#per-gre-slider').attr('data-istheater', 'no');
                    $(this).children('#per-gre-slider:first-child').attr('data-istheater', 'yes');
                    $(this).children('#per-gre-slider').css('clip-path', 'polygon(0% 0%, 100% 0%, 100% 70%, 100% 100%, 0% 100%)')
                }else if (settings.animation == 'slideTheater'){
                    $(this).children('#per-gre-slider').css('z-index', '1');
                    $(this).children('#per-gre-slider:first-child').css('z-index', '2');
                    $(this).children('#per-gre-slider').attr('data-istheater', 'no');
                    $(this).children('#per-gre-slider:first-child').attr('data-istheater', 'yes');
                    $(this).children('#per-gre-slider').css('clip-path', 'polygon(0% 0%, 100% 0%, 100% 70%, 100% 100%, 0% 100%)')
                }else if (settings.animation == 'triangle'){
                    $(this).children('#per-gre-slider').css('z-index', '1');
                    $(this).children('#per-gre-slider:first-child').css('z-index', '2');
                    $(this).children('#per-gre-slider').attr('data-istheater', 'no');
                    $(this).children('#per-gre-slider:first-child').attr('data-istheater', 'yes');
                    $(this).children('#per-gre-slider').css('clip-path', 'polygon(0% 0%, 100% 0%, 100% 50%, 100% 100%, 0% 100%)')
                }


                var totalsliders = imgcountment;

                if (settings.fullscreen){
                    $(this).css('width', '100%');
                }else{
                    $(this).css('width', settings.width);
                }
                $(this).css('height', settings.height + 'px');
                $(this).css('background-color', '#eee');
                $(this).css('border-radius', settings.borderRadius + 'px');
                $(this).css('-webkit-border-radius', settings.borderRadius + 'px');
                $(this).css('position', 'relative');
                $(this).css('overflow', 'hidden');
                $(this).children('#per-gre-slider:first-child').css('display', 'inline-block');

                var dotsHTML = '';
                for (var i=1;i<=totalsliders;i++){
                    dotsHTML = dotsHTML + '<div id="per-gre-dot" data-num="'+(i)+'"></div>';
                }

                // Insert arrows into the main <div> of the slider
                $(this).append('<div id="gre-arrows"><div id="gre-arrow-left"><div id="one"></div><div id="two"></div></div><div id="gre-arrow-right"><div id="one"></div><div id="two"></div></div></div>');

                // Insert dots into the main <div> of the slider
                $(this).append('<div id="gre-dots">'+dotsHTML+'</div>');

                // Dots style
                $(this).children('#gre-dots').css('position','absolute');
                if (settings.dotsPosition == 'topLeft'){
                    $(this).children('#gre-dots').css('top','15px');
                    $(this).children('#gre-dots').css('left','20px');
                }else if (settings.dotsPosition == 'topRight'){
                    $(this).children('#gre-dots').css('top','15px');
                    $(this).children('#gre-dots').css('right','20px');
                }else if (settings.dotsPosition == 'bottomLeft'){
                    $(this).children('#gre-dots').css('bottom','15px');
                    $(this).children('#gre-dots').css('left','20px');
                }else if (settings.dotsPosition == 'bottomRight'){
                    $(this).children('#gre-dots').css('bottom','15px');
                    $(this).children('#gre-dots').css('right','20px');
                }else if (settings.dotsPosition == 'middleTop'){
                    $(this).children('#gre-dots').css('top','15px');
                    $(this).children('#gre-dots').css('left','50%');
                    $(this).children('#gre-dots').css('transform','translate(-50%, -50%)');
                    $(this).children('#gre-dots').css('-webkit-transform','translate(-50%, -50%)');
                }else if (settings.dotsPosition == 'middleBottom'){
                    $(this).children('#gre-dots').css('bottom','15px');
                    $(this).children('#gre-dots').css('left','50%');
                    $(this).children('#gre-dots').css('transform','translate(-50%, -50%)');
                    $(this).children('#gre-dots').css('-webkit-transform','translate(-50%, -50%)');
                }
                $(this).children('#gre-dots').css('display','inline-block');
                $(this).children('#gre-dots').css('z-index','3');
                $(this).children('#gre-dots').children('#per-gre-dot').css('display','inline-block');
                if (settings.dotsStyle == 'circle'){
                    $(this).children('#gre-dots').children('#per-gre-dot').css('padding','3.2px');
                    $(this).children('#gre-dots').children('#per-gre-dot').css('border-radius','200px');
                    $(this).children('#gre-dots').children('#per-gre-dot').css('-webkit-border-radius','200px');
                }else if (settings.dotsStyle == 'dash'){
                    $(this).children('#gre-dots').children('#per-gre-dot').css('padding','2px 5px');
                    $(this).children('#gre-dots').children('#per-gre-dot').css('border-radius','5px');
                    $(this).children('#gre-dots').children('#per-gre-dot').css('-webkit-border-radius','5px');
                }else if (settings.dotsStyle == 'square'){
                    $(this).children('#gre-dots').children('#per-gre-dot').css('padding','3px');
                    $(this).children('#gre-dots').children('#per-gre-dot').css('border-radius','1px');
                    $(this).children('#gre-dots').children('#per-gre-dot').css('-webkit-border-radius','1px');
                }
                $(this).children('#gre-dots').children('#per-gre-dot').css('background-color', settings.dotsColor);
                $(this).children('#gre-dots').children('#per-gre-dot:first-child').css('background-color', settings.selectedDotsColor);
                $(this).children('#gre-dots').children('#per-gre-dot').css('margin','0 3px');
                $(this).children('#gre-dots').children('#per-gre-dot').css('cursor','pointer');

                // Left arrow style
                $(this).children('#gre-arrows').children('#gre-arrow-left').css('position','absolute');
                if (settings.arrowsPosition == 'middleSides'){
                    $(this).children('#gre-arrows').children('#gre-arrow-left').css('left','20px');
                    $(this).children('#gre-arrows').children('#gre-arrow-left').css('top', '50%');
                    $(this).children('#gre-arrows').children('#gre-arrow-left').css('transform', 'translate(-50%, -50%)');
                    $(this).children('#gre-arrows').children('#gre-arrow-left').css('-webkit-transform', 'translate(-50%, -50%)');
                }else if (settings.arrowsPosition == 'topSides'){
                    $(this).children('#gre-arrows').children('#gre-arrow-left').css('left','20px');
                    $(this).children('#gre-arrows').children('#gre-arrow-left').css('top', '20px');
                }else if (settings.arrowsPosition == 'bottomSides'){
                    $(this).children('#gre-arrows').children('#gre-arrow-left').css('left','20px');
                    $(this).children('#gre-arrows').children('#gre-arrow-left').css('bottom', '20px');
                }else if (settings.arrowsPosition == 'topLeft'){
                    $(this).children('#gre-arrows').children('#gre-arrow-left').css('left','10px');
                    $(this).children('#gre-arrows').children('#gre-arrow-left').css('top', '10px');
                }else if (settings.arrowsPosition == 'topRight'){
                    $(this).children('#gre-arrows').children('#gre-arrow-left').css('right','70px');
                    $(this).children('#gre-arrows').children('#gre-arrow-left').css('top', '10px');
                }else if (settings.arrowsPosition == 'bottomLeft'){
                    $(this).children('#gre-arrows').children('#gre-arrow-left').css('left','10px');
                    $(this).children('#gre-arrows').children('#gre-arrow-left').css('bottom', '20px');
                }else if (settings.arrowsPosition == 'bottomRight'){
                    $(this).children('#gre-arrows').children('#gre-arrow-left').css('right','70px');
                    $(this).children('#gre-arrows').children('#gre-arrow-left').css('bottom', '20px');
                }
                $(this).children('#gre-arrows').children('#gre-arrow-left').css('padding','5px');
                $(this).children('#gre-arrows').children('#gre-arrow-left').css('width','30px');
                $(this).children('#gre-arrows').children('#gre-arrow-left').css('height','30px');
                $(this).children('#gre-arrows').children('#gre-arrow-left').css('z-index','3');
                $(this).children('#gre-arrows').children('#gre-arrow-left').css('cursor','pointer');
                $(this).children('#gre-arrows').children('#gre-arrow-left').children('#one').css('position','absolute');
                $(this).children('#gre-arrows').children('#gre-arrow-left').children('#one').css('background-color',settings.arrowColor);
                $(this).children('#gre-arrows').children('#gre-arrow-left').children('#one').css('width','18px');
                $(this).children('#gre-arrows').children('#gre-arrow-left').children('#one').css('top','30px');
                $(this).children('#gre-arrows').children('#gre-arrow-left').children('#one').css('left','12px');
                $(this).children('#gre-arrows').children('#gre-arrow-left').children('#one').css('height','3px');
                $(this).children('#gre-arrows').children('#gre-arrow-left').children('#one').css('border-radius','5px');
                $(this).children('#gre-arrows').children('#gre-arrow-left').children('#one').css('-webkit-border-radius','5px');
                $(this).children('#gre-arrows').children('#gre-arrow-left').children('#one').css('transform','rotate(50deg)');
                $(this).children('#gre-arrows').children('#gre-arrow-left').children('#one').css('-webkit-transform','rotate(50deg)');
                $(this).children('#gre-arrows').children('#gre-arrow-left').children('#two').css('position','absolute');
                $(this).children('#gre-arrows').children('#gre-arrow-left').children('#two').css('background-color',settings.arrowColor);
                $(this).children('#gre-arrows').children('#gre-arrow-left').children('#two').css('width','18px');
                $(this).children('#gre-arrows').children('#gre-arrow-left').children('#two').css('top','18px');
                $(this).children('#gre-arrows').children('#gre-arrow-left').children('#two').css('left','12px');
                $(this).children('#gre-arrows').children('#gre-arrow-left').children('#two').css('height','3px');
                $(this).children('#gre-arrows').children('#gre-arrow-left').children('#two').css('border-radius','5px');
                $(this).children('#gre-arrows').children('#gre-arrow-left').children('#two').css('-webkit-border-radius','5px');
                $(this).children('#gre-arrows').children('#gre-arrow-left').children('#two').css('transform','rotate(-50deg)');
                $(this).children('#gre-arrows').children('#gre-arrow-left').children('#two').css('-webkit-transform','rotate(-50deg)');

                // Left arrow style
                $(this).children('#gre-arrows').children('#gre-arrow-right').css('position','absolute');
                if (settings.arrowsPosition == 'middleSides'){
                    $(this).children('#gre-arrows').children('#gre-arrow-right').css('right','-17px');
                    $(this).children('#gre-arrows').children('#gre-arrow-right').css('top', '50%');
                    $(this).children('#gre-arrows').children('#gre-arrow-right').css('transform', 'translate(-50%, -50%)');
                    $(this).children('#gre-arrows').children('#gre-arrow-right').css('-webkit-transform', 'translate(-50%, -50%)');
                }else if (settings.arrowsPosition == 'topSides'){
                    $(this).children('#gre-arrows').children('#gre-arrow-right').css('right','20px');
                    $(this).children('#gre-arrows').children('#gre-arrow-right').css('top', '20px');
                }else if (settings.arrowsPosition == 'bottomSides'){
                    $(this).children('#gre-arrows').children('#gre-arrow-right').css('right','20px');
                    $(this).children('#gre-arrows').children('#gre-arrow-right').css('bottom', '20px');
                }else if (settings.arrowsPosition == 'topLeft'){
                    $(this).children('#gre-arrows').children('#gre-arrow-right').css('left','50px');
                    $(this).children('#gre-arrows').children('#gre-arrow-right').css('top', '10px');
                }else if (settings.arrowsPosition == 'topRight'){
                    $(this).children('#gre-arrows').children('#gre-arrow-right').css('right','10px');
                    $(this).children('#gre-arrows').children('#gre-arrow-right').css('top', '10px');
                }else if (settings.arrowsPosition == 'bottomLeft'){
                    $(this).children('#gre-arrows').children('#gre-arrow-right').css('left','50px');
                    $(this).children('#gre-arrows').children('#gre-arrow-right').css('bottom', '20px');
                }else if (settings.arrowsPosition == 'bottomRight'){
                    $(this).children('#gre-arrows').children('#gre-arrow-right').css('right','20px');
                    $(this).children('#gre-arrows').children('#gre-arrow-right').css('bottom', '20px');
                }
                $(this).children('#gre-arrows').children('#gre-arrow-right').css('padding','5px');
                $(this).children('#gre-arrows').children('#gre-arrow-right').css('width','30px');
                $(this).children('#gre-arrows').children('#gre-arrow-right').css('height','30px');
                $(this).children('#gre-arrows').children('#gre-arrow-right').css('z-index','3');
                $(this).children('#gre-arrows').children('#gre-arrow-right').css('cursor','pointer');
                $(this).children('#gre-arrows').children('#gre-arrow-right').children('#one').css('position','absolute');
                $(this).children('#gre-arrows').children('#gre-arrow-right').children('#one').css('background-color',settings.arrowColor);
                $(this).children('#gre-arrows').children('#gre-arrow-right').children('#one').css('width','18px');
                $(this).children('#gre-arrows').children('#gre-arrow-right').children('#one').css('top','30px');
                $(this).children('#gre-arrows').children('#gre-arrow-right').children('#one').css('left','12px');
                $(this).children('#gre-arrows').children('#gre-arrow-right').children('#one').css('height','3px');
                $(this).children('#gre-arrows').children('#gre-arrow-right').children('#one').css('border-radius','5px');
                $(this).children('#gre-arrows').children('#gre-arrow-right').children('#one').css('-webkit-border-radius','5px');
                $(this).children('#gre-arrows').children('#gre-arrow-right').children('#one').css('transform','rotate(-50deg)');
                $(this).children('#gre-arrows').children('#gre-arrow-right').children('#one').css('-webkit-transform','rotate(-50deg)');
                $(this).children('#gre-arrows').children('#gre-arrow-right').children('#two').css('position','absolute');
                $(this).children('#gre-arrows').children('#gre-arrow-right').children('#two').css('background-color',settings.arrowColor);
                $(this).children('#gre-arrows').children('#gre-arrow-right').children('#two').css('width','18px');
                $(this).children('#gre-arrows').children('#gre-arrow-right').children('#two').css('top','18px');
                $(this).children('#gre-arrows').children('#gre-arrow-right').children('#two').css('left','12px');
                $(this).children('#gre-arrows').children('#gre-arrow-right').children('#two').css('height','3px');
                $(this).children('#gre-arrows').children('#gre-arrow-right').children('#two').css('border-radius','5px');
                $(this).children('#gre-arrows').children('#gre-arrow-right').children('#two').css('-webkit-border-radius','5px');
                $(this).children('#gre-arrows').children('#gre-arrow-right').children('#two').css('transform','rotate(50deg)');
                $(this).children('#gre-arrows').children('#gre-arrow-right').children('#two').css('-webkit-transform','rotate(50deg)');
                

                var currentslider = 1;
                var isHover = false;
                var interval;
                var timer = () => {
                    interval = setInterval(() => {
                        if (!isHover){
                            realCurrentSlider = currentslider;
                            if (currentslider < totalsliders){
                                currentslider++;
                            }else{
                                currentslider = 1;
                            }
                            if (settings.autoPlay) goTo(currentslider, mainSlider);
                        }
                    }, settings.delay);
                };
                timer();

                // Navigate when click on a dote
                $(this).children('#gre-dots').children('#per-gre-dot').on('click', (e) => {
                    goTo($(e.target).attr('data-num'), $(this));
                });

                // Navigate the previous image
                $(this).children('#gre-arrows').children('#gre-arrow-left').on('click', (e) => {
                    realCurrentSlider = currentslider;
                    if (currentslider == 1){
                        currentslider = totalsliders;
                    }else{
                        currentslider = currentslider - 1;
                    }
                    goTo(currentslider, $(this));
                });

                // Navigate the next image
                $(this).children('#gre-arrows').children('#gre-arrow-right').on('click', (e) => {
                    realCurrentSlider = currentslider;
                    if (currentslider == totalsliders){
                        currentslider = 1;
                    }else{
                        currentslider = currentslider + 1;
                    }
                    goTo(currentslider, $(this));
                });

                // The function of navigation to an image by it's number
                function goTo(num, main){
                    if (!window.isActive) return false;
                    clearInterval(interval);
                    timer();
                    currentslider = num;
                    var currentimg = 1;

                    if (settings.animation == 'fadeIn'){
                        main.children('#per-gre-slider').fadeOut(1000);
                        main.children('#per-gre-slider:nth-child('+currentslider+')').fadeIn(500);
                        main.children('#gre-dots').children('#per-gre-dot').css('background-color', settings.dotsColor);
                        main.children('#gre-dots').children('#per-gre-dot:nth-child('+currentslider+')').css('background-color', settings.selectedDotsColor);
                    }else if (settings.animation == 'none'){
                        main.children('#per-gre-slider').fadeOut(1);
                        main.children('#per-gre-slider:nth-child('+currentslider+')').fadeIn(1);
                        main.children('#gre-dots').children('#per-gre-dot').css('background-color', settings.dotsColor);
                        main.children('#gre-dots').children('#per-gre-dot:nth-child('+currentslider+')').css('background-color', settings.selectedDotsColor);
                    }else if (settings.animation == 'slideTop'){
                        main.children('#per-gre-slider').stop(true, true).delay(1000).css('z-index','1').animate({bottom: '100%'}, 1);
                        main.children('#per-gre-slider:nth-child('+currentslider+')').stop(true, true).css('z-index','2').animate({bottom: '0%'}, 300);
                        main.children('#gre-dots').children('#per-gre-dot').css('background-color', settings.dotsColor);
                        main.children('#gre-dots').children('#per-gre-dot:nth-child('+currentslider+')').css('background-color', settings.selectedDotsColor);
                    }else if (settings.animation == 'slideLeft'){
                        main.children('#per-gre-slider').stop(true, true).delay(1000).css('z-index','1').animate({right: '100%'}, 1);
                        main.children('#per-gre-slider:nth-child('+(currentslider-1)+')').stop(true, true).css('z-index','2').animate({right: '0%'}, 200);
                        main.children('#per-gre-slider:nth-child('+currentslider+')').stop(true, true).css('z-index','2').animate({right: '0%'}, 200);
                        main.children('#gre-dots').children('#per-gre-dot').css('background-color', settings.dotsColor);
                        main.children('#gre-dots').children('#per-gre-dot:nth-child('+currentslider+')').css('background-color', settings.selectedDotsColor);
                    }else if (settings.animation == 'slideRight'){
                        main.children('#per-gre-slider[data-num!="'+currentslider+'"]').stop(true, true).delay(1500).css('z-index','1').animate({left: '100%'}, 1);
                        main.children('#per-gre-slider:nth-child('+currentslider+')').stop(true, true).css('z-index','2').animate({left: '0%'}, 300);
                        main.children('#gre-dots').children('#per-gre-dot').css('background-color', settings.dotsColor);
                        main.children('#gre-dots').children('#per-gre-dot:nth-child('+currentslider+')').css('background-color', settings.selectedDotsColor);
                    }else if (settings.animation == 'slideBottom'){
                        main.children('#per-gre-slider').stop(true, true).delay(1000).css('z-index','1').animate({top: '100%'}, 1);
                        main.children('#per-gre-slider:nth-child('+currentslider+')').stop(true, true).css('z-index','2').animate({top: '0%'}, 300);
                        main.children('#gre-dots').children('#per-gre-dot').css('background-color', settings.dotsColor);
                        main.children('#gre-dots').children('#per-gre-dot:nth-child('+currentslider+')').css('background-color', settings.selectedDotsColor);
                    }else if (settings.animation == 'ripple'){
                        var randtohandred = Math.floor(Math.random() * 101);
                        main.find('#ripple').animate({width: (main.width() * 3)+'px', height: (main.width() * 3)+'px', top: randtohandred+'%', left: randtohandred+'%'}, 400);
                        main.children('#per-gre-slider').delay(400).fadeOut(10);
                        main.children('#per-gre-slider:nth-child('+currentslider+')').fadeIn(10);
                        main.find('#ripple').animate({width: '0%', height: '0%'}, 400);
                        main.children('#gre-dots').children('#per-gre-dot').css('background-color', settings.dotsColor);
                        main.children('#gre-dots').children('#per-gre-dot:nth-child('+currentslider+')').css('background-color', settings.selectedDotsColor);
                    }else if (settings.animation == 'rotation'){
                        main.children('#per-gre-slider').css('z-index','1');
                        main.children('#per-gre-slider:nth-child('+currentslider+')').animate({width: '200%', height: '200%', left: '-50%', top: '-50%'}, 300);
                        main.children('#per-gre-slider:nth-child('+currentslider+')').css('z-index','2');
                        $({deg: 0}).delay(100).animate({deg: '-360'}, {
                            duration: 600,
                            step: function(now) {
                                main.children('#per-gre-slider:nth-child('+currentslider+')').css({
                                    transform: 'rotate(' + now + 'deg)'
                                });
                            }
                        });
                        main.children('#per-gre-slider:nth-child('+currentslider+')').delay(250).animate({width: '100%', height: '100%', left: '0', top: '0'}, 300);
                        main.children('#per-gre-slider:nth-child('+currentslider+')').fadeIn(500);
                        main.children('#per-gre-slider').css('transform','rotate(0deg)');
                        main.children('#per-gre-slider').css('-webkit-transform','rotate(0deg)');
                        main.children('#gre-dots').children('#per-gre-dot').css('background-color', settings.dotsColor);
                        main.children('#gre-dots').children('#per-gre-dot:nth-child('+currentslider+')').css('background-color', settings.selectedDotsColor);
                    }else if (settings.animation == 'theater'){
                        var targetimg = num;
                        
                        for (var i=1;i<=totalsliders;i++){
                            if (main.children('#per-gre-slider:nth-child('+i+')').attr('data-istheater') == 'yes'){
                                currentimg = main.children('#per-gre-slider:nth-child('+i+')').attr('data-num');
                            }
                        }

                        main.children('#per-gre-slider').css('z-index','1');
                        main.children('#per-gre-slider:nth-child('+targetimg+')').css('z-index','2');
                        main.children('#per-gre-slider:nth-child('+currentimg+')').css('z-index','3');

                        jQuery({ Counter: 100, twoCounter: 100 }).stop().animate({ Counter: -0, twoCounter: -25 }, {
                            duration: 600,
                            step: function () {
                                main.children('#per-gre-slider:nth-child('+currentimg+')').css('clip-path', 'polygon(0% 0%, '+Math.ceil(this.Counter)+'% 0, '+(Math.ceil(this.twoCounter))+'% 63%, '+Math.ceil(this.Counter)+'% 100%, 0% 100%)');
                            },
                            complete: () => {
                                main.children('#per-gre-slider').css('clip-path', 'polygon(0% 0%, 100% 0, 100% 63%, 100% 100%, 0% 100%)');
                                main.children('#per-gre-slider').css('z-index','1');
                                main.children('#per-gre-slider:nth-child('+targetimg+')').css('z-index','3');
                                main.children('#per-gre-slider').attr('data-istheater','no');
                                main.children('#per-gre-slider:nth-child('+targetimg+')').attr('data-istheater','yes');
                            }
                        });

                        main.children('#gre-dots').children('#per-gre-dot').css('background-color', settings.dotsColor);
                        main.children('#gre-dots').children('#per-gre-dot:nth-child('+currentslider+')').css('background-color', settings.selectedDotsColor);
                    }else if (settings.animation == 'slideTheater'){
                        var targetimg = num;
                        
                        for (var i=1;i<=totalsliders;i++){
                            if (main.children('#per-gre-slider:nth-child('+i+')').attr('data-istheater') == 'yes'){
                                currentimg = main.children('#per-gre-slider:nth-child('+i+')').attr('data-num');
                            }
                        }

                        main.children('#per-gre-slider').css('z-index','1');
                        main.children('#per-gre-slider:nth-child('+targetimg+')').css('z-index','2');
                        main.children('#per-gre-slider:nth-child('+currentimg+')').css('z-index','3');

                        jQuery({ Counter: 100 }).animate({ Counter: '0' }, {
                            duration: 400,
                            step: function () {
                                main.children('#per-gre-slider:nth-child('+currentimg+')').css('clip-path', 'polygon(0% 0%, '+Math.ceil(this.Counter)+'% 0, '+(Math.ceil(this.Counter))+'% 63%, '+Math.ceil(this.Counter)+'% 100%, 0% 100%)');
                            },
                            complete: () => {
                                main.children('#per-gre-slider').css('clip-path', 'polygon(0% 0%, 100% 0, 100% 63%, 100% 100%, 0% 100%)');
                                main.children('#per-gre-slider').css('z-index','1');
                                main.children('#per-gre-slider:nth-child('+targetimg+')').css('z-index','3');
                                main.children('#per-gre-slider').attr('data-istheater','no');
                                main.children('#per-gre-slider:nth-child('+targetimg+')').attr('data-istheater','yes');
                            }
                        });

                        main.children('#gre-dots').children('#per-gre-dot').css('background-color', settings.dotsColor);
                        main.children('#gre-dots').children('#per-gre-dot:nth-child('+currentslider+')').css('background-color', settings.selectedDotsColor);
                    }else if (settings.animation == 'triangle'){
                        var targetimg = num;
                        
                        for (var i=1;i<=totalsliders;i++){
                            if (main.children('#per-gre-slider:nth-child('+i+')').attr('data-istheater') == 'yes'){
                                currentimg = main.children('#per-gre-slider:nth-child('+i+')').attr('data-num');
                            }
                        }

                        main.children('#per-gre-slider').css('z-index','1');
                        main.children('#per-gre-slider:nth-child('+targetimg+')').css('z-index','2');
                        main.children('#per-gre-slider:nth-child('+currentimg+')').css('z-index','3');

                        main.children('#per-gre-slider').css('clip-path', 'polygon(0% 0%, 100% 0, 100% 63%, 100% 100%, 0% 100%)');

                        jQuery({ Counter: 130, twoCounter: 100, percentage: '0%' }).stop(true,true).animate({ Counter: -0, twoCounter: -25, percentage: '50%' }, {
                            duration: 600,
                            step: function () {
                                main.children('#per-gre-slider:nth-child('+currentimg+')').css('clip-path', 'polygon(0% 0%, '+Math.ceil(this.Counter)+'% 0, '+(Math.ceil(this.twoCounter - this.percentage))+'% 63%, '+Math.ceil(this.Counter)+'% 100%, 0% 100%)');
                            },
                            complete: () => {
                                main.children('#per-gre-slider').css('clip-path', 'polygon(0% 0%, 100% 0, 100% 63%, 100% 100%, 0% 100%)');
                                main.children('#per-gre-slider').css('z-index','1');
                                main.children('#per-gre-slider:nth-child('+targetimg+')').css('z-index','3');
                                main.children('#per-gre-slider').attr('data-istheater','no');
                                main.children('#per-gre-slider:nth-child('+targetimg+')').attr('data-istheater','yes');
                            }
                        });

                        main.children('#gre-dots').children('#per-gre-dot').css('background-color', settings.dotsColor);
                        main.children('#gre-dots').children('#per-gre-dot:nth-child('+currentslider+')').css('background-color', settings.selectedDotsColor);
                    }
                }


                if (settings.keyboard){
                    // Listen the left arrow key of keyboard
                    thedocument.keydown(function(e){
                        if (e.which == 37) { 
                            realCurrentSlider = currentslider;
                            if (currentslider == 1){
                                currentslider = totalsliders;
                            }else{
                                currentslider = currentslider - 1;
                            }
                            goTo(currentslider, mainSlider);
                           return false;
                        }
                    });

                    // Listen the right arrow key of keyboard
                    thedocument.keydown(function(e){
                        if (e.which == 39) { 
                            realCurrentSlider = currentslider;
                            if (currentslider == totalsliders){
                                currentslider = 1;
                            }else{
                                currentslider = currentslider + 1;
                            }
                            goTo(currentslider, mainSlider);
                           return false;
                        }
                    });
                }

                // Pause slider when the mouse inside the slider
                $(this).mouseenter(() => {
                    isHover = true;
                });

                // Resume the slider when the mouse leaves the slider
                $(this).mouseleave(() => {
                    clearInterval(interval);
                    timer();
                    isHover = false;
                });



            }
        });
    }


}(jQuery));