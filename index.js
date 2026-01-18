const express = require('express');
const app = express();
const port = 8080;

// ejs 기본 설정
// 디렉토리명은 기본적으로 views로 설정
app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req, res) => {
  // res.render를 사용하여 ejs 파일 그리고, 데이터를 전달
  res.render('index', { 
    title: 'EJS 페이지입니다', 
    message: 'Hello from Express Server!' 
  });
});

app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});
