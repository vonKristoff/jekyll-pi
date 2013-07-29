window.Broadcast = [];

window.onFrame = {
    count   :0,
    running :true,
    tgt     :null,
    midpage :0, 
    scroll  :0,
    range   :100
}

function update() {
    
    if(onFrame.running){

        var noise = 0;
        for(var i=0;i<Broadcast.length;i++){
            if(Broadcast[i].on == true) noise++;
        }
        if(noise > 0){  
    		onFrame.count++;
    		onFrame.tgt.draw(); 
    	}
    	requestAnimationFrame(update);	
    }
}
(function($) {

    var getFocus = function(){
        
        var focus = window.pageYOffset + window.innerHeight/2;
        $('.range').css({
            top:focus
        })
        $('.foc').css({
            top:focus
        })
        onFrame.midpage = window.innerHeight/2;
        onFrame.scroll = window.pageYOffset;
    } 
    $(window).scroll(getFocus);

})(jQuery);

window.addEventListener('load', update, true);    




// ---------------------------------------------------------------- //

// requestAnimationFrame polyfill by Erik Möller

(function() {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] 
                                   || window[vendors[x]+'CancelRequestAnimationFrame'];
    }
 
    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); }, timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
 
    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
}());