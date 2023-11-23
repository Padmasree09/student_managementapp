import { Component } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css'],
})
export class AddStudentComponent {
  student = {
    name: '',
    email: '',
    age: null,
    course: '',
  };
  constructor(private adminService: AdminService) {}

  addStudent() {
    // Logic to add student using the value of this.studentName
    this.adminService.addStudent(this.student);
    this.resetForm();
  }
  resetForm() {
    this.student = {
      name: '',
      email: '',
      age: null,
      course: '',
      // Initialize other properties
    };
  }
}
