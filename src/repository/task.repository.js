const { connect } = require('../config/db.config')

class TaskRepository {

    db = {}

    constructor() {
        this.db = connect();

        // For Development
        this.db.sequelize.sync({ force: true }).then(() => {
            console.log("Drop and re-sync db.");
        });
    }

    getTasks() {
        return this.db.tasks.findAll();
    }

    createTask(task) {
        task.createdDate = new Date().toISOString();
        task.createdAt = new Date().toISOString();
        task.updatedAt = new Date().toISOString();
        return this.db.tasks.create(task);
    }

    deleteTask(id) {
        return this.db.tasks.destroy({
            where: {
                id: id
            }
        })
    }

    updateTask(id, task) {
        task.updatedAt = new Date().toISOString();
        return this.db.tasks.update({...task}, {
            where: {
                id: id
            }
        })
    }

    listTasks(userName) {
        return this.db.tasks.findAll({
            where: {
                createdBy: userName
            }
        })
    }

    archiveTask(id) {
        return this.db.tasks.destroy({
            where: {
                id: id
            }
        })
    }
}

module.exports = new TaskRepository()