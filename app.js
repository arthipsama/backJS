const express = require('express');
const app = express();
const roomRouter = require('./room');  // เปลี่ยนตามชื่อไฟล์ที่คุณได้ตั้งในโปรเจคของคุณ

app.use(express.static('public'));

// เรียกใช้ Router สำหรับ API
app.use('/api', roomRouter);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
