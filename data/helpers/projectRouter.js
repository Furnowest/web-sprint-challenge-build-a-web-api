const express = require('express');
const actionData = require("./projectModel");
const { validateUserId, validateUser} = require("../middleware/users")
const router =express.Router();

router.post('/', validateUser(), validateUserId(),(req, res) => {
  
    actionData.insert(req.body)
          .then(data => {
                  res.status(201).json(data)
              })
          .catch((error) => {
              console.log(error)
              res.status(500).json({
                  message: "error adding project"
              })
          })
  });

  router.get('/', (req, res) => {
    data.get()
    .then(data=>{
        res.status(200).json(data)
    }) 
          .catch((error) => {
              next(error)
          })
  });


  router.get('/:id', validateUserId(),(req, res) => {

    res.status(200).json(req.user)
  });

  router.put('/:id', validateUser(), validateUserId(), (req, res) => {
    
    users.update(req.params.id, req.body)
          .then((user) => {
              if (user) {
                  res.status(200).json(user)
              } else {
                  res.status(404).json({
                      message: "The user could not be found",
                  })
              }
          })
          .catch((error) => {
              next(error)
          })
  });
  
  router.delete('/:id',validateUserId(), (req, res) => {
   
    users.remove(req.params.id)
          .then((count) => {
              if (count > 0) {
                  res.status(200).json({
                      message: "The user has been nuked",
                  })
              } else {
                  res.status(404).json({
                      message: "The user could not be found",
                  })
              }
          })
          .catch((error) => {
              next(error)
          })
  });


module.exports = router;