import express from 'express';
import path from 'path';
import exphbs from 'express-handlebars';

//importing 
import IndexRoutes from './routes';

//Initialization
const app = express();

//setting
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views')); 
app.engine('.hbs', exphbs({
    extname: '.hbs',
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    helpers: require('./lib/helpers')
}));

app.set('view engine', '.hbs');

//Middlewares min 35:47
app.use(express.json());
app.use(express.urlencoded({extended: false}));


//Routes
app.use('/books', IndexRoutes);


//Static files
app.use(express.static(path.join(__dirname, 'public')));


//Starting folder
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`)
});
