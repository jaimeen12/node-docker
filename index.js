import express from 'express';
import expressEjsLayouts from 'express-ejs-layouts';

import router from './routes/index.js'

import dotenv from 'dotenv';
dotenv.config()

const app = express();

app.use(express.static('public'))

//EJS
app.use(expressEjsLayouts);
app.set('view engine', 'ejs');

//BodyParser
app.use(express.urlencoded({ extended: false }));


//Routes
app.use('/', router)

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on  ${PORT}`));