import express from "express";

import { createTour, deleteTour, getAllTour, getFeaturedTour, getSingleTour, getTourBySearch, getTourCount, updateTour } from "../controllers/tourController.js";

import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// Create New Tour
router.post("/", verifyAdmin, createTour);
// update Tour
router.put("/:id", verifyAdmin, updateTour);
// delete Tour
router.delete("/:id", verifyAdmin, deleteTour);
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