const functions = require("firebase-functions");
const app = require("express")();

const { db } = require("./util/admin");

const { getAllScreams } = require("./handlers/screams");

app.get("/screams", getAllScreams);

exports.api = functions.region("us-central1").https.onRequest(app);
