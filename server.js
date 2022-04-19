const express = require('express')
const mongoose = require('mongoose')
const helmet = require('helmet')
const morgan = require('morgan')
const bodyParser = require("body-parser")
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors')

/*IMPORT ROUTES */

const userRoute = require('./routes/user')
const authRoute = require('./routes/auth')
const postRoute = require("./routes/post");
/* const authAdmin =require('./middleware/adminAuth') */


const app = express()

mongoose.connect(process.env.MONGODB,{

  useUnifiedTopology: true,
}).then(x => {
  console.log(
    `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });
  
  app.use(express.json())

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(helmet());
  app.use(morgan("dev"));
  app.use(cors())

//routes
app.use('/api/user',userRoute) 
app.use('/api/auth', authRoute) 
app.use("/api/posts", postRoute);
/* 
app.use('/api/auth/refresh_token', authRoute)  */




/* Connections */
const port = process.env.PORT 
app.listen(port,()=>{
  console.log(`server listening ${port}`)
})