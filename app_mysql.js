const express = require('express');
require('dotenv').config({ path: 'mysql/.env' }); // mysql 폴더에 있는 .env 파일을 찾아서 환경변수를 설정
const mysql = require("./mysql"); // mysql 폴더의 index.js
//const cors = require('cors');
const app = express()
const port = 3000 // 서버포트번호

// const corsOptions= {
//   origin: 'http://localhost:8080', // 허용할 도메인
//   optionsSuccessStatus: 200
// }

// app.use(cors(corsOptions)) // cors를 모든 라우터에 적용

// app.listen() 함수를 ㅏ용해서 서버를 실행합니다.
// 클라이언트는 'host:port'로 노드 서버에 요청을 보낼 수 있습니다.
app.listen(port, () => {
  console.log(`서버가 실행됩니다. http://localhost:${port}`)
})

// 클라이언트에서 HTTP 요청 메소드 중 GET을 이용해서 'host:3000/consults'로 요청을 보내면 실행되는 라우트입니다.
app.get('/consults', async (req, res) => {
  // localhost:3000/customers 접속 시 실행
  const consults = await mysql.query('consultList'); //sql.js 파일에 작성된 customerList 쿼리를 실행
  console.log(consults);
  res.send(consults); // 결과를 클라이언트로 보냄
});