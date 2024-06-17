
const user = require("./user")
const cust = require("./cust")
const ordermast = require("./ordermast")
const ordertrx = require("./ordertrx")


const itemmast = require("./itemmast")
const supermast = require("./super")

user.sync({alter:true})














cust.sync({alter:true})
ordertrx.sync({alter:true})
ordermast.sync({alter:true})
itemmast.sync({alter:true})
supermast.sync({alter:true})

