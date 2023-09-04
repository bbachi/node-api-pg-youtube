const { sequelize, Sequelize, DataTypes, Model } = require('sequelize');


const connect = () => {

    const hostName = "localhost";
    const userName = "bachina";
    const password = "";
    const database = "bachina";
    const dialect = "postgres";


    const sequelize = new Sequelize(database, userName, password, {
        host: hostName,
        dialect,
        operatorsAliases: false,
        pool: {
            max: 30,
            min: 0,
            acquire: 20000,
            idle: 5000
        }
    });

    const db = {};
    db.Sequelize = Sequelize;
    db.sequelize = sequelize;

    // Register your models here
    db.tasks = require('../model/task.model')(sequelize, DataTypes, Model)

    return db;

}


module.exports = {
    connect
}