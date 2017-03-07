const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
// const enforce = require('express-sslify');

const app = express();
const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: '.hbs'
});

app.disable('x-powered-by');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

// Redirect non-HTTPS traffic in production - TODO: TEMP DISABLED
// if (config.env === production) app.use(enforce.HTTPS({ trustProtoHeader: true }));

app.use(express.static('assets'));
app.use('/', require('./www')(app));

app.listen(process.env.PORT || 3001);
