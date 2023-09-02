const testData = require('../test_data/test-data.service')

class TaskService {

    getTasks() {
        return testData.getTasks
    }

    createTask(task) {
        return testData.createTask(task);
    }

    deleteTask(id) {
        return id;
    }

    updateTask(id, task) {
        return id;
    }
}

module.exports = new TaskService();