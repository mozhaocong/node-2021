var express = require('express')
const app = express()
import apiFile from './router/apiFile'


const routerData:ObjectMap = {
    apiFile: apiFile
}

for(let i in routerData) {
    console.log(routerData[i])
    app.use(`/${i}`,routerData.apiFile)
}



export default app
