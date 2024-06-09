require('dotenv').config();
const knex = require("knex")(require("../knexfile"));

async function getAssets(req, res) {

    try {
        const computers = await knex('computers');
        return res.status(200).json({ computers });
    } catch(error) {
        console.error("Error fetching data: ", error);
        return res.status(500).json({ message: "Error fetching data." });
    }
}

module.exports = {
    getAssets,
}