import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private students: any[] = []; // Array to store student data
  private departments: any[] = []; // Array to store department data
  private courses: any[] = [];
  private studentMarks: any[] = [];
  constructor() {}

  // Methods to manage student data
  addStudent(student: any) {
    this.students.push(student);
  }

  getStudents() {
    return this.students;
  }

  // Methods to manage department data
  addDepartment(department: any) {
    this.departments.push(department);
  }

  getDepartments() {
    return this.departments;
  }
  addCourse(course: any) {
    this.courses.push(course);
  }

  getCourses() {
    return this.courses;
  }

  // Method to assign student to department and course
  assignStudentToDepartmentAndCourse(assignmentDetails: any) {
    // Implement assignment logic here
    // You can update the student object, department object, etc., based on the assignment details
    console.log(
      'Assigning student to department and course:',
      assignmentDetails
    );
  }
  uploadStudentMarks(marksData: any) {
    this.studentMarks.push(marksData);
    // Perform logic to update student marks in database or perform other actions
  }

  // Get student marks
  getStudentMarks() {
    return this.studentMarks;
  }
}
