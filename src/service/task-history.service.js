const taskHistoryRepository = require('../repository/task-history.repository');

class TaskHistoryService {

    listTasks(userName) {
        return taskHistoryRepository.listTasks(userName)
    }

    archiveTask(id) {
        return taskHistoryRepository.archiveTask(id)
    }

}

module.exports = new TaskHistoryService();