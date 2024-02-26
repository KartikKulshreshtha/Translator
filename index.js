const express = require('express');
const bodyParser = require('body-parser');
const translate = require('google-translate-api');
const router = require('./routes/route');

const app = express();
const PORT = 8000;

app.use(bodyParser.json());
app.use('/api', router)

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
