var http = require("http");
var url = require("url");
var fs = require("fs");
var mysql = require("mysql");
var con;

//서버 객체 생성
var server = http.createServer(function (request, response) {
    response.writeHead(200, {"Content-Type": "text/html;charset=utf-8"});
    var result = url.parse(request.url, true);

    console.log("파싱 결과 보고서 : ", result);

    var paramObj = result.query;
    if (result.pathname === "/login") {
        var sql = "select * from hclass where id = '"+paramObj.id+"' and pass = '" + paramObj.password + "'";
        
        console.log(sql);

        con.query(sql, function(error, record, field){
            if(error){
                console.log("DB 접속 실패", error)
            } else {
                if(record.length > 0){
                    response.end("<script>alert('인증성공!!');</script>")
                } else {
                    response.end("<script>alert('인증실패!!');</script>")
                }
            }
            
        });
    } else if (result.pathname === "/index") {
        fs.readFile("./index.html", "utf-8", function (error, data) {
            if (error) {
                console.log("읽기 실패", error);
            } else {
                response.end(data);
            }
        });
    }
});

// mysql 접속
function connectDB() {
    con = mysql.createConnection(
        {url: "localhost", user: "root", password: "1234", database: "node"}
    );
}

// 서버 가동
server.listen(8888, function () {
    console.log("Start server! portNum : 8888")
    connectDB();
});
