const taskDetailRepository = require('../repository/task-detail.repository')

class TaskDetailService {

    getDetail(id) {
        return taskDetailRepository.getDetail(id);
    }

    editTask(id, task) {
        return taskDetailRepository.editTask(id, task);
    }

    removeTask(id) {
        return taskDetailRepository.removeTask(id);
    }
}

module.exports = new TaskDetailService();