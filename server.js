const express = require('express');
const app = express();
const router = require('./routers/router');

app.use(express.json());
app.use('/', router);

app.listen(3000, function() {
    console.log('app start on 3000');
})


