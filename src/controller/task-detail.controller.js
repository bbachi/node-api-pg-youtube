const taskDetailService = require('../service/task-detail.service');

class TaskDetailController {

    getDetail(id) {
        return taskDetailService.getDetail(id);
    }

    editTask(id, task) {
        return taskDetailService.editTask(id, task);
    }

    removeTask(id) {
        return taskDetailService.removeTask(id);
    }
}

module.exports = new TaskDetailController()