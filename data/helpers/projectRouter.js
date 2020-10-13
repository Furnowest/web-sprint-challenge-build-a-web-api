const express = require('express');
const projectData = require("./projectModel");
const { validateUserId, validateUser} = require("../middleware/projectMiddleWare")
const router =express.Router();

router.post('/', validateUser(),(req, res) => {
  
    projectData.insert(req.body)
          .then((add) => {
                  res.status(201).json(add)
              })
          .catch((error) => {
              console.log(error)
              res.status(500).json({
                  message: "error adding project"
              })
          })
  });

  router.get('/', (req, res) => {
    projectData.get()
    .then((user)=>{
        res.status(200).json(user)
    }) 
          .catch((error) => {
              next(error)
          })
  });


  router.get('/:id', validateUserId(),(req, res) => {

    res.status(200).json(req.user)
  });

  router.put('/:id', validateUser(), validateUserId(), (req, res) => {
    
   projectData.update(req.params.id, req.body)
          .then((update) => {
              if (update) {
                  res.status(200).json(update)
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
  
  router.delete('/:id', (req, res) => {
   
    projectData.remove(req.params.id)
          .then((remove) => {
              if (remove > 0) {
                  res.status(200).json({
                      message: "The user has been removed",
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