"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStatusDescription = exports.RemoveFieldsFromPopulate = void 0;
const user_1 = require("../interfaces/user");
const RemoveFieldsFromPopulate = {
    password: 0,
    firstName: 0,
    lastName: 0
};
exports.RemoveFieldsFromPopulate = RemoveFieldsFromPopulate;
const getStatusDescription = (status) => {
    switch (status) {
        case user_1.EStatusUser.INACTIVE:
            return 'inactive';
        case user_1.EStatusUser.ACTIVE:
            return 'active';
        case user_1.EStatusUser.BANNED:
            return 'banned';
        default:
            return '-';
    }
};
exports.getStatusDescription = getStatusDescription;
