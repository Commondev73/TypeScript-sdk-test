import { EStatusUser } from '../interfaces/user';
declare const RemoveFieldsFromPopulate: {
    password: number;
    firstName: number;
    lastName: number;
};
declare const getStatusDescription: (status: EStatusUser) => "inactive" | "active" | "banned" | "-";
export { RemoveFieldsFromPopulate, getStatusDescription };
