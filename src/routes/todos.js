const express = require('express');
const router = express.Router();
const taskController = require('../controller/task.controller')
const logger = require('../logger/api.logger')


router.get('/tasks', async (req, res) => {
    const tasks = await taskController.getTasks();
    res.json(tasks);
})

router.post('/task', async (req, res) => {
    logger.debug('req.body' , req.body)
    const data = await taskController.createTask(req.body);
    res.json(data);
})

router.put('/task/:id', async (req, res) => {
    logger.debug('id  ', req.params.id);
    logger.debug('req.body ', req.body)
    const result = await taskController.updateTask(req.params.id, req.body);
    res.json(result);
})

router.delete('/task/', async (req, res) => {
    const result = await taskController.deleteTask(req.query.id);
    res.json(result);
})

// handling default  routes
router.get("/", (req, res) => {
    logger.info("Handling undefined routes!!!");
    res.send("Tasks route works");
})

module.exports = router;