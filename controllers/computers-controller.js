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
            return res.status(500).json({ message: "Computer details is empty." });
        }
    } catch (error) {
        console.error("Error adding computer: ", error);
        return res.status(500).json({ message: "Error adding computer." });
    }

}


async function updateSingleComputer(req, res) {
    const computer = req.body;

    try {
        console.log("Attempting to update computer in the database.");
        if (computer) {
            await knex('computers')
                .where({ serial: computer.serial })
                .update(computer);
            console.log("Computer updated successfully.");
            return res.status(200).json({ message: "Computer updated successfully." });
        } else {
            console.log("Computer details are empty.");
            return res.status(500).json({ message: "Computer details are empty." });
        }
    } catch (error) {
        console.error("Error updating computer: ", error);
        return res.status(500).json({ message: "Error updating computer." });
    }
}

async function deleteSingleComputer(req, res) {
    console.log("Initiate deleteSingleComputer function.");
    const serial = req.params.serial;

    try {
        console.log("Attempting to delete computer from the database.");
        if (serial) {
            await knex('computers')
                .where({ serial: serial })
                .del();
            console.log("Computer deleted successfully.");
            return res.status(200).json({ message: "Computer deleted successfully." });
        } else {
            console.log("Computer ID is missing.");
            return res.status(400).json({ message: "Computer serial is missing." });
        }
    } catch (error) {
        console.error("Error deleting computer: ", error);
        return res.status(500).json({ message: "Error deleting computer." });
    }
}


// TODO: add field for desktops, laptops, tiny pcs, etc.
async function getTotalNumOfComputers(req, res) {
    try {
        const countResult = await knex('computers').count('serial as count');
        const totalCount = countResult[0].count;
        console.log(`Total number of computers: ${totalCount}`);
        return res.status(200).json({ name: "Laptops", value: totalCount });
    } catch (error) {
        console.error('Error fetching total number of computers:', error);
        return res.status(500).json({ message: 'Error fetching total number of computers.' });
    }
}

module.exports = {
    getComputers,
    getSingleComputer,
    addSingleComputer,
    updateSingleComputer,
    deleteSingleComputer,
    getTotalNumOfComputers,
}