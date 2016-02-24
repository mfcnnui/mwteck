/**
 * Created by Administrator on 2015/8/27.
 */
$(function () {
    validate();
});

function validate(){
    var $input = $(".input-box input");
    var $message = $(".message-bg");
    var corpFlag=false,
        liftNumFlag=false,
        userFlag=false,
        phoneFlag=false,
        emailFlag=false,
        qqNumFlag=false;
//        subFlag = false;
//    if((corpFlag==true && liftNumFlag==true && userFlag==true && phoneFlag==true && emailFlag==true && qqNumFlag==true)){
//        subFlag = true;
//    }else{
//        subFlag=false;
//    }

    $input.focus(function () {
        var $this = $(this);
        var num = $this.attr("data-form");
        $message.eq(num-1).fadeIn(300);
        switch (parseInt(num)){
            case 1:
                $message.eq(num-1).text("请输入中文！").css("color","#eba654").fadeIn();
                break;
            case 2:
                $message.eq(num-1).text("请输入数字！").css("color","#eba654").fadeIn();
                break;
            case 3:
                $message.eq(num-1).text("请输入中文！").css("color","#eba654").fadeIn();
                break;
            case 4:
                $message.eq(num-1).text("请输入电话号码！").css("color","#eba654").fadeIn();
                break;
            case 5:
                $message.eq(num-1).text("请输入邮箱！").css("color","#eba654").fadeIn();
                break;
            case 6:
                $message.eq(num-1).text("请输入数字！").css("color","#eba654").fadeIn();
                break;
        }
    });

    $input.blur(function () {
        var $this = $(this);
        var textStr = $this.val();
        var $message = $(".message-bg");
        var num = $this.attr("data-form");
        var chineseReg = /^[\u4e00-\u9fa5]*$/;   //中文正则表达式
        var numReg = /^[1-9]\d*$/; //数字正则表达式
        var userNameReg = /[\u4E00-\u9FA5]{2,5}(?:·[\u4E00-\u9FA5]{2,5})*/; //中文名称正则表达式
        var phoneReg = /^((\+?86)|(\(\+86\)))?(13[012356789][0-9]{8}|15[012356789][0-9]{8}|18[02356789][0-9]{8}|147[0-9]{8}|1349[0-9]{7})$/; //手机正则表达式
        var emailReg = /^[0-9a-zA-Z]+(?:[\.\!\#\$\%\^\&\*\'\+\-\/\`\_\{\|\}\~]{0,1}[a-zA-Z0-9]+)*@[a-zA-Z0-9\-]+\.[0-9a-zA-Z\-]+$/;//电子邮件正则表达式
        var QQReg = /^\d[1-9]{5,10}$/;  //qq号正则表达式
        var isName = regTest(textStr,chineseReg);//公司名称验证
        var isNum = regTest(textStr,numReg); //电梯数量正则表达式验证
        var isUserName = regTest(textStr,userNameReg);//联系人正则表达式验证
        var isPhone = regTest(textStr,phoneReg);//联系方式正则表达式验证
        var isEmail = regTest(textStr,emailReg);//邮箱正则表达式验证
        var isQQ = regTest(textStr,QQReg);//qq号正则表达式验证
        var isNull =  isNullReg(textStr);//是否为空验证
        switch (parseInt(num)){
            case 1:
                corpFlag = corpNameTest(isNull,isName,"不能为空！","请输入中文！");
                break;
            case 2:
                liftNumFlag = corpNameTest(isNull,isNum,"不能为空！","请输入正整数！");
                break;
            case 3:
                userFlag = corpNameTest(isNull,isUserName,"不能为空！","请输入中文全名！");
                break;
            case 4:
                phoneFlag = corpNameTest(isNull,isPhone,"不能为空！","请输入手机号！");
                break;
            case 5:
                emailFlag = corpNameTest(isNull,isEmail,"不能为空！","请输入邮箱！");
                break;
            case 6:
                qqNumFlag = corpNameTest(isNull,isQQ,"不能为空！","请输入qq号码！");
                break;
        }
        function corpNameTest(isNull,isName,nullText,flaseText){
            if(isNull){
                $message.eq(num-1).text(nullText).css("color","red").fadeIn();
                return false;
            }else if(!isName){
                $message.eq(num-1).text(flaseText).css("color","red").fadeIn();
                return false;
            }else{
                $message.eq(num-1).fadeOut(0);
                return true;
            }
        }
        /**
         * 非空验证
         * @param Str 待验证字符串
         * @returns {boolean} 返回真为空，否则不为空
         */
        function isNullReg(Str){
            if(Str == ""){
                return true;
            }
            return false;
        }

        /**
         * 规则验证
         * @param s 待验证字符串
         * @param reg 正则表达式
         * @returns {boolean} 返回值
         */
        function regTest(s,reg){
            var re = reg;
            if (re.test(s)) {
                return true;
            }else{
                return false;
            }
        }
    });
    /**
     *  根所验证结果提交表单，如果验证不通过阻止提交
     * @param subFlag 布尔值，表示验证结果
     */
    var $sub = $(".sub-btn");
    $sub.click(function () {
//        console.log(type)
        if(!(corpFlag==true && liftNumFlag==true && userFlag==true && phoneFlag==true && emailFlag==true && qqNumFlag==true)){
            return false;
        }else{
            return true;
        }
    })
}



