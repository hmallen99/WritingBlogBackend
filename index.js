var express = require("express");
var cors = require("cors");
var MongoProvider = require("./MongoProvider").MonggoProvider;

var mongoProvider = new MongoProvider();

var app = express();

var port = 4000;

app.use(cors());

app.use(express.json());

app.get("/", function(req, res) {
    res.send("Welcome");
})

app.use(function(req, res) {
    var str = req.originalUrl;
    console.log(str);
    try{
        str =str.substring(1);
        var n = str.indexOf("/");
        var resstr = str.substring(0, n);
        var pkg_path = "./routes/" + resstr;
        var func_path = str.substring(n + 1);
        var pkg = require(pkg_path);
    } catch (e) {
        console.log(e);
    }
    if (pkg && typeof pkg.handle[func_path] === 'function') {
        pkg.handle[func_path](req, res, mongoProvider);
    }
})

app.listen(port, function() {
    console.log('-------SERVER INITIALIZED-------');
})

