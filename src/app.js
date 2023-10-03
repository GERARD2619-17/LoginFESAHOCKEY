const express =  require('express');
const { engine } = require('express-handlebars');
const myconnection =  require("express-myconnection");
const mysql = require ('mysql');
const session = require ('express-session');
const BodyParse =  require ('body-parser');

const app = express();
app.set('port',4000);

app.set('views', __dirname+'/views');
app.engine('.hbs', engine({
    extname:'.hbs',
}));
app.set('view engine', 'hbs');

app.use(BodyParse.urlencoded({
    extended: true
}));
app.use(BodyParse.json());

//conentaremos la base de datos de mysql
//con el servidor directo de mysql worbech
/*
app.use(myconnection(mysql, {
    host: '127.0.0.1',
    user: 'root',
    password: 'adminroot',
    port: 3308,
    database: 'nodelogin'
}));

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));*/

app.listen(app.get('port'),()=>{
    console.log('Listening on port', app.get('port'));
});

app.get('/', (req, res)=>{
    res.render('home');
});