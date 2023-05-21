const express = require("express");
const cors = require("cors")
const app = express();
app.use(cors())
const bodyParser = require("body-parser")

// ceate a router to handle all beginning request
const router = express.Router();

// importing databse connection
const dbOperation = require("./dbfiles/dbOperation")
var employee = require("./employee")


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


app.use("/api", router)

app.get('/', (req, res) => {
    res.send("Sql Employee Data")
})

const PORT = 5000;
app.listen(PORT, () => console.log(`Server Started on Port ${PORT}`))

router.use((req, res, next) => {
    console.log("middleware")
    next();
})

// api end point to get all the employees data
router.route("/getEmployee").get((req, response) => {
    dbOperation.getEmployees().then((res) => {
        // console.log(res.recordset)
        response.json(res)
    })
})





