/**
 * Created by Administrator on 2015/8/20.
 */
$(function () {
    newsNavExc();
    comNewsSlid(newsArry);
});
//公司动态新闻数据对象
var companyNewsObjArry = [
    {
        img:"images/comNewsImg/news-img8.png",
        h:"成都铭贵物联网公司更名",
        p:"2015年10月14日，成都铭贵云端物联网技术有限责任公司正式更名为“中景恒基云端物联网科技成都有限公司”（简称中景物联）。此次更名体现了中景恒基投资集团作为控股方对本公司战略发展、市场开拓、资源整合等全方面的支持。",
        time:"2015-10-14",
        skipTo:"companyNews.html-6.html"
    },
    {
        img:"images/comNewsImg/news-img1.jpg",
        h:"成都铭贵物联网亮相“2015中国（成都）电子展”",
        p:" 2015中国（成都）电子展7月16日在成都世纪城新国际会展中心拉开帷幕。本届展会聚集了800多家参展商，智能穿戴、无人机、电梯物联网、空间模拟等许多走在电子信息科技发展前沿的新技术、新产品纷纷亮相，不仅吸引了参观者的眼球，也令人们充分感受到了未来科技生活的魅力。成都铭贵作为物联网专区参展商，在4号馆K123展位，展出了公司自主研发的电梯信息采集终端，轿厢多媒体报警终端，企业维保动态大屏信息系统等一系列电梯物联网相关的产品。并且与相关企业与专业人士在展会期间就电梯物联网领域的相关产品以及发展做了深入交流。希望在不久的将来，全国能大规模用上铭贵电梯物联网的软硬件产品，充分保障电梯运营安全。",
        time:"2015-07-16",
        skipTo:"companyNews.html-1.html"
    },
    {
        img:"images/comNewsImg/news-img2.jpg",
        h:"陕西省电梯业协会2014年年会暨先进表彰大会",
        p:" 成都铭贵应陕西省电梯业协会康秘书长邀请，3月13日赴西安市政协大酒店参加了“陕西省电梯业协会2014年年会暨先进表彰大会”。参会的电梯相关企业达90余家，陕西省省厅以及西安市、渭南市等地市的质监和特检的领导也出席了会议。会议过程中，在产品推介以及行业前沿技术发展交流环节，我公司产品负责人做了15分钟的《电梯管理新模式-云端电梯物联网》PPT演讲与演示，与在座的各位专家、企业、政府代表就电梯物联网的发展进行了深入探讨和交流。我司的电梯物联网运营保障平台是专门为电梯维保企业、物业管理公司、政府监管等不同需求角色打造的一款基于云计算的云服务平台。能够将电梯维保企业所需的电梯信息管理、电梯维保管理、电梯仓库管理、电梯合同管理、电梯OA办公管理等核心需求和物业、质检等的监管电梯远程物联网监控需求共同满足，是电梯行业中最大的电梯物联网云服务平台。",
        time:"2015-03-18",
        skipTo:"companyNews.html-2.html"
    },
    {
        img:"images/comNewsImg/news-img3.jpg",
        h:"中梯联常务理事单位第七次会议",
        p:" 中梯联常务理事单位第七次会议于2014年10月23日-25日在石家庄召开，以此会议由中梯联成员河北上菱电梯承办。成都铭贵云端物联网应邀参会并成为第十五个理事单位。会议期间各参会企业就中梯联成员之间如何加强交流与合作、如何应对新法规、如何与工厂合作进行共赢等议题做了深入详细的交流。在会议中，成都铭贵还就电梯物联网系统进行了演示和讲解。提出传统企业和互联网企业结合是行业发展的趋势，利用云计算技术、物联网技术、移动互联网技术改造和武装传统企业管理流程是企业转型的趋势。",
        time:"2014-10-24",
        skipTo:"companyNews.html-3.html"
    },
    {
        img:"images/comNewsImg/news-img4.png",
        h:"基于二维码的维保签到管理受到广大电梯公司欢迎",
        p:"自2013年底我公司推出基于二维码和手机APP的维保签到管理以来，该模式受到广大电梯维保欢迎。重庆渝辉电梯有限公司、成都吉高电梯公司、四川安达电梯公司、郑州快意电梯公司等已经开始大量使用该手段管理电梯维保签到过程。重庆渝辉电梯有限公司将此管理模式向重庆市质监局做了特别汇报，受到了高度关注。几家公司特地推出了相关的配套管理制度，针对维保签到率、维保用时、维保抽查合格率等进行月度考核，使得针对维保现场管理可以量化、精确、实时，有据可依。采用手机APP和二维码的维保签到，是相对于传统IC卡签到的创新管理模式，是指维保工人进场和离场时，通过手机APP扫描电梯上粘贴的二维码，进行开始签到、结束签到、图片上传、语音沟通、故障报告、电梯信息查看等操作。这种模式无须在每部电梯上安装IC卡设备，只需要在维保工人的智能手机上安装相应的APP即可，保养和维修信息实时上传并在公司内部实时共享，第一次使得管理打破了地理位置和时间限制，公司领导不管在哪里，只要有手机，就随时可以关注电梯保养、故障修理和材料使用等业务过程，是一次以互联网手段进行电梯业务管理创新的有益探索。采用手机APP和二维码的维保签到，电梯维保公司无须对电梯硬件做任何改动，手机网络流量消耗也不大，每月不超过100M，在微信大行其道的今天，该操作模式简单易用，客户使用成本很低，是一种简单、低廉、高效的管理工具，预计近期将快速在全国各地电梯维保公司间推广使用。",
        time:"2014-08-21",
        skipTo:"companyNews.html-4.html"
    },
    {
        img:"images/comNewsImg/news-img5.png",
        h:"我公司组织客户参加远程培训",
        p:"为了让用户尽快掌握我公司电梯业务管理平台，加快推进用户使用工作，2014年3月13日，成都铭贵云端物联网公司成功组织了用户远程培训工作。通过远程视频会议方式，共计有27家全国各地的电梯维保公司参加了入门级培训讲解，这些公司包括：太原市鑫通力达电梯有限公司、大理诚信电梯有限公司、郑州快意电梯工程有限公司、泉州希斯凯电梯有限公司、宜昌福达电梯服务有限公司、达州市圆明工程有限责任公司、银川崇友电梯有限公司、江苏金达机电设备有限公司、张家界大唐机电工程有限公司等。该次培训中，我公司向用户介绍了成都铭贵云端物联网公司成立时间、公司规模、业务领域和公司团队等基本情况，并针对电梯业务管理平台进行了详细介绍，包括：产品原理、使用方式、功能模块、系统优势以及能够为电梯维保公司带来哪些好处等。鉴于电梯维保行业整体信息化水平较为落后，我公司以深入浅出的方式，让用户明白信息化能够为他们带来管理和服务上的好处，以及如何有序渐进的实施电梯维保公司信息化，让用户明白，采用互联网手段，提高电梯行业管理水平和服务效率，将是确定不移的趋势。培训中，各家电梯维保公司踊跃发言，表现出了对于电梯维保行业信息化的高昂热情，简明详尽的讲解，让他们打消了对于信息化实施的畏难情绪，大致清楚了实施信息化管理手段的步骤和程序，并纷纷表示将快速推进接下来工作。针对本次培训，我们认为达到了预期效果，起到了对于行业进行信息化普及的目的，传达出了电梯业务管理平台背后的管理理念，通过后续的培训和指导，将能够以春风化雨的方式提升整个行业的信息化管理水平，是一件广受电梯维保公司欢迎的好事。我公司将把类似的培训持续举办下去，从而为中国电梯维保行业信息化普及尽一份自己的绵薄之力。",
        time:"2014-08-20",
        skipTo:"companyNews.html-5.html"
    }
];
var newsArry =  companyNewsObjArry;
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
            $newsBox.append("<div class='row news-box'><div class='col-sm-9 news-con-box'>" +
                "<h3><a href='"+newsObjArry[i].skipTo+"'><i class='icon icon-play'></i>"+newsObjArry[i].h+"</a></h3><p>"+news+"</p>" +
                "</div><div class='col-sm-3 news-time-box'>"+newsObjArry[i].time+"</div></div>");
        });
    }
}