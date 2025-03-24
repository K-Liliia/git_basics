import { Student } from './student-class';

//for JSON response
(async () => {
    try {
        const students = await Student.getStudentData();
        students.forEach(student => {
            console.log(`id: ${student.getId()}, userName: ${student.getName()}, email: ${student.getEmail()}, phoneNumber: ${student.getPhone()}`);
        });
    } catch (error) {
        console.error('Error: student data was not retrieved from the response', error);
    }
})();

