const MongoClient = require('mongodb').MongoClient;
const url = require("./urls").mongoDBUrl;

const client = new MongoClient(url, { useNewUrlParser: true });
client.connect();

const dbName = "writingdb";

async function run() {
    try {
        console.log("Connected correctly to server");

        const db = client.db(dbName);

        const col = db.collection("stories");

        let testStory = {
            "title": "test3",
            "date": new Date(2020, 5, 23),
            "author": "Henry Allen",
            "body": "This is a test",
        }

        const p = await col.insertOne(testStory);

        const myDoc = await col.findOne();

        console.log(myDoc);
        await client.close();
        console.log("closed client");
    } catch (err) {
        console.log(err.stack);
    }
}

run().catch(console.dir);