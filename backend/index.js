const express = require('express');
const multer = require('multer');
const csvParser = require('csv-parser');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const upload = multer({ dest: 'uploads/' });

app.use(cors());
app.post('/upload-csv', upload.single('file'), (req, res) => {
    const file = req.file;
    if (!file) {
        return res.status(400).json({ error: 'Por favor, envie um arquivo.' });
    }

    const filePath = path.join(__dirname, file.path);

    const results = [];
    fs.createReadStream(filePath)
        .pipe(csvParser())
        .on('data', (data) => results.push(data))
        .on('end', () => {
            fs.unlinkSync(filePath);
            res.json({ data: results });
        })
        .on('error', (err) => {
            console.error('Erro ao processar o CSV:', err);
            res.status(500).json({ error: 'Erro ao processar o arquivo CSV.' });
        });
});


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
