import { Component, OnInit } from '@angular/core';
import { AlertService } from '../alert.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  alertMessage: string = '';

  constructor(private alertService: AlertService) {}

  ngOnInit() {
    this.alertService.alert$.subscribe((message) => {
      this.alertMessage = message;
      setTimeout(() => {
        this.alertMessage = '';
      }, 3000); // Hide the alert after 3 seconds
    });
  }
  showAddStudentsAlert() {
    this.alertService.showAlert('Add Students clicked!');
  }

  showAddDepartmentsAlert() {
    this.alertService.showAlert('Add Departments clicked!');
  }

  showAssignStudentsAlert() {
    this.alertService.showAlert('Assign Students clicked!');
  }

  showUploadMarksAlert() {
    this.alertService.showAlert('Upload Marks clicked!');
  }
}
