"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_handlebars_1 = __importDefault(require("express-handlebars"));
const path_1 = __importDefault(require("path"));
//Initialization
const app = express_1.default();
//setting
app.set('port', process.env.PORT || 3000);
app.set('views', path_1.default.join(__dirname, 'views'));
app.set('.hbs', express_handlebars_1.default({
    extname: '.hbs',
    layoutsDir: path_1.default.join(app.get('views'), 'layouts'),
    partialsDir: path_1.default.join(app.get('views'), 'partials'),
    helpers: require('./lib/helpers')
}));
//Middlewares min 35:47
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
//Routes
app.use('/book', (req, res) => {
    res.send('Books');
});
//Static files
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
//Starting folder
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});
