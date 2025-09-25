const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost:27017/remote-work-viet', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Kết nối đến MongoDB thành công!'))
  .catch(err => console.error('Không thể kết nối đến MongoDB:', err));

app.get('/', (req, res) => {
  res.send('Chào mừng đến với Remote Work Viet!');
});

app.listen(PORT, () => {
  console.log(`Server đang chạy trên cổng ${PORT}`);
});
