import { Router } from "express";

const router = Router();

router.post("/register", (req, res) => {
    res.send("aaaa");
});

router.post("/login", (req, res) => {
    res.send("bbbb");
});

router.get("/me", (req, res) => {
    res.send("hello you!");
});

export default router;