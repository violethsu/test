
const insertMember = function(conn,params) {
    conn.connect();
    let addSql = 'INSERT INTO violettest.Member(name, birth, sex, phoneNumber) VALUES (?, ?, ?, ?);';
    let addParams = params;
    console.log('addParams:' + addParams);
    let isSuccess = true

    //start to query insert 
    conn.query(addSql, addParams, function (err, result) { 
      //成功： err = ?, result = message
      //失敗：err = 1 , result = undefined
      if(err){
        console.log('[INSERT ERROR] - ',err.message);
        isSuccess = false;
        console.log('show error isSuccess:' + isSuccess);
      }

     console.log('--------------------------INSERT----------------------------');
     console.log('INSERT ID:', result);
     console.log('------------------------------------------------------------\n\n'); 
     console.log('show result isSuccess:' + isSuccess);
    });
    conn.end();
}

module.exports = {
    insertMember,
}