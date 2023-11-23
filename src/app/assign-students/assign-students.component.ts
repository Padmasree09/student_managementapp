import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-assign-students',
  templateUrl: './assign-students.component.html',
  styleUrls: ['./assign-students.component.css'],
})
export class AssignStudentsComponent implements OnInit {
  students: any[] = [];
  departments: any[] = [];
  courses: any[] = [];

  selectedStudent: any;
  selectedDepartment: any;
  selectedCourse: any;

  constructor(private adminService: AdminService) {}

  ngOnInit() {
    // Fetch students, departments, and courses from AdminService
    this.students = this.adminService.getStudents();
    this.departments = this.adminService.getDepartments();
    this.courses = this.adminService.getCourses();
  }

  assignStudent() {
    // Perform logic to assign selectedStudent to selectedDepartment and selectedCourse
    const assignedStudent = {
      studentId: this.selectedStudent,
      departmentId: this.selectedDepartment,
      courseId: this.selectedCourse,
    };

    // Call a method in AdminService to handle assignment
    this.adminService.assignStudentToDepartmentAndCourse(assignedStudent);

    // Clear selected values or perform other necessary actions
    this.clearSelections();
  }
  clearSelections() {
    this.selectedStudent = null;
    this.selectedDepartment = null;
    this.selectedCourse = null;
  }
}
