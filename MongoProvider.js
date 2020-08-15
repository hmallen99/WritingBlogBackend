var MongoClient = require('mongodb').MongoClient;
var url = require("./urls").mongoDBUrl;

class MonggoProvider {
    // only initialize this once
    constructor() {
        this.client = new MongoClient(url, { useNewUrlParser: true });
        this.client.connect();
    }

    queryDB(query, resultCB) {
        const db = this.client.db("writingdb");
        const col = db.collection("stories");
        col.find(query).toArray(resultCB);
    }
}

exports.MonggoProvider = MonggoProvider;