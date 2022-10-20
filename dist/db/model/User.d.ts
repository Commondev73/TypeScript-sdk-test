/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
/// <reference types="mongoose-paginate-v2" />
import { FilterQuery } from 'mongoose';
import { IUser } from '../../interfaces/user';
import { IUserDoc } from '../schema/user';
declare const getList: (query?: FilterQuery<IUserDoc>, page?: number, limit?: number, sort?: {
    createdAt: number;
}) => Promise<{}>;
declare const create: (data: IUser) => Promise<(IUserDoc & {
    _id: import("mongoose").Types.ObjectId;
}) | null>;
declare const update: (id: string, data: IUser) => Promise<IUserDoc | null>;
declare const remove: (id: string) => Promise<import("mongodb").DeleteResult | null>;
declare const aggregate: (stage: any) => Promise<any[]>;
declare const find: (query: FilterQuery<IUser>) => Promise<(IUserDoc & {
    _id: import("mongoose").Types.ObjectId;
})[]>;
declare const findOne: (query: FilterQuery<IUser>) => Promise<(IUserDoc & {
    _id: import("mongoose").Types.ObjectId;
}) | null>;
declare const findById: (id: string) => Promise<(IUserDoc & {
    _id: import("mongoose").Types.ObjectId;
}) | null>;
export { getList, create, update, remove, aggregate, find, findOne, findById };
//# sourceMappingURL=User.d.ts.map