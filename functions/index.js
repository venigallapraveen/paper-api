const functions = require("firebase-functions");
const app = require("express")();
const FBAuth = require("./util/fbAuth");

const { db } = require("./util/admin");

const { getAllScreams, postOneScream } = require("./handlers/screams");
const {
  signup,
  login,
  uploadImage,
  addUserDetails,
  getAuthenticatedUser
} = require("./handlers/users");

//scream routes
app.get("/screams", getAllScreams);
app.post("/scream", FBAuth, postOneScream);

//user routes
app.post("/signup", signup);
app.post("/login", login);
app.post("/user/image", FBAuth, uploadImage);
app.post("/user", FBAuth, addUserDetails);
app.get("/user", FBAuth, getAuthenticatedUser);

exports.api = functions.https.onRequest(app);
