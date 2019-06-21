require('./database');

const express = require('express');
const path = require('path');
const exphnd = require('express-handlebars');
const bodyParser = require('body-parser');
const productController = require('./controllers/productController');
const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', exphnd({extname: 'hbs', defaultLayout: 'mainLayout', layoutsDir: __dirname + '/views/layouts/'}));
app.set('view engine', 'hbs');

app.listen(3000, () => {
    console.log('Express Server Started at port: 3000');
});

app.use('/products', productController);



















// const express = require('express');
// const path = require('path');

// //const loginPage = require('./adminpanel/src/App')
// const app = express();
// const Post  = require('./controllers/admin').getAddProduct;
// const mongoConnect = require('./database').mongoConnect;

// const adminRoutes = require('./routes/admin');
// const login = require('./routes/login');

// //View engine setup
// //app.set('views', path.join(__dirname, 'view'));
// //app.set('view engine', 'ejs');

// //app.redirect(loginPage);

// app.use('/login', login);

// mongoConnect( () => {
//     app.listen(3000);
//     //Post();
// });