/*
play this: https://www.youtube.com/watch?v=d-diB65scQU

Sing along:

here's a little code I wrote, please read the README word for word, don't worry, you got this
in every task there may be trouble, but if you worry you make it double, don't worry, you got this
ain't got no sense of what is REST? just concentrate on learning Express, don't worry, you got this
your file is getting way too big, bring a Router and make it thin, don't worry, be crafty
there is no data on that route, just write some code, you'll sort it out… don't worry, just hack it…
I need this code, but don't know where, perhaps should make some middleware, don't worry, just hack it

Go code!
*/
const express = require("express")
const projectRouter = require('./data/helpers/projectRouter')
const morgan = require("morgan");

const server = express();
// const port = 4000;
require('dotenv').config(); 

// this is custom morgan middleware
// function time (req, res, next) {
//     const time = new Date().toISOString()
//     console.log(`[${time}] ${req.ip} ${req.method} ${req.url}`)
//     next()
//   }


// server.use('/api/action', actionRouter)
server.use('/user', projectRouter)



server.use(express.json())
server.use(morgan("combined"))


server.get('/', (req, res) => {
  res.send(`<h2>Hello sprint </h2>`);
});

    // this is error middleware
server.use((err, req, res, next) => {
  console.log(err)
  res.status(500).json({
    message: "Something went wrong, please try again later",
  })
})

const port =process.env.PORT||4000

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})