
const roomRouter = require('./room'); // ตรวจสอบชื่อไฟล์ที่สามารถเป็นไปได้

const express = require('express');
const app = express();

// กำหนดที่อยู่สำหรับไฟล์สถานะ
app.use(express.static('public'));

// กำหนดสำหรับ route อื่น ๆ
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// ทำการ listen ที่พอร์ตที่กำหนด
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

