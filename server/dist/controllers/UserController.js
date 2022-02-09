"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserModel_1 = require("../database/models/UserModel");
class UserController {
    constructor() {
        //   1- Criar uma rota para retornar usuários
        this.index = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const users = yield UserModel_1.UserModel.findAll();
            return users.length > 0
                ? res.status(200).json(users)
                : res.status(204).send();
        });
        //   2- Criar uma rota para retornar um usuário específico
        this.show = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { userId } = req.params;
            const user = yield UserModel_1.UserModel.findOne({
                where: {
                    id: userId,
                },
            });
            return user ? res.status(200).json(user) : res.status(204).send();
        });
        this.store = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { email, name, password, image_id } = req.body;
            const user = yield UserModel_1.UserModel.create({
                email,
                name,
                password,
                image_id,
            });
            return res.status(201).json(user);
        });
        this.update = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { userId } = req.params;
            console.log(userId);
            yield UserModel_1.UserModel.update(req.body, { where: { id: userId } });
            return res.status(204).send();
        });
        this.delete = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { userId } = req.params;
            yield UserModel_1.UserModel.destroy({ where: { id: userId } });
            return res.status(204).send();
        });
    }
}
exports.default = UserController;
