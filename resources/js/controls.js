(function($) {

    console.log('for christs sake');
    
    $('.reveal').hide();
    $('.usage').on('click',function(){
        $('.reveal').show(300);
    })

    var comment = false;
    $('.discuss, .close').on('click',function(){
      if(comment){
        $('.talk').css('left','-500px');
        comment = false;
      }else{
        $('.talk').css('left','0px');
        comment = true;
      }
    })
    setTimeout(function() {
        $(".container").mCustomScrollbar({
            theme:"dark",
            scrollInertia:300,
            advanced:{
                updateOnContentResize:true
            }
        });
        $('.mCustomScrollBox').css('max-width','150%');
    }, 1500);

    var max = $(window).height(), 
        over = false,
        foot = $('.footer'),
        fheight = foot.height();

    window.addEventListener('mousemove',function(e){
    
        if(!over){
            if(e.clientY > max - fheight){
              over = true;
            }
        }else{
            if(e.clientY < max - (fheight*1.5)){
              over = false;
              $('.footer').css({
                    'bottom':-fheight+'px'
                });
            }
        }
    },false);

    $('.nfo').on('click',function(){
        $('.footer').css('bottom','0px');
    })

    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };
    if(!isMobile.any()){
        // normal mode
    }else{
        // mobile mode
    }
})(jQuery);