// set up ========================
   var express  = require('express');
   var app      = express();                               // create our app w/ express
   var mongoose = require('mongoose');                     // mongoose for mongodb
   var morgan = require('morgan');             // log requests to the console (express4)
   var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
   var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)

   var http = require('http');

   // configuration =================

   app.use(express.static(__dirname + '/public'));                 // set the static files location /public/img will be /img for users
   app.use(morgan('dev'));                                         // log every request to the console
   app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
   app.use(bodyParser.json());                                     // parse application/json
   app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
   app.use(methodOverride());

   app.get('/api/items', function(req, res) {

    http.get({
       //host: 'api.steampowered.com',
       //path: '/IEconDOTA2_570/GetGameItems/v1/?key=yourkey'
       host: 'www.dota2.com',
       path: '/jsfeed/itemdata'
    }, function(response) {
        // Continuously update stream with data
        var body = '';
        response.on('data', function(d) {
            body += d;
        });
        response.on('end', function() {
            // Data reception is done, do whatever with it!
            var parsed = JSON.parse(body);
            res.json(parsed);
        });
    });
   });

   //http://api.steampowered.com/IEconDOTA2_570/GetHeroes/v1/?key=yourkey

   // application -------------------------------------------------------------
    app.get('*', function(req, res) {
        res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });

   // listen (start app with node server.js) ======================================
   app.listen(8080);
   console.log("App listening on port 8080");
