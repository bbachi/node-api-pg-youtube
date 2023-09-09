const express = require('express');
const bodyParser = require('body-parser')

const envFilePath = process.env.NODE_ENV 
    ? `./environments/.env.${process.env.NODE_ENV}` 
    : './environments/.env'

require('dotenv').config({path: envFilePath})

const todos = require('./src/routes/todos')
const taskDetail = require('./src/routes/task_detail')
const taskHistory = require('./src/routes/task_history')
const logger = require('./src/logger/api.logger')


const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

logger.debug('process.env Object ', process.env)

const port = process.env.PORT;

app.use('/todos', todos);
app.use('/todos/history', taskHistory);
app.use('/todos/detail', taskDetail);

app.get('/', (req, res) => res.sendFile(process.cwd() + '/dist/index.html'))

// handling undefined  routes, always define at the end
app.get("*", (req, res) => {
    logger.info("Handling undefined routes!!!");
    res.send("Please define this route !!!");
})


app.listen(port, () => logger.info(`Express Server listening on port ${port} and Running in Environment ${process.env.ENVIRONMENT}`))