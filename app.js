const express = require("express");
const app = express();
const userModel = mongoose.model("user" , userSchema)
app.get("/", async (req, res) =>{
    res.render("home")
});

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;