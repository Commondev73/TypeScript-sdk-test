export interface IUser {
    userName: string;
    password: string;
    firstName: string;
    lastName: string;
    status: number;
    photo?: string;
}
export declare enum EStatusUser {
    INACTIVE = 0,
    ACTIVE = 1,
    BANNED = 99
}
