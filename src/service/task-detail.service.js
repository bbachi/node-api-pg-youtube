const taskRepository = require('../repository/task.repository')

class TaskDetailService {

    getDetail(id) {
        return taskRepository.getDetail(id);
    }

    editTask(id, task) {
        return taskRepository.editTask(id, task);
    }

    removeTask(id) {
        return taskRepository.removeTask(id);
    }
}

module.exports = new TaskDetailService();