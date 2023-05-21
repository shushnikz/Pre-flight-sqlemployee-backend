const config = require("./dbConfig");
const sql = require("mssql");

const getEmployees = async () => {
    try {
        console.log("Reached1")
        let pool = await sql.connect(config);
        console.log("Reached2")
        let employees = await pool.request().query("SELECT * from Employee")
        console.log("Reached 3")
        console.log(employees);
        console.log("Reached 4")
        return employees.recordset
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getEmployees: getEmployees
}