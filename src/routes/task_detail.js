const express = require('express');
const router = express.Router();
const taskDetailController = require('../controller/task-detail.controller')
const logger = require('../logger/api.logger')


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
    logger.info("Handling default routes!!!");
    res.send("Tasks detail works");
})

module.exports = router;