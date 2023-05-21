const express = require("express");
const cors = require("cors")
const app = express();
app.use(cors())
const bodyParser = require("body-parser")

const router = express.Router();

const dbOperation = require("./dbfiles/dbOperation")
var employee = require("./employee")

dbOperation.getEmployees().then((result) => {
    console.log(result);
})


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


app.use("/api", router)

const PORT = 5000;
app.listen(PORT, () => console.log(`Server Started on Port ${PORT}`))

router.use((req, res, next) => {
    console.log("middleware")
    next();
})

router.route("/getEmployee").get((req, response) => {
    dbOperation.getEmployees().then((res) => {
        // console.log(res.recordset)
        response.json(res)
    })
})





