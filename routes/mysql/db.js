var mysql = require('mysql');

function getConn(){
	var conn=mysql.createConnection({
		    host:'127.0.0.1',
    		port:3306,
    		database:'exam',//数据库库名
		    user:'root',         //数据库用户名
    		password:'zhangsan'     //数据库密码
	})
	return conn;
}
function closeConn(conn){
	conn.end();
}
exports.getConn=getConn;
exports.closeConn=closeConn;
