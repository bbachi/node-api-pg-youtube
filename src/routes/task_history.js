const express = require('express');
const router = express.Router();
const taskHistoryController = require('../controller/task-history.controller')
const logger = require('../logger/api.logger')

router.route('/:id')
    .get(async (req, res) => {
        const result = await taskHistoryController.listTasks(req.params.id);
        res.json(result);
    })
    .delete(async (req, res) => {
        const result = await taskHistoryController.archiveTask(req.params.id);
        res.json(result);
    })

// handling default  routes
router.get("/", (req, res) => {
    logger.info("Handling default routes!!!");
    res.send("Tasks history works");
})

module.exports = router;


