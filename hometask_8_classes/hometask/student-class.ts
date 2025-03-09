import { getJSON } from './users-interface';

export class Student {
    private id: number;
    private name: string;
    private email: string;
    private phone: string;

    public constructor(id: number, name: string, email: string, phone: string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
    }

    public getId(): number {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }

    public getEmail(): string {
        return this.email;
    }

    public getPhone(): string {
        return this.phone;
    }

    public static async getStudentData(): Promise<Student[]> {
        const usersData = await getJSON();
        const students = usersData.users.map(user => {
            return new Student(user.id, user.name, user.email, user.phone);
        });
        return students;
    }

}

