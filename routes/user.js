/**
 * 张荣亮业务层
 */
var userSQl=require('./mysql/userSql');
//注册
exports.index=function(req,res){
    var name=req.body.name;
    var pwd=req.body.pwd;
    var gender=req.body.gender;
    var email=req.body.email;
    console.log(name,pwd,gender,email);
//    res.send();
    userSQl.index(res,name,pwd,gender,email);
}
//登陆
exports.login=function(req,res){
    var email=req.body.email;
    var pwd=req.body.pwd;
    console.log(email,pwd);
    userSQl.login(res,email,pwd);
}
//页面加载查询
exports.main=function(req,res){
    userSQl.main(res);
}
//删除
exports.delData=function(req,res){
    var Eid=req.body.EId;
    console.log("删除业务层"+Eid)
    userSQl.delData(res,Eid);
}
//添加
exports.addData=function(req,res){
    var name=req.body.name;
    var pwd=req.body.pwd;
    var gender=req.body.gender;
    var email=req.body.email;
    console.log(name,pwd,gender,email);
//    res.send();
    userSQl.addData(res,name,pwd,gender,email);
}

//修改
exports.uptData=function(req,res){
    var id=req.body.uptId;
    var name=req.body.uptName;
    var pwd=req.body.uptPwd;
    var gender=req.body.uptGender;
    var email=req.body.uptEmail;
    console.log(name,pwd,gender,email);
//    res.send();
    userSQl.uptData(res,id,name,pwd,gender,email);
}