require('dotenv').config();
const knex = require("knex")(require("../knexfile.js"));
const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.SECRET_KEY;
const bycrpyt = require('bcrypt');
const saltRounds = 10;

const registerUser = async (req, res) => {

    const { firstName, lastName, email, password } = req.body;
    console.log(`Received registration from ${email}`);

    try {
        console.log(`Encrypting password ${password}`)
        const hashedPassword = await bycrpyt.hash(password, saltRounds);
        console.log(`Password successfully encrypted ${hashedPassword}`)

        await knex('users').insert({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: hashedPassword,
        });

        console.log(`${email} registered successfully.`);
        res.status(201).json({
            message: "User registered successfully.",
        });
    } catch (error) {
        console.log("Error registering user.")
        res.status(500).json({ message: "Error registering user." });
    }
}

async function loginUser(req, res) {

    const { email, password } = req.body;
    console.log(`User logging in with ${email}`)

    try {
        console.log(`Attempting to find ${email}`);
        const userInDB = await knex('users').where({
            email: email
        }).first();

        if (!userInDB) {
            console.log(`${email} not found.`);
            return res.status(401).json({ error: "User not found." });
        }

        const match = await bycrpyt.compare(password, userInDB.password);

        if (match) {
            console.log(`${email} found and hashed password matched.`);
            const token = jwt.sign({ email: email }, SECRET_KEY, { expiresIn: '48h' });
            res.status(200).json({
                message: "Login successful",
                token: token
            });
        } else {
            console.log(`${email} found but hashed password did not match.`);
            res.status(401).json({ error: "Invalid credentials." })
        }

    } catch (error) {
        console.log(`Error during login try block.`)
        res.status(500).json({ message: "Error logging in." });
    }
}

module.exports = {
    registerUser,
    loginUser
}