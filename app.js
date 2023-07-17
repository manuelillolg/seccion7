const express = require ('express');
const hbd = require('hbs');
const app = express ();
require('dotenv').config();

app.set('view engine','hbs');
hbd.registerPartials(__dirname+'/views/partials');

//servir contenido estatico
app.use(express.static('templated-roadtrip'));

//Esto ahora no se ejecuta porque el app.use se ejecuta en /
// y por tanto sobreescribe esto
// app.get('/', (req,res)=>{
//     res.send('Hola Mundo')
// });

/*
Para hacer que en la direccion /hola-mundo se ejecute
también una página web estática, lo que habría que hacer
es crear una carpeta nueva dentro de la carpeta public
a la que llamaremos hola-mundo. Al coincidir con el path
se mostrará el contenido html de esa carpeta
*/
app.get('/', (req,res)=>{
    res.render('home',{
        nombre: 'Manu',
        titulo: 'Curso de Node'
    });
});


app.get('/elements', (req,res) =>{
    res.render('elements',{
        nombre: 'Manu',
        titulo: 'Curso de Node'
    });  
});

app.get('/generic', (req,res) =>{
    res.render('generic',{
        nombre: 'Manu',
        titulo: 'Curso de Node'
    });
});


app.get('*', (req,res)=>{
    res.sendFile(__dirname + '/back/404.html');
});



app.listen(process.env.PORT);