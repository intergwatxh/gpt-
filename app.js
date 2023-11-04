const express = require('express');
const app = express();

app.use(express.static('public')); // 정적 파일 서비스를 위해 public 폴더 사용

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(3000, () => {
    console.log('서버가 포트 3000에서 실행 중입니다.');
});
