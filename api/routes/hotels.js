import express from  "express";



const router=express.Router();

import {
    
    createHotel,
    deleteHotel,
    getHotel,
    updateHotel,
    getHotels,
    countByCity,
    countByType,
    getHotelRooms


   
  } from "../con trollers/hotel.js";

  router.get("/", getHotels);
router.post("/",createHotel);

router.put("/:id", updateHotel);
//DELETE
router.delete("/:id", deleteHotel);
//GET

router.get("/find/:id", getHotel);


router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
router.get("/room/:id", getHotelRooms);

export default router
