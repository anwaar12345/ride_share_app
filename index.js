var express=require("express");
var bodyParser=require('body-parser');
var router = express.Router();
var app = express();
var authenticateController=require('./controllers/authenticate-controller');
var registerController=require('./controllers/register-controller');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
/* route to handle login and registration */
app.post('/api/register',registerController.register);
app.post('/api/authenticate',authenticateController.authenticate);

router.get('/api/register', function(req, res, next) {
  res.render('login', { title: 'logins' });
});

app.listen(8012);