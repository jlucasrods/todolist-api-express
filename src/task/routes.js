import { Router } from "express";

const router = Router();

router.get("", (req, res) => {
    res.send("aaaa");
});

router.get("/", (req, res) => {
    res.send("bbbb");
});

router.post("", (req, res) => {
    res.send("hello you!");
});

router.put("/", (req, res) => {
    res.send("bbbb");
});

router.delete("/", (req, res) => {
    res.send("bbbb");
});

export default router;