// Connecting sql database
const config = {
    user: "Sushmitha",
    password: "Shush129",
    server: "SHUSH",
    database: "PreFlight",
    options: {
        trustServerCertificate: true,
        trustedConnection: true,
        enableArithAort: true,
        instancename: "SQLEXPRESS"
    },
    port: 1433
}

module.exports = config;