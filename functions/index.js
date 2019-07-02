const functions = require("firebase-functions");
const app = require("express")();

const { db } = require("./util/admin");

const { getAllScreams, postOneScream } = require("./handlers/screams");

app.get("/screams", getAllScreams);
app.post("/scream", postOneScream);

exports.api = functions.region("us-central1").https.onRequest(app);
