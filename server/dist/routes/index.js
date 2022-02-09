"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = __importDefault(require("../controllers/UserController"));
const userController = new UserController_1.default();
const userRoutes = (0, express_1.Router)();
userRoutes.get('/users', userController.index);
userRoutes.get('/users/:userId', userController.show);
userRoutes.post('/users', userController.store);
userRoutes.put('/users/:userId', userController.update);
userRoutes.delete('/users/:userId', userController.delete);
exports.default = userRoutes;
