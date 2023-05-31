export type Registration = number | null;
export type DateOfBirth = Date | string;
export default class Student {
    public readonly registration: Registration;
    public name: string;
    public dateOfBirth: DateOfBirth;
    public email: string;
    public status: string;

    constructor(props: Student) {
        Object.assign(this, props);
    }
}
