require('dotenv').config();
const knex = require("knex")(require("../knexfile"));

async function getComputers(req, res) {

    try {
        const computers = await knex('computers');
        return res.status(200).json({ computers });
    } catch (error) {
        console.error("Error fetching data: ", error);
        return res.status(500).json({ message: "Error fetching data." });
    }
}

async function getSingleComputer(req, res) {

    const computer = await knex('computers').where({ serial: req.params.serial }).first();

    if (computer) {
        console.log('Found computer: ', computer);
        return res.status(200).json({ computer });
    } else {
        console.log('Computer not found');
        return res.status(404).json({ message: "Computer not found in database." });
    }


}

async function addSingleComputer(req, res) {
    const computer = req.body;

    try {
        console.log("Attempting to add computer to database.");
        if (computer) {
            await knex('computers').insert(computer);
            console.log("Computer added successfully.");
            return res.status(200).json({ message: "Computer added succcessfully." });
        } else {
            console.log("Computer details is empty.");
            return res.status(500).json({ message: "Computer details is empty."});
        }
    } catch(error) {
        console.error("Error adding computer: ", error);
        return res.status(500).json({ message: "Error adding computer."});
    }
  


}

module.exports = {
    getComputers,
    getSingleComputer,
    addSingleComputer
}