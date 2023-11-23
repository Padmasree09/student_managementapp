import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { StudentComponent } from './student/student.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { LoginComponent } from './login/login.component';
import { AssignStudentsComponent } from './assign-students/assign-students.component';
import { UploadMarksComponent } from './upload-marks/upload-marks.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'student', component: StudentComponent },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'add-student', component: AddStudentComponent }, // Ensure correct association
      { path: 'add-department', component: AddDepartmentComponent },
      { path: 'assign-students', component: AssignStudentsComponent },
      { path: 'upload-marks', component: UploadMarksComponent },
    ],
  },
  { path: 'add-student', component: AddStudentComponent },
  { path: 'add-department', component: AddDepartmentComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
