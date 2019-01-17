let mysql  = require('mysql');
function Sqltest() { 
  let connection = mysql.createConnection({     
    host     : '192.168.122.174',       
    user     : 'root',              
    password : 'gama.net',       
    port: '3306',                   
    database: 'violettest' 
  }); 
  return connection;
  // connection.connect();
  // this.insertMember = function(params) {
  //   let addSql = 'INSERT INTO violettest.Member(name, birth, sex, phoneNumber) VALUES (?, ?, ?, ?);';
  //   let addParams = params;
  //   console.log('addParams:' + addParams);
  //   let isSuccess = true

  //   //start to query insert 
  //   connection.query(addSql, addParams, function (err, result) { 
  //     //成功： err = ?, result = message
  //     //失敗：err = 1 , result = undefined
  //     if(err){
  //       console.log('[INSERT ERROR] - ',err.message);
  //       isSuccess = false;
  //       console.log('show error isSuccess:' + isSuccess);
  //     }

  //    console.log('--------------------------INSERT----------------------------');
  //    console.log('INSERT ID:', result);
  //    console.log('------------------------------------------------------------\n\n'); 
  //    console.log('show result isSuccess:' + isSuccess);
  //   });

  //   // stop to connection
  //   connection.end();

  //   return new Promise((resolve, reject) => {
  //     if(isSuccess) {
  //       //data
  //       resolve('Success insert.');
  //     } else {
  //       //error
  //       reject('Failed to insert:'+`${err.message}`);
  //     }
  //   });
  // };
}
module.exports = Sqltest;