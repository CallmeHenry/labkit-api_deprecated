require('dotenv').config();
const express = require("express");
const app = express();
const cors = require("cors");

const userRoutes = require("./routes/users");
const modelsRoutes = require("./routes/models");

const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

// middleware for verifying token -- useful for retrieving profile information
function authorize(req, res, next) {
    const { authorization } = req.headers;
    const token = authorization.slice("Bearer ".length);

    try {
        const payload = jwt.verify(token, SECRET_KEY);
        req.decoded = payload;
        next();
    } catch (error) {
        res.status(401).json({ message: "Unable to authorize." });
    }
}

app.use("/signin", userRoutes);
app.use("/toolkit", modelsRoutes);

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
})
