// var http = require('http');
// var querystring = require('querystring');
 
// var postHTML = 
//   '<html><head><meta charset="utf-8"><title>菜鸟教程 Node.js 实例</title></head>' +
//   '<body>' +
//   '<form method="post">' +
//   '网站名： <input name="name"><br>' +
//   '网站 URL： <input name="url"><br>' +
//   '<input type="submit">' +
//   '</form>' +
//   '</body></html>';
 
// http.createServer(function (req, res) {
//   var body = "";

//   req.on('data', function (chunk) {
//     body += chunk;
//   });

//   req.on('end', function () {
//     // 解析参数
//     body = querystring.parse(body);
//     // 设置响应头部信息及编码
//     res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
 
//     if(body.name && body.url) { // 输出提交的数据
//         res.write("网站名：" + body.name);
//         res.write("<br>");
//         res.write("网站 URL：" + body.url);
//     } else {  // 输出表单
//         res.write(postHTML);
//     }
    
//     res.end();
//   });
// }).listen(3000);

var express = require('express');
var app = express();
var Sqltest = require('./sqltest');
let insertMember = require('./promise.js').insertMember;
app.use(express.static('public')); //?
 
app.get('/index.htm', function (req, res) {
   res.sendFile( __dirname + "/" + "index.htm" ); // response the index.html file
})
 
app.get('/process_get_member', function (req, res) {
   // 输出 JSON 格式
   var response = {
       "name":req.query.name,
       "birth":req.query.birth,
       "sex":req.query.sex,
       "phoneNumber":req.query.phoneNumber,

   };
   //check type for the response
   let addmemberParam = [req.query.name, req.query.birth, req.query.sex, req.query.phoneNumber];
   
   console.log(response);
   sqltest = new Sqltest();
   return Promise.resolve()
   .then(insertMember(sqltest, addmemberParam)
   )
   .then(function(data){
      console.log("test");
      res.end(JSON.stringify(response) + 'Welcome' + addmemberParam); //Converts a JavaScript value to (JSON) string.
   })
   .catch(function(e){
   });
   // sqltest.insertMember(addmemberParam).then((data) => {
   //    console.log(data);
   //    res.end(JSON.stringify(response) + 'Welcome' + addmemberParam); //Converts a JavaScript value to (JSON) string.
   // }).catch((err)=> {
   //    console.log(err);
   //    res.end('insert failed'); 
   // });
   
})
 
var server = app.listen(8081, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("會員系統 http://%s:%s", host, port)
 
})