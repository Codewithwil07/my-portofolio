const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

app.use(bodyParser.json());

app.post('/send-email', async (req, res) => {
    const { name, email, message } = req.body;

    res.json({ succes: true });
});

app.listen(port, () => {
  console.log(`Server is Running on server ${port}`);
})
