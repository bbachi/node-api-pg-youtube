const taskRepository = require('../repository/task.repository');

class TaskService {

    getTasks() {
        return taskRepository.getTasks();
    }

    createTask(task) {
        return taskRepository.createTask(task);
    }

    deleteTask(id) {
        return taskRepository.deleteTask(id);
    }

    updateTask(id, task) {
        return taskRepository.updateTask(id, task);
    }
}

module.exports = new TaskService();