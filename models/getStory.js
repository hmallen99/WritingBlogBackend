function getStory(req, res, MongoProvider) {
    var query = { title: req.body.name };
    MongoProvider.queryDB(query, function(err, result) {
        if (err) throw err;
        console.log(result);
        res.send(JSON.stringify(result));
    })
}

exports.getStory = getStory