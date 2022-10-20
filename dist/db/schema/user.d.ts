import { Document, PaginateModel } from 'mongoose';
import { IUser } from '../../interfaces/user';
export interface IUserDoc extends IUser, Document {
    [key: string]: any;
}
declare const User: PaginateModel<IUserDoc, {}, {}>;
export default User;
