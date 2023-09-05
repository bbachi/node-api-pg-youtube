/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const express = __webpack_require__(/*! express */ \"express\");\nconst bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\")\n\nconst envFilePath =  true \n    ? `./environments/.env.${\"development\"}` \n    : undefined\n\n__webpack_require__(/*! dotenv */ \"dotenv\").config({path: envFilePath})\n\nconst todos = __webpack_require__(/*! ./src/routes/todos */ \"./src/routes/todos.js\")\nconst taskDetail = __webpack_require__(/*! ./src/routes/task_detail */ \"./src/routes/task_detail.js\")\nconst taskHistory = __webpack_require__(/*! ./src/routes/task_history */ \"./src/routes/task_history.js\")\nconst logger = __webpack_require__(/*! ./src/logger/api.logger */ \"./src/logger/api.logger.js\")\n\n\nconst app = express();\n\napp.use(bodyParser.urlencoded({ extended: false }));\napp.use(bodyParser.json());\n\nlogger.debug('process.env Object ', process.env)\n\nconst port = process.env.PORT || 3000;\n\napp.use('/todos', todos);\napp.use('/todos/history', taskHistory);\napp.use('/todos/detail', taskDetail);\n\napp.get('/', (req, res) => res.sendFile(process.cwd() + '/dist/index.html'))\n\n// handling undefined  routes, always define at the end\napp.get(\"*\", (req, res) => {\n    logger.info(\"Handling undefined routes!!!\");\n    res.send(\"Please define this route !!!\");\n})\n\n\napp.listen(port, () => logger.info(`Express Server listening on port ${port} and Running in Environment ${\"development\"}`))\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./src/config/db.config.js":
/*!*********************************!*\
  !*** ./src/config/db.config.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const { sequelize, Sequelize, DataTypes, Model } = __webpack_require__(/*! sequelize */ \"sequelize\");\nconst logger = __webpack_require__(/*! ../logger/api.logger */ \"./src/logger/api.logger.js\")\n\n\nconst connect = () => {\n\n    logger.info('process.env.HOST_NAME  ', process.env.HOST_NAME)\n\n    const hostName = process.env.HOST_NAME || 'localhost';\n    const userName = process.env.USER_NAME || 'bachina';\n    const password = process.env.PASSWORD || '';\n    const database = process.env.DATABASE || 'bachina';\n    const dialect = process.env.DIALECT || 'postgres';\n\n\n    const sequelize = new Sequelize(database, userName, password, {\n        host: hostName,\n        dialect,\n        operatorsAliases: false,\n        pool: {\n            max: 30,\n            min: 0,\n            acquire: 20000,\n            idle: 5000\n        }\n    });\n\n    const db = {};\n    db.Sequelize = Sequelize;\n    db.sequelize = sequelize;\n\n    // Register your models here\n    db.tasks = __webpack_require__(/*! ../model/task.model */ \"./src/model/task.model.js\")(sequelize, DataTypes, Model)\n\n    return db;\n\n}\n\n\nmodule.exports = {\n    connect\n}\n\n//# sourceURL=webpack:///./src/config/db.config.js?");

/***/ }),

/***/ "./src/controller/task-detail.controller.js":
/*!**************************************************!*\
  !*** ./src/controller/task-detail.controller.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const taskDetailService = __webpack_require__(/*! ../service/task-detail.service */ \"./src/service/task-detail.service.js\");\n\nclass TaskDetailController {\n\n    getDetail(id) {\n        return taskDetailService.getDetail(id);\n    }\n\n    editTask(id, task) {\n        return taskDetailService.editTask(id, task);\n    }\n\n    removeTask(id) {\n        return taskDetailService.removeTask(id);\n    }\n}\n\nmodule.exports = new TaskDetailController()\n\n//# sourceURL=webpack:///./src/controller/task-detail.controller.js?");

/***/ }),

/***/ "./src/controller/task-history.controller.js":
/*!***************************************************!*\
  !*** ./src/controller/task-history.controller.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const taskHistoryService = __webpack_require__(/*! ../service/task-history.service */ \"./src/service/task-history.service.js\")\n\nclass TaskHistoryController {\n\n    listTasks(userName) {\n        return taskHistoryService.listTasks(userName)\n    }\n\n    archiveTask(id) {\n        return taskHistoryService.archiveTask(id)\n    }\n}\n\nmodule.exports = new TaskHistoryController()\n\n//# sourceURL=webpack:///./src/controller/task-history.controller.js?");

/***/ }),

/***/ "./src/controller/task.controller.js":
/*!*******************************************!*\
  !*** ./src/controller/task.controller.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const taskService = __webpack_require__(/*! ../service/task.service */ \"./src/service/task.service.js\");\n\nclass TaskController {\n\n    getTasks() {\n        return taskService.getTasks();\n    }\n\n    createTask(task) {\n        return taskService.createTask(task);\n    }\n\n    deleteTask(id) {\n        return taskService.deleteTask(id);\n    }\n\n    updateTask(id, task) {\n        return taskService.updateTask(id, task);\n    }\n}\n\nmodule.exports = new TaskController();\n\n//# sourceURL=webpack:///./src/controller/task.controller.js?");

/***/ }),

/***/ "./src/logger/api.logger.js":
/*!**********************************!*\
  !*** ./src/logger/api.logger.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const pino = __webpack_require__(/*! pino */ \"pino\");\nconst transport = pino.transport({\n    target: 'pino-pretty',\n    options: { destination: 1 } // use 2 for stderr\n})\nconst logger = pino(transport);\n\nclass APILogger {\n\n\n    info(message) {\n        logger.info(`API: ${message}`);\n    }\n\n    debug(message, data) {\n        if(process.env.IS_DEBUG_ENABLED === 'true') {\n            logger.info(`API: ${message} and data ${JSON.stringify(data)}`)\n        }\n    }\n\n    error(err) {\n        logger.error(`API Error : ${err}`)\n    }\n}\n\n\nmodule.exports = new APILogger()\n\n//# sourceURL=webpack:///./src/logger/api.logger.js?");

/***/ }),

/***/ "./src/model/task.model.js":
/*!*********************************!*\
  !*** ./src/model/task.model.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = (sequelize, DataTypes, Model) => {\n\n    class Tasks extends Model {}\n\n    Tasks.init({\n\n        task: {\n            type: DataTypes.STRING,\n            allowNull: false\n        },\n        assignee: {\n            type: DataTypes.STRING,\n            allowNull: false\n        },\n        status: {\n            type: DataTypes.STRING,\n            allowNull: false\n        },\n        description: {\n            type: DataTypes.STRING,\n            allowNull: false\n        },\n        createdDate: {\n            type: DataTypes.DATE,\n            allowNull: false\n        },\n        updatedDate: {\n            type: DataTypes.DATE\n        },\n        createdBy: {\n            type: DataTypes.STRING,\n            allowNull: false\n        },\n        updatedBy: {\n            type: DataTypes.STRING\n        }\n    },{\n        sequelize,\n        modelName: 'tasks'\n    })\n\n    return Tasks;\n\n}\n\n//# sourceURL=webpack:///./src/model/task.model.js?");

/***/ }),

/***/ "./src/repository/task.repository.js":
/*!*******************************************!*\
  !*** ./src/repository/task.repository.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const { connect } = __webpack_require__(/*! ../config/db.config */ \"./src/config/db.config.js\")\n\n\nclass TaskRepository {\n\n    constructor() {\n        this.db = connect();\n\n        // For Development\n        this.db.sequelize.sync({ force: true }).then(() => {\n            console.log(\"Drop and re-sync db.\");\n        });\n    }\n\n    getTasks() {\n        return this.db.tasks.findAll();\n    }\n\n    createTask(task) {\n        task.createdDate = new Date().toISOString();\n        task.createdAt = new Date().toISOString();\n        task.updatedAt = new Date().toISOString();\n        return this.db.tasks.create(task);\n    }\n\n    deleteTask(id) {\n        return this.db.tasks.destroy({\n            where: {\n                id: id\n            }\n        })\n    }\n\n    updateTask(id, task) {\n        task.updatedAt = new Date().toISOString();\n        return this.db.tasks.update({...task}, {\n            where: {\n                id: id\n            }\n        })\n    }\n\n    listTasks(userName) {\n        return this.db.tasks.findAll({\n            where: {\n                createdBy: userName\n            }\n        })\n    }\n\n    archiveTask(id) {\n        return this.db.tasks.destroy({\n            where: {\n                id: id\n            }\n        })\n    }\n\n    getDetail(id) {\n        return this.db.tasks.findOne({\n            where: {\n                id\n            }\n        })\n    }\n\n    editTask(id, task) {\n        task.updatedAt = new Date().toISOString();\n        return this.db.tasks.update({...task}, {\n            where: {\n                id: id\n            }\n        })\n    }\n\n    removeTask(id) {\n        return this.db.tasks.destroy({\n            where: {\n                id: id\n            }\n        })\n    }\n}\n\nmodule.exports = new TaskRepository()\n\n//# sourceURL=webpack:///./src/repository/task.repository.js?");

/***/ }),

/***/ "./src/routes/task_detail.js":
/*!***********************************!*\
  !*** ./src/routes/task_detail.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const express = __webpack_require__(/*! express */ \"express\");\nconst router = express.Router();\nconst taskDetailController = __webpack_require__(/*! ../controller/task-detail.controller */ \"./src/controller/task-detail.controller.js\")\nconst logger = __webpack_require__(/*! ../logger/api.logger */ \"./src/logger/api.logger.js\")\n\n\nrouter.route('/:id')\n    .get(async (req, res) => {\n        const result = await taskDetailController.getDetail(req.params.id);\n        res.json(result);\n    })\n    .delete(async (req, res) => {\n        const result = await taskDetailController.removeTask(req.params.id);\n        res.json(result);\n    })\n    .put(async (req, res) => {\n        const result = await taskDetailController.editTask(req.params.id, req.body);\n        res.json(result);\n    })\n\n// handling default  routes\nrouter.get(\"/\", (req, res) => {\n    logger.info(\"Handling default routes!!!\");\n    res.send(\"Tasks detail works\");\n})\n\nmodule.exports = router;\n\n//# sourceURL=webpack:///./src/routes/task_detail.js?");

/***/ }),

/***/ "./src/routes/task_history.js":
/*!************************************!*\
  !*** ./src/routes/task_history.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const express = __webpack_require__(/*! express */ \"express\");\nconst router = express.Router();\nconst taskHistoryController = __webpack_require__(/*! ../controller/task-history.controller */ \"./src/controller/task-history.controller.js\")\nconst logger = __webpack_require__(/*! ../logger/api.logger */ \"./src/logger/api.logger.js\")\n\nrouter.route('/:id')\n    .get(async (req, res) => {\n        const result = await taskHistoryController.listTasks(req.params.id);\n        res.json(result);\n    })\n    .delete(async (req, res) => {\n        const result = await taskHistoryController.archiveTask(req.params.id);\n        res.json(result);\n    })\n\n// handling default  routes\nrouter.get(\"/\", (req, res) => {\n    logger.info(\"Handling default routes!!!\");\n    res.send(\"Tasks history works\");\n})\n\nmodule.exports = router;\n\n\n\n\n//# sourceURL=webpack:///./src/routes/task_history.js?");

/***/ }),

/***/ "./src/routes/todos.js":
/*!*****************************!*\
  !*** ./src/routes/todos.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const express = __webpack_require__(/*! express */ \"express\");\nconst router = express.Router();\nconst taskController = __webpack_require__(/*! ../controller/task.controller */ \"./src/controller/task.controller.js\")\nconst logger = __webpack_require__(/*! ../logger/api.logger */ \"./src/logger/api.logger.js\")\n\n\nrouter.get('/tasks', async (req, res) => {\n    const tasks = await taskController.getTasks();\n    res.json(tasks);\n})\n\nrouter.post('/task', async (req, res) => {\n    logger.debug('req.body' , req.body)\n    const data = await taskController.createTask(req.body);\n    res.json(data);\n})\n\nrouter.put('/task/:id', async (req, res) => {\n    logger.debug('id  ', req.params.id);\n    logger.debug('req.body ', req.body)\n    const result = await taskController.updateTask(req.params.id, req.body);\n    res.json(result);\n})\n\nrouter.delete('/task/', async (req, res) => {\n    const result = await taskController.deleteTask(req.query.id);\n    res.json(result);\n})\n\n// handling default  routes\nrouter.get(\"/\", (req, res) => {\n    logger.info(\"Handling undefined routes!!!\");\n    res.send(\"Tasks route works\");\n})\n\nmodule.exports = router;\n\n//# sourceURL=webpack:///./src/routes/todos.js?");

/***/ }),

/***/ "./src/service/task-detail.service.js":
/*!********************************************!*\
  !*** ./src/service/task-detail.service.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const taskRepository = __webpack_require__(/*! ../repository/task.repository */ \"./src/repository/task.repository.js\")\n\nclass TaskDetailService {\n\n    getDetail(id) {\n        return taskRepository.getDetail(id);\n    }\n\n    editTask(id, task) {\n        return taskRepository.editTask(id, task);\n    }\n\n    removeTask(id) {\n        return taskRepository.removeTask(id);\n    }\n}\n\nmodule.exports = new TaskDetailService();\n\n//# sourceURL=webpack:///./src/service/task-detail.service.js?");

/***/ }),

/***/ "./src/service/task-history.service.js":
/*!*********************************************!*\
  !*** ./src/service/task-history.service.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const taskRepository = __webpack_require__(/*! ../repository/task.repository */ \"./src/repository/task.repository.js\")\n\nclass TaskHistoryService {\n\n    listTasks(userName) {\n        return taskRepository.listTasks(userName)\n    }\n\n    archiveTask(id) {\n        return taskRepository.archiveTask(id)\n    }\n\n}\n\nmodule.exports = new TaskHistoryService();\n\n//# sourceURL=webpack:///./src/service/task-history.service.js?");

/***/ }),

/***/ "./src/service/task.service.js":
/*!*************************************!*\
  !*** ./src/service/task.service.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const taskRepository = __webpack_require__(/*! ../repository/task.repository */ \"./src/repository/task.repository.js\")\n\nclass TaskService {\n\n    getTasks() {\n        return taskRepository.getTasks()\n    }\n\n    createTask(task) {\n        return taskRepository.createTask(task)\n    }\n\n    deleteTask(id) {\n        return taskRepository.deleteTask(id);\n    }\n\n    updateTask(id, task) {\n        return taskRepository.updateTask(id, task);\n    }\n}\n\nmodule.exports = new TaskService();\n\n//# sourceURL=webpack:///./src/service/task.service.js?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv\");\n\n//# sourceURL=webpack:///external_%22dotenv%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "pino":
/*!***********************!*\
  !*** external "pino" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"pino\");\n\n//# sourceURL=webpack:///external_%22pino%22?");

/***/ }),

/***/ "sequelize":
/*!****************************!*\
  !*** external "sequelize" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"sequelize\");\n\n//# sourceURL=webpack:///external_%22sequelize%22?");

/***/ })

/******/ });