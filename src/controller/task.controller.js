const taskService = require('../service/task.service');

class TaskController {

    getTasks() {
        return taskService.getTasks();
    }

    createTask(task) {
        return taskService.createTask(task);
    }

    deleteTask(id) {
        return taskService.deleteTask(id);
    }

    updateTask(id, task) {
        return taskService.updateTask(id, task);
    }
}

module.exports = new TaskController();