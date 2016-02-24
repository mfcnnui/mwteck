/**
 * Created by Administrator on 2015/8/25.
 */
$(function () {
    var $footer = $("#footer");
    $footer.load("footer.html",function(){
        if(isFirefox=navigator.userAgent.indexOf("Firefox")>0){
            isFFBackgroundSlid();
        }else{
            notFFBackgroundSlid();
        }
    });
});
function notFFBackgroundSlid(){
    var $slidBox = $(".share-box ul a li");
    $slidBox.mouseenter(function () {
        var $this = $(this);
        var className = $this.attr("class");
        if(className == "xl-blog"){
            $this.stop().animate({backgroundPositionX:"0",backgroundPositionY:"-28px"})
        }
        if(className == "tx-blog"){
            $this.stop().animate({backgroundPositionX:"-80px",backgroundPositionY:"-28px"})
        }
        if(className == "qq-kj"){
            $this.stop().animate({backgroundPositionX:"-120px",backgroundPositionY:"-28px"})
        }
    });
    $slidBox.mouseleave(function () {
        var $this = $(this);
        var className = $this.attr("class");
        if(className == "xl-blog"){
            $this.stop().animate({backgroundPositionX:"0",backgroundPositionY:"0px"})
        }
        if(className == "tx-blog"){
            $this.stop().animate({backgroundPositionX:"-80px",backgroundPositionY:"0px"})
        }
        if(className == "qq-kj"){
            $this.stop().animate({backgroundPositionX:"-120px",backgroundPositionY:"0px"})
        }
    });
}
function isFFBackgroundSlid(){
    var script = document.createElement("script");
    var head = $("head").get(0);
    script.src = "javascripts/backgroundPosition.js";
    head.appendChild(script);
    var $slidBox = $(".share-box ul a li");

    $slidBox.mouseenter(function () {
        var $this = $(this);
        var className = $this.attr("class");
        if(className == "xl-blog"){
            $this.stop().animate({backgroundPosition:"(0px -28px)"})
    }
        if(className == "tx-blog"){
            $this.stop().animate({backgroundPosition:"(-80px -28px)"})
        }
        if(className == "qq-kj"){
            $this.stop().animate({backgroundPosition:"(-120px -28px)"})
        }
    });
    $slidBox.mouseleave(function () {
        var $this = $(this);
        var className = $this.attr("class");
        if(className == "xl-blog"){
            $this.stop().animate({backgroundPosition:"(0px 0px)"})
        }
        if(className == "tx-blog"){
            $this.stop().animate({backgroundPosition:"(-80px 0px)"})
        }
        if(className == "qq-kj"){
            $this.stop().animate({backgroundPosition:"(-120px 0px)"})
        }
    });
}