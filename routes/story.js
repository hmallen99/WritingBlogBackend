var requestHandlers = require("../models/getStory");

var handle = {}
handle["getStory"] = requestHandlers.getStory;

exports.handle = handle;