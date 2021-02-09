const express = require('express'); 
const app = express();
const port = 200;
const indexRouter = require('./routes/indexRouter');
const productsRouter = require('./routes/productsRouter')


app.set('views',__dirname + '/views'); //configuro la carpeta donde van a estar guardadas las vistas
app.set('view engine','ejs'); //le digo a express que el motor de vistas es EJS

app.use(express.static(__dirname + '/public')); //configuro los recursos estaticos

app.use('/',indexRouter);
app.use('/products',productsRouter);







app.listen(port,()=>console.log('El servidor está corriendo en el puerto ' + port))