const { Task } = require('../model/task.model');

class TaskDetailRepository {

    getDetail(id) {
        return Task.find({_id: id});
    }

    editTask(id, task) {
        return Task.findByIdAndUpdate({_id: id}, {status: task.status, updatedBy: task.updatedBy})
    }

    removeTask(id) {
        return Task.findByIdAndDelete({_id: id});
    }
}

module.exports = new TaskDetailRepository()