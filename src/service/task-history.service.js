const taskRepository = require('../repository/task.repository')

class TaskHistoryService {

    listTasks(userName) {
        return taskRepository.listTasks(userName)
    }

    archiveTask(id) {
        return taskRepository.archiveTask(id)
    }

}

module.exports = new TaskHistoryService();