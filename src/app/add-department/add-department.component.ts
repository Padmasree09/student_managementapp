import { Component } from '@angular/core';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css'],
})
export class AddDepartmentComponent {
  departmentName: string = '';

  addDepartment() {
    // Logic to add department using the value of this.departmentName
    console.log('Adding department:', this.departmentName);
    // Implement logic to save to database, API call, etc.
    // Reset form fields after submission if needed
    this.departmentName = '';
  }
}
