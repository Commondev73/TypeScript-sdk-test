"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const user_1 = require("../../interfaces/user");
const mongoose_paginate_v2_1 = __importDefault(require("mongoose-paginate-v2"));
const UserSchema = new mongoose_1.Schema({
    userName: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: [8, 'Please use minimum of 8 characters']
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    status: {
        type: Number,
        default: user_1.EStatusUser.ACTIVE,
        required: true
    },
    photo: {
        type: String
    }
}, {
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
    timestamps: true
});
UserSchema.plugin(mongoose_paginate_v2_1.default);
const User = (0, mongoose_1.model)('User', UserSchema);
exports.default = User;
