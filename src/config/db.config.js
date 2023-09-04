const { sequelize, Sequelize, DataTypes, Model } = require('sequelize');


const connect = () => {

    console.log('process.env.HOST_NAME  ', process.env.HOST_NAME)

    const hostName = process.env.HOST_NAME;
    const userName = process.env.USER_NAME;
    const password = process.env.PASSWORD;
    const database = process.env.DATABASE;
    const dialect = process.env.DIALECT;


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