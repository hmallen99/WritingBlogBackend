function getStory(req, res) {
    var name = req.body.name;
    var result = {
        title : name,
        author: "Henry Allen",
        body: "lorem ipsumasf jkajsd;lfkja;sd jdkljg;askdjf ",
    };
    return res.send(JSON.stringify(result));
}

exports.getStory = getStory