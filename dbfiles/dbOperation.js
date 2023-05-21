const config = require("./dbConfig");
const sql = require("mssql");

const getEmployees = async () => {
    try {
        let pool = await sql.connect(config);
        let employees = await pool.request().query("SELECT * from Employee")
        console.log(employees);
        return employees.recordset
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getEmployees: getEmployees
}