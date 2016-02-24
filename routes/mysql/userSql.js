/**
 * 张荣亮 数据层
 */
//注册
var sql=require("./db");

//注册
exports.index=function(res,name,pwd,gender,email){
    var conn=sql.getConn();
    var sqlString="insert into testtable set ?"
    conn.query(sqlString,{f_username:name,f_pwd:pwd,f_gender:gender,f_email:email},function(err,data){
        if(err){
            console.log("注册失败");
            console.log(err);
            sql.closeConn(conn);//关闭数据库
        }else{
            console.log(data);
            console.log("注册成功");
            res.send('1');//页面判断是否继续 下一步操作
            sql.closeConn(conn);//关闭数据库
        }

    })
}
//登陆
exports.login=function(res,email,pwd){
    var conn=sql.getConn();
    var sqlString="select COUNT(*) count from testtable where f_email=? and f_pwd=?"
    conn.query(sqlString,[email,pwd],function(err,data){
        if(err){
            console.log("登录失败");
            console.log(err);
            sql.closeConn(conn);//关闭数据库
        }else{
            if(data[0].count){
                console.log(data[0].count);
                console.log("有这个用户，登录成功");
                res.send('1');//页面判断是否继续 下一步操作
                sql.closeConn(conn);//关闭数据库
            }else{
                console.log(data[0].count);
                console.log("没有这个用户");
                res.send('0');//页面判断是否继续 下一步操作
                sql.closeConn(conn);//关闭数据库
            }
        }

    })
}
//页面加载查询
exports.main=function(res){
    var conn=sql.getConn();
    var sqlInput="select * from testtable ";
    conn.query(sqlInput,function(err,data){
        if(err){
            console.log("查询失败");
            console.log(err);
            sql.closeConn(conn);//关闭数据库
        }else{
            console.log("查询成功");
            var str=JSON.stringify(data)
            res.send(str);
            sql.closeConn(conn);//关闭数据库
        }
    })
}

//主页面按id删除数据
exports.delData=function(res,Eid){
    console.log("数据舱"+Eid)
    var conn=sql.getConn();
    var sqlDelete="delete from testtable where pk_id= ?";
    conn.query(sqlDelete,[Eid],function(err,data){
        if(err){
            console.log(err);
            sql.closeConn(conn);//关闭数据库
        }else{
            if(data.affectedRows){
                console.log('删除成功');
                console.log(data.affectedRows);
                res.send();
                sql.closeConn(conn);//关闭数据库
            }else{
                console.log('删除失败');
                console.log(data);
                sql.closeConn(conn);//关闭数据库
            }
        }
    })
}
//主页面添加
exports.addData=function(res,name,pwd,gender,email){
    var conn=sql.getConn();
    var sqlString="insert into testtable set ?"
    conn.query(sqlString,{f_username:name,f_pwd:pwd,f_gender:gender,f_email:email},function(err,data){
        if(err){
            console.log("添加失败");
            console.log(err);
            res.send("添加失败");
            sql.closeConn(conn);//关闭数据库
        }else{
            console.log(data);
            console.log("添加成功");
            res.send("添加成功");
            sql.closeConn(conn);//关闭数据库
        }

    })
}
//主页面修改
exports.uptData=function(res,id,name,pwd,gender,email){
    var conn=sql.getConn();
    var sqlString="update testtable set f_username=?,f_pwd=?,f_gender=?,f_email=?  where pk_id=?"
    conn.query(sqlString,[name,pwd,gender,email,id],function(err,data){
        if(err){
            console.log("修改失败");
            console.log(err);
            res.send("修改失败")
            sql.closeConn(conn);//关闭数据库
        }else{
            console.log(data);
            console.log("修改成功");
            res.send("修改成功");
            sql.closeConn(conn);//关闭数据库
        }

    })
}