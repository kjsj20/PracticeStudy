var http = require("http");
var ejs = require("ejs");
var fs = require("fs");
var express = require("express");
var static = require("serve-static");
var mysql = require("mysql");
var common = require("./common.js");
let conStr={
    url: "localhost",
    user: "root",
    password: "1234",
    database: "node"
}

let con;

var app = express();

app.use(static(__dirname+"/static"));

app.use(express.urlencoded({
    extended:true
}));

app.post("/notice/regist", function(request,response){
    var title = request.body.title;
    var writer = request.body.writer;
    var content = request.body.content;

    var sql = "insert into notice(title, writer, content) values(?,?,?)"

    con.query(sql, [title, writer, content], function(qErr,fields){
        if(qErr){
            console.log("insert 실패", qErr);
        } else{
            response.writeHead(200, {"Content-Type":"text/html;charset=utf-8"});
            response.end(common.getMsgURL("등록성공", "/notice/list"));
        }
    });
});

app.get("/notice/list", function(request,response){
    var sql = "select * from notice order by notice_id desc"
    con.query(sql,function(qErr, record, fields){
        if(qErr){
            console.log("게시판 조회 실패", qErr);
        }else{
            fs.readFile("./list.ejs", "utf-8", function(readErr, data){
                if(readErr){
                    console.log("list.ejs 읽기 실패", readErr);
                } else {
                    response.writeHead(200, {"Content-Type" : "text/html;charset=utf-8"});
                    response.end(ejs.render(data,{
                        noticeArray:record
                    }));
                }
            });
        }
    });
});

app.get("/notice/detail", function(request, response){
    var notice_id = request.query.notice_id;
    var sql = "select * from notice where notice_id = ?";
    
    con.query(sql, [notice_id], function(qErr, record, fields){
        if(qErr){
            console.log("게시판 내용 조회 실패", readErr);
        } else {
            fs.readFile("./detail.ejs", "utf-8", function(readErr, data){
                if(readErr){
                    console.log("게시판 내용 read실패", readErr);
                } else {
                    response.writeHead(200, {"Content-Type":"text/html;charset=utf-8"});
                    response.end(ejs.render(data,{
                        notice:record[0]
                    }));
                }
            });
        }
    });
});

app.post("/notice/del", function(request,response){
    var notice_id = request.body.notice_id;
    sql = "delete from notice where notice_id=?"

    con.query(sql, [notice_id], function(qErr, fields){
        if(qErr){
            console.log("삭제 실패...", qErr);
        } else {
            response.writeHead(200, {"Content-Type":"text/html;charset=utf-8"});
            response.end(common.getMsgURL("삭제 성공!", "/notice/list"));
        }
    });
});

app.post("/notice/edit", function(request, response){
    var title = request.body.title;
    var writer = request. body.writer;
    var content = request.body.content;
    var notice_id = request.body.notice_id;

    var sql = "update notice set title = ?, writer = ?, content = ? where notice_id = ?";

    con.query(sql, [title, writer, content, notice_id], function(qErr, fields){
        if(qErr){
            console.log("수정 실패...", qErr);
        } else {
            response.writeHead(200, {"Content-Type":"text/html;charset=utf-8"});
            response.end(common.getMsgURL("등록성공!", "/notice/detail?notice_id=" + notice_id));
        }
    })
});

function connect(){
    con = mysql.createConnection(conStr);
}

var server = http.createServer(app);

server.listen(9999, function(){
    console.log("The Server is running at 9999 port...");
    connect();
});