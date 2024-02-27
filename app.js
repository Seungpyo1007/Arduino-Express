const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// body-parser 미들웨어를 사용하여 POST 요청의 body를 파싱
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// POST 요청을 처리하는 핸들러
app.post('/temp', (req, res) => {
    // POST 요청의 body에서 temperature와 humidity 값을 추출
    const temperature = req.body.temperature;
    const humidity = req.body.humidity;

    // temperature와 humidity 값을 사용하여 처리 (예: 데이터베이스에 저장)
    console.log(`Received temperature: ${temperature}, humidity: ${humidity}`);

    // 클라이언트에 응답
    res.send('Data received!');
});

// 서버 시작
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
