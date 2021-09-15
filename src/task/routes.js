import { Router } from "express";
import Task from "./schemas";

const router = Router();

router.get("", (req, res) => {
    Task.find({})
        .then((tasks) => res.json(tasks));
});

router.get("/:taskId", (req, res) => {
    Task.findById(req.params.taskId)
        .then((tasks) => res.json(tasks));
});

router.post("", (req, res) => {
    const task = new Task({
        title: req.body.title, 
        body: req.body.body,
    });
    task.save()
        .then((data) => res.send(data));
});

router.put("/:taskId", (req, res) => {
    Task.updateOne(
        {_id: req.params.taskId},
        {$set: {title: req.body.title, body: req.body.body} }
    )
    .then((data) => res.send({updated: data.modifiedCount > 0}));
});

router.delete("/:taskId", (req, res) => {
    Task.deleteOne({_id: req.params.taskId})
        .then((data) => res.send({deleted: data.deletedCount > 0}));
});

export default router;