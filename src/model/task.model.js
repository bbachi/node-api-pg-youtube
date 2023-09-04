module.exports = (sequelize, DataTypes, Model) => {

    class Tasks extends Model {}

    Tasks.init({

        task: {
            type: DataTypes.STRING,
            allowNull: false
        },
        assignee: {
            type: DataTypes.STRING,
            allowNull: false
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        createdDate: {
            type: DataTypes.DATE,
            allowNull: false
        },
        updatedDate: {
            type: DataTypes.DATE
        },
        createdBy: {
            type: DataTypes.STRING,
            allowNull: false
        },
        updatedBy: {
            type: DataTypes.STRING
        }
    },{
        sequelize,
        modelName: 'tasks'
    })

    return Tasks;

}