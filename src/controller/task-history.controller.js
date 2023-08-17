const taskHistoryService = require('../service/task-history.service')

class TaskHistoryController {

    listTasks(userName) {
        return taskHistoryService.listTasks(userName)
    }

    archiveTask(id) {
        return taskHistoryService.archiveTask(id)
    }
}

module.exports = new TaskHistoryController()