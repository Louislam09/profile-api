const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3001;
const userRouter = require('./routes');

const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/', userRouter);


app.listen(PORT, () => {
    console.log('Server is running on port 3001');
})