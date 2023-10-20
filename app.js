const express = require('express');
const app = express();
const router = require('./routes');

app.use(router)

app.listen(port = 3000,() => console.log(`Server: http://localhost:${port}`))