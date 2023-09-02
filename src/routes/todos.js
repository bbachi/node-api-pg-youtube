const express = require('express');
const router = express.Router();
const taskController = require('../controller/task.controller')


router.get('/tasks', async (req, res) => {
    const tasks = await taskController.getTasks();
    res.json(tasks);
})

router.post('/task', async (req, res) => {
    console.log('req.body' , req.body)
    const data = await taskController.createTask(req.body);
    res.json(data);
})

router.put('/task/:id', async (req, res) => {
    console.log('id  ', req.params.id);
    console.log('req.body ', req.body)
    const result = await taskController.updateTask(req.params.id, req.body);
    res.json(result);
})

router.delete('/task/', async (req, res) => {
    const result = await taskController.deleteTask(req.query.id);
    res.json(result);
})

// handling default  routes
router.get("/", (req, res) => {
    console.log("Handling undefined routes!!!");
    res.send("Tasks route works");
})

module.exports = router;