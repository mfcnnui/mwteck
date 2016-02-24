/**
 * Created by Administrator on 2015/8/6.
 */
//产品图片、标题、简介文本对象数组，如果要添加或者删除请以对象的形式添加或者删除到下面数组里
var msgObj = [
    {img:"images/Computer.png",title:"电梯物联网运营终合保障平台",content:"全面型电梯管理系统",type:1},
    {img:"images/phone.png",title:"电梯助手",content:"轻量级O2O工具",type:1},
    {img:"images/TV.png",title:"企业维保大屏动态信息系统",content:"实时维保动态显示",type:1},
    {img:"images/Acquisition_terminal.png",title:"采集终端",content:"小巧轻便 采集信息",type:2},
    {img:"images/Multimedia.png",title:"多媒体终端",content:"视频监控 被动报警 被困人员通话",type:2}
];
window.onload = function(){
    init();
    checkType();
    shareIconSlid();
    IsFF();
};
$(window).resize(function(){
    addCoverLayer();
});
function init(){
    var $showImgBox = $(".show-img-box");
    $.each(msgObj,function (i) {
        $showImgBox.append("<div class='col-sm-4' data-type='"+msgObj[i].type+"'><div class='hover-box'><div class='img-box'><img class='add-img' src='"+msgObj[i].img+"' alt=''/></div></div></div>");
    });
    $(".add-img").load(function () {
        var w = $showImgBox.find("div").width();
        var $this = $(this);
        var img = $this.get(0);
        AutoResizeImage(w,0,img);
        addCoverLayer();
    })
}
function addCoverLayer(){
    var $parent = $(".hover-box");
    $parent.each(function(i){
        var $this = $(this);
        var imgW= $this.find("img").width();
        var imgH = $this.find("img").height();
        if(!$this.find("div").hasClass("cover-layer")){
            $this.append("<div class='cover-layer'><div class='ctrl-box'><p class='pro-title'>"+msgObj[i].title+"</p><div class='flex-bar'></div><p class='pro-content'>"+msgObj[i].content+"</p></div></div>");
        }
        $this.find(".cover-layer").css({
            "width":imgW+"px",
            "height":imgH+"px",
            "margin-left":-imgW/2
        });
    })
};
/**
 * 处理产品类型按钮归类
 */
function checkType(){
    var $typeBtn = $(".type-box>button");
    var $showImg = $(".show-img-box>div");
    $typeBtn.click(function () {
        var $this = $(this);
        var val = $this.val();
        var type = $showImg.attr("data-type");
        if(!$this.hasClass("btn-primary")){
            $typeBtn.removeClass("btn-primary");
            $this.addClass("btn-primary");
        }
        if(val=="all"){
            $showImg.show();
        }else if(val=="soft"){
            $showImg.each(function () {
                var $this = $(this);
                if($this.attr("data-type")==1){
                    $this.show();
                }else{
                    $this.hide();
                }
            });
        }else if(val == "hardware"){
            $showImg.each(function () {
                var $this = $(this);
                if($this.attr("data-type")==2){
                    $this.show();
                }else{
                    $this.hide();
                }
            });
        }
    });
}
/**
 * 处理分享平台软件图标的加载和动画效果
 */
function shareIconSlid(){
    var $icon = $(".share-box>ul>a>li");
    var userAgent=window.navigator.userAgent.toLowerCase();
    $icon.mouseover(function () {
        var $this = $(this);
        var className = $this.attr("class");
        var poinX = 0;
        if(className == "xl-blog"){
            poinX = 0;
        }else if(className == "tx-blog"){
            poinX = -80;
        }else if(className == "qq-kj"){
            poinX = -120;
        }
        if(userAgent.indexOf("firefox")>=1){//判断是否为火狐浏览器，如果是则执行backgroundPositon插件代码，否则执行jquery代码
            $this.stop().animate({backgroundPosition:poinX+"px -28px"},300);
        }else{
            $this.stop().animate({backgroundPositionX:poinX+"px",backgroundPositionY:"-28px"},300)
        }
    });

    $icon.mouseout(function () {
        var $this = $(this);
        var className = $this.attr("class");
        var poinX = 0;
        if(className == "xl-blog"){
            poinX = 0;
        }else if(className == "tx-blog"){
            poinX = -80;
        }else if(className == "qq-kj"){
            poinX = -120;
        }
        if(userAgent.indexOf("firefox")>=1){//判断是否为火狐浏览器，如果是则执行backgroundPositon插件代码，否则执行jquery代码
            $this.stop().animate({backgroundPosition:poinX+"px 0"},300);
        }else{
            $this.stop().animate({backgroundPositionX:poinX+"px",backgroundPositionY:"0"},300)
        }
    });
}

/**
 * 由于火狐不支持 jQuery的backgroundPosition动画，则判断是否是火狐，如果是则加载火狐动画插件
 * @constructor
 */
function IsFF(){
    var userAgent=window.navigator.userAgent.toLowerCase();
    if(userAgent.indexOf("firefox")>=1){
        var obj = document.getElementsByTagName("head");
        var newEle=document.createElement("script");
        newEle.src="javascripts/backgroundPosition.js";
        obj[0].appendChild(newEle);
    }
}
/*********************************************主页**********************************************/
