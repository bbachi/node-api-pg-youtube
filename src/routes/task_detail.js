const express = require('express');
const router = express.Router();
const taskDetailController = require('../controller/task-detail.controller')


router.route('/:id')
    .get(async (req, res) => {
        const result = await taskDetailController.getDetail(req.params.id);
        res.json(result);
    })
    .delete(async (req, res) => {
        const result = await taskDetailController.removeTask(req.params.id);
        res.json(result);
    })
    .put(async (req, res) => {
        const result = await taskDetailController.editTask(req.params.id, req.body);
        res.json(result);
    })

// handling default  routes
router.get("/", (req, res) => {
    console.log("Handling default routes!!!");
    res.send("Tasks detail works");
})

module.exports = router;