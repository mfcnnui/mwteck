/**
 * Created by Administrator on 2015/9/2.
 */
$(function () {
    newsNavExc();
    comNewsSlid(groupNewsObjArry);
});

//集团动态新闻数据对象
var groupNewsObjArry = [
    {
        img:"images/groupNewsImg/group-news-1.png",
        h:"集团城市运营业务阶段性成果丰硕",
        p:" 5月27日晚董事长组织连云港总部及房地产事业部高、中层领导40余人召开工作交流会，全面、深刻的探讨了集团化管理，总部业务运营发展模式等企业发展相关问题。在工作交流会上，董事长指出，中景恒基投资集团在连云港开展的城市运营业务已取得阶段性成果，社会效益和经济效益明显。希望房地产事业部在认真分析目前地产形势的基础上，抓好现有项目的实施，其他项目要审慎推进。连云港总部的业务面已全面铺开，关键要抓好推进工作。近几年，根据市场需求，集团审时度势，适时提出城市运营商的战略发展概念，定位并致力于成为值得信赖受人尊敬的一流的城市运营商的发展目标，并于2013年初即全面开展了城市运营业务，在整合集团资源，提升产业业态，创建新的商业模式方面进行了成功的探索和推广，取得了一定成果，得到了相关省、市政府及领导的肯定，为集团新十年的发展开辟了广阔的空间。集团以连云港市为运营服务对象，充分发挥城市运营商的积极作用，以地产开发、工程建设、文化传媒、基础设施建设、农业科技为业务基点，进行了连云港城市运营模式的成功探索及推广，为打造集团城市运营商以及推进各项业务奠定了坚实基础，有望打造国内首例综合城市运营成功案例。",
        time:"2015-03-18",
        skipTo:"groupNews-1.html"
    },
    {
        img:"images/groupNewsImg/group-news-2.png",
        h:"集团董事长视察眉山项目并与市长宋朝华进行会谈",
        p:" 2015年7月26日，集团董事长肖厚忠来到眉山项目进行视察，并听取项目组专业实施方案汇报。肖董事长强调，集团与眉山市政府已于7月1日正式签约，项目的各项具体工作需加快推进。同时，项目组各专业要根据合同具体约定编制出具备落地性的实施方案。要紧紧抓住PPP模式大趋势，依托产城相融的打造理念，将本项目塑造成为PPP模式在四川省乃至全国的试点和示范项目。肖董事长对项目组提出了具体要求，肖董事长表示，招商工作作为这个项目的重中之重，要与企业宣传紧密结合，同时把握关键节点引领策划规划工作实施。在管理和团队建设方面，要注重内部企业文化建设，打造具有凝聚力、战斗力的项目公司团队，同时加强项目公司内部管控，完善管控体系，充分发挥平台加特种部队的优势作用，实现项目目标，创造良好的社会效益和经济效益，达到政府、社会、企业多赢局面。集团董事、高级总裁时亮及项目组各专业负责人出席了此次汇报会。",
        time:"2015-07-29",
        skipTo:"groupNews-2.html"
    }

];

/**
 * 集团动态、公司动态、行业动态导航切换处理
 */
function newsNavExc(){
    var $newsNav = $(".news-nav-box li");
    $newsNav.click(function () {
        var $this = $(this);
        var type = $this.attr("data-bar-type");
        if(!$this.hasClass("news-active")){
            $newsNav.removeClass("news-active");
            $this.addClass("news-active");
        }
        switch (parseInt(type)){
            case 1:
                break;
            case 2:
                break;
        }
    });

}

function comNewsSlid(newsObjArry){
    var $slidBox = $(".nav-bar-box");
    var newsInterval;
    $.each(newsObjArry, function (i) {
        $slidBox.append("<div class='nav-news-bar'>"+(i+1)+"</div>");
    });
    var $navBar = $(".nav-news-bar");
    $navBar.first().css("background","#019be1");
    var cont = 1;
    var $img = $(".news-slide-box img");
    var $h = $("#news-h");
    var $p = $("#news-p");
    var $time = $("#news-time");
    newsInterval = setInterval(contentSlid,6000);
    $navBar.live("mouseover", function () {
        var $this = $(this);
        var news =  newsObjArry[$this.text()-1].p;
        var newsLenght = news.length;
        clearInterval(newsInterval);
        $navBar.css("background","#cccccc");
        $this.css("background","#019be1");
        $img.attr("src",newsObjArry[$this.text()-1].img);
        $h.text(newsObjArry[$this.text()-1].h);
        $time.text(newsObjArry[$this.text()-1].time);
        if(newsLenght>555){
            news = news.substr(0,555)+"...";
            $p.text(news);
        }else{
            $p.text(news);
        }
    });
    $navBar.live("mouseout", function () {
        newsInterval =  setInterval(contentSlid,6000);
    });
    function contentSlid(){
        $img.fadeOut(300,function(){
            $img.attr("src",newsObjArry[cont].img);
            $h.text(newsObjArry[cont].h);
            $time.text(newsObjArry[cont].time);
            var newsP = newsObjArry[cont].p;
            var pLenght = newsP.length;
            if(pLenght>552){
                newsP = newsP.substr(0,555)+"...";
                $p.text(newsP);
            }else{
                $p.text(newsP);
            }
            if(cont<newsObjArry.length-1){
                cont++;
            }else{
                cont=0;
            }
            $img.fadeIn(200);
        });
        $navBar.css("background","#cccccc");
        $navBar.eq(cont).css("background","#019be1");
    }

    /**
     * 所有新闻块初始化
     */
    allNewsInit();
    function allNewsInit(){
        var $newsBox = $(".all-news-box");
        $.each(newsObjArry, function (i) {
            var news = newsObjArry[i].p;
            var newsLenght = news.length;
            if(newsLenght>55){
                news = news.substr(0,70)+"...";
            }
            console.log(newsObjArry[i].skipTo)
            $newsBox.append("<div class='row news-box'><div class='col-sm-9 news-con-box'>" +
                "<h3><a href='"+newsObjArry[i].skipTo+"'><i class='icon icon-play'></i>"+newsObjArry[i].h+"</a></h3><p>"+news+"</p>" +
                "</div><div class='col-sm-3 news-time-box'>"+newsObjArry[i].time+"</div></div>");
        });
    }
}