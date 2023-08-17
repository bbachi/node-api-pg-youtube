const { Task } = require('../model/task.model');

class TaskHistoryRepository {

    listTasks(userName) {
        return Task.find({createdBy: userName});
    }

    archiveTask(id) {
        return Task.findByIdAndUpdate({_id: id}, {status: "ARCHIVED"})
    }
}

module.exports = new TaskHistoryRepository()