import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctordashboardComponent } from './doctordashboard/doctordashboard.component';
import { DoctorsidebarComponent } from './doctorsidebar/doctorsidebar.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { MypatientsComponent } from './mypatients/mypatients.component';
import { ScheduletimingsComponent } from './scheduletimings/scheduletimings.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { DoctorprofilesettingsComponent } from './doctorprofilesettings/doctorprofilesettings.component';
import { SocialmediaComponent } from './socialmedia/socialmedia.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { PatientprofileComponent } from './patientprofile/patientprofile.component';
import { BlogComponent } from './blog/blog.component';
import { DrchangepasswordComponent } from './drchangepassword/drchangepassword.component';



@NgModule({
  declarations: [DoctordashboardComponent, DoctorsidebarComponent, AppointmentsComponent, MypatientsComponent, ScheduletimingsComponent, InvoicesComponent, ReviewsComponent, DoctorprofilesettingsComponent, SocialmediaComponent, ChangepasswordComponent, PatientprofileComponent, BlogComponent, DrchangepasswordComponent],
  imports: [
    CommonModule
  ]
})
export class DoctorModule { }
