function test(req, res) {
    console.log('This is a test url.');
    return res.send('This is a test url');
}

exports.test = test;