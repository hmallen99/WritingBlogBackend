function getStory(req, res) {
    var result = {
        response : "If you are receivng this, then the backend is working"
    };
    return res.send(JSON.stringify(result));
}

exports.getStory = getStory