const functions = require("firebase-functions");
const app = require("express")();

const { db } = require("./util/admin");

const { getAllScreams, postOneScream } = require("./handlers/screams");
const { signup, login } = require("./handlers/users");

//scream routes
app.get("/screams", getAllScreams);
app.post("/scream", postOneScream);

//user routes
app.post("/signup", signup);
app.post("/login", login);

exports.api = functions.https.onRequest(app);
