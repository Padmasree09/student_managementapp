import { Component } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-upload-marks',
  templateUrl: './upload-marks.component.html',
  styleUrls: ['./upload-marks.component.css'],
})
export class UploadMarksComponent {
  students: any[] = [];
  selectedStudent: any;
  subject: string = '';
  marks: number | null = null;

  constructor(private adminService: AdminService) {}

  ngOnInit() {
    this.students = this.adminService.getStudents();
  }

  uploadMarks() {
    const marksData = {
      studentId: this.selectedStudent,
      subject: this.subject,
      marks: this.marks,
    };

    this.adminService.uploadStudentMarks(marksData);

    this.clearFields();
  }

  clearFields() {
    this.selectedStudent = null;
    this.subject = '';
    this.marks = null;
  }
}
