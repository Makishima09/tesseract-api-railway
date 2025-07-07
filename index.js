const express = require('express');
const multer = require('multer');
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

const upload = multer({ dest: 'uploads/' });
const app = express();
const PORT = process.env.PORT || 8080;

app.post('/ocr', upload.single('image'), (req, res) => {
  const filePath = req.file.path;
  const outputPath = `${filePath}-output`;

  exec(`tesseract ${filePath} ${outputPath} -l spa`, (err) => {
    if (err) {
      return res.status(500).json({ error: 'OCR failed', detail: err.message });
    }

    fs.readFile(`${outputPath}.txt`, 'utf8', (err, data) => {
      if (err) return res.status(500).json({ error: 'Read output failed' });

      fs.unlinkSync(filePath);
      fs.unlinkSync(`${outputPath}.txt`);

      res.json({ text: data });
    });
  });
});

app.listen(PORT, () => {
  console.log(`OCR service running on port ${PORT}`);
});