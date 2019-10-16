import express from 'express';
import exphbs  from 'express-handlebars';
import path    from 'path';

//Initialization
const app = express();

//setting
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views')); 
app.set('.hbs', exphbs({
    extname:'.hbs',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    helpers: require('./lib/helpers')
}))


//Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));


//Routes

//Static files

//Starting folder

