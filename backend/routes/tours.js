import express from "express";
import { createTour, deleteTour, getAllTour, getFeaturedTour, getSingleTour, getTourBySearch, getTourCount, updateTour } from "../controllers/tourController.js";

const router = express.Router();

// Create New Tour
router.post("/", createTour);
// update Tour
router.put("/:id", updateTour);
// delete Tour
router.delete("/:id", deleteTour);
// getSingle Tour
router.get("/:id", getSingleTour);
// getAllTour
router.get("/", getAllTour);
// getTour by search
router.get("/search/getTourBySearch", getTourBySearch);
// getFeatured Tour 
router.get("/search/getFeaturedTours", getFeaturedTour);
// getFeatured Tour 
router.get("/search/getTourCount", getTourCount);



export default router;