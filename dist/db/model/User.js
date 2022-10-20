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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findById = exports.findOne = exports.find = exports.aggregate = exports.remove = exports.update = exports.create = exports.getList = void 0;
const user_1 = __importDefault(require("../schema/user"));
const lodash_1 = require("lodash");
const getList = (query = {}, page = 1, limit = 10, sort = { createdAt: -1 }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const options = {
            page,
            limit,
            sort
        };
        return yield user_1.default.paginate(query, options);
    }
    catch (error) {
        console.log(error);
        return {};
    }
});
exports.getList = getList;
const create = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = new user_1.default(data);
        return yield user.save();
    }
    catch (error) {
        console.log(error);
        return null;
    }
});
exports.create = create;
const update = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const query = { _id: id };
        const comment = yield user_1.default.findOne(query);
        if (comment && comment._id) {
            (0, lodash_1.mapValues)(data, (value, key) => {
                if (value)
                    comment[key] = value;
            });
            return yield comment.save();
        }
        return null;
    }
    catch (error) {
        console.log(error);
        return null;
    }
});
exports.update = update;
const remove = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const query = { _id: id };
        return yield user_1.default.deleteOne(query);
    }
    catch (error) {
        console.log(error);
        return null;
    }
});
exports.remove = remove;
const aggregate = (stage) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield user_1.default.aggregate(stage);
    }
    catch (error) {
        console.log(error);
        return [];
    }
});
exports.aggregate = aggregate;
const find = (query) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield user_1.default.find(query);
    }
    catch (error) {
        console.log(error);
        return [];
    }
});
exports.find = find;
const findOne = (query) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield user_1.default.findOne(query);
    }
    catch (error) {
        console.log(error);
        return null;
    }
});
exports.findOne = findOne;
const findById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const query = { _id: id };
        return yield user_1.default.findOne(query);
    }
    catch (error) {
        console.log(error);
        return null;
    }
});
exports.findById = findById;
