import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class StudentsService 
{
    private students = [
        { id: 1, name: 'Student 1', age: 20 },
        { id: 2, name: 'Student 2', age: 21 },
        { id: 3, name: 'Student 3', age: 22 }
    ];

    getAllStudents()
    {
        return this.students;
    }

    getStudentById(id: number)
    {
        return this.students.find((st) => st.id === id);
    }

    // Post
    createStudent(student: { name: string, age: number })
    {
        const newSt = {
            id: this.students.length + 1,
            ...student
        };
        this.students.push(newSt);
        return newSt;
    }

    // Put
    updateStudent(id:number, student:{name:string , age:number})
    {
        const index = this.students.findIndex((st) => st.id === id);

        if (index === -1)
        {
            throw new NotFoundException(`Student with id ${id} not found`);
        }

        this.students[index] = {id, ...student};
        return `Student with id ${id} updated successfully`;

    }

    // Patch
    patchStudent(id:number, student:{name?:string , age?:number})
    {
        const index = this.students.findIndex((st) => st.id === id);

        if(index === -1)
        {
            throw new NotFoundException(`Student with id ${id} not found`);
        }

        this.students[index] = { ...this.students[index], ...student };
        return `Student with id ${id} updated partially successfully`;
    }

    // Delete
    deleteStudent(id:number)
    {
        const index = this.students.findIndex((st) => st.id === id);

        if(index === -1)
        {
            throw new NotFoundException(`Student with id ${id} not found`);
        }

        this.students.splice(index, 1); // array.splice(startIndex, deleteCount);
        return `Student with id ${id} deleted successfully`;
    }
}
