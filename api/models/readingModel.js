const db = require("../../db-config.js");

module.exports = {
    findById
}

function findById(id) {
    return db("reading").where({ reading_id: id });
}