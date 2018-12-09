const express = require("express")
const moment = require("moment")
const expressObj = express()

expressObj.get("/date",function(req,res){
        let now = moment().utc()
        let json = {
            date: now.format("DD/MM/YYYY"),
            hourMin: now.format("HH:MM")
        }
        res.send(json)
}).listen(555)