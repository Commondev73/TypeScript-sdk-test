"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.genPassword = exports.genTransactionId = void 0;
const moment_1 = __importDefault(require("moment"));
const randomstring_1 = __importDefault(require("randomstring"));
const genTransactionId = () => {
    const randomNumber = randomstring_1.default.generate({
        length: 5,
        charset: 'numeric'
    });
    return `${(0, moment_1.default)().format('YYYYMMDDHHmmss')}${randomNumber}`;
};
exports.genTransactionId = genTransactionId;
const genPassword = () => {
    const randomPassword = randomstring_1.default.generate({ length: 8 });
    return randomPassword;
};
exports.genPassword = genPassword;
