export type Registration = number | null;

export type DateOfBirth = Date | string;

export type Status = 'ATIVO' | 'INATIVO';

export interface StudentAttributes {
    registration: Registration;
    name: string;
    dateOfBirth: DateOfBirth;
    email: string;
    status: Status;
}
export default class Student implements StudentAttributes {
    public readonly registration: Registration;
    public name: string;
    public dateOfBirth: DateOfBirth;
    public email: string;
    public status: Status;

    constructor(props: Student) {
        Object.assign(this, props);
    }
}
