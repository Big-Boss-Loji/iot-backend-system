import express from "express";

const router = express.Router();

router.get("/healthcheck", (req, res) => {
    res.status(200).json({
        status: "OK",
        message: "IoT Backend Service is healthy",
        timestamp: new Date().toISOString()
    });
});

export default router;