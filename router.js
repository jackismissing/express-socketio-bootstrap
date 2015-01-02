////////////
// ROUTER //
////////////
module.exports = function(app, socketManager)
{
    var bodyParser = require('body-parser')
    app.use( bodyParser.json() );       // to support JSON-encoded bodies
    app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
      extended: true
    })); 

    app.get('/', function (req, res) 
    {
        console.log('Get root /');
        res.send('Hello World');
    });

    app.use('/socket', function (req, res) 
    {
        socketManager.somePublicFunction();
        console.log(req.body);
        res.send('message received'); 
  
    });

};




