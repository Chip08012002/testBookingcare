import express from 'express'
import bodyParser, { urlencoded } from 'body-parser';
import viewEngine from './config/viewEngine';
import initWebRoutes from './routes/web'
import connectDB from './config/connectdb'
require('dotenv').config();


let app = express();

// config app

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

viewEngine(app);
initWebRoutes(app);
connectDB();

let port = process.env.PORT||3000;

app.listen(port, () => {
    console.log (`backend Nodejs is running on the port: http://localhost:${port}`)
})