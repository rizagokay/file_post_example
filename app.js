const express = require("express");
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
const stream = require('stream');

const uploadPath = path.normalize(process.cwd() + '/uploads');

var app = express();

app.use(bodyParser.json({limit: '50mb', type: 'application/json'}));
app.use(express.json());



app.listen(3000, () => {

    console.log("Server running on port 3000");

    app.get("/", (req, res) => {
        return res.send("Simple upload app.");
    });

    app.post('/update_ticket', (req, res) => {

        if (!fs.existsSync(uploadPath)) {
            fs.mkdirSync(uploadPath, 0755);
        }

        if (!req.body.file_data || !req.body.file_name) {
            return res.status(400).json({ 'message': 'No file uploaded or missing parameters.' });
        }

        const imgBuffer = Buffer.from(req.body.file_data, 'base64')

        var s = new stream.Readable()

        s.push(imgBuffer)
        s.push(null)

        s.pipe(fs.createWriteStream(path.join(uploadPath, req.body.file_name)));

        return res.json({ 'message': 'File uploaded successfully' });

    })

});