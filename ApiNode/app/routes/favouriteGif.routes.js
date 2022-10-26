module.exports = app => {
    const  favouriteGifs = require("../controllers/favouriteGifs.controller.js");
  
    var router = require("express").Router();  
    
    router.post("/",  favouriteGifs.create);  
    
    router.get("/findAll",  favouriteGifs.findAll);  
    
    router.get("/published",  favouriteGifs.findAllPublished);  
    
    router.get("/:id",  favouriteGifs.findOne);  
    
    router.put("/:id",  favouriteGifs.update);  
    
    router.delete("/:id",  favouriteGifs.delete);  
    
    router.delete("/",  favouriteGifs.deleteAll);
  
    app.use('/api/favouriteGifs', router);
  };