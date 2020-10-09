import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DoctorviewComponent } from './patient/doctorview/doctorview.component';
import { SearchdoctorComponent } from './patient/searchdoctor/searchdoctor.component';
import { DoctorprofileComponent } from './patient/doctorprofile/doctorprofile.component';
import { BookingComponent } from './patient/booking/booking.component';
import { CheckboxRequiredValidator } from '@angular/forms';
import { CheckoutComponent } from './patient/checkout/checkout.component';
import { BookingsuccessComponent } from './patient/bookingsuccess/bookingsuccess.component';
import { FavouritesComponent } from './patient/favourites/favourites.component';
import { ChatComponent } from './patient/chat/chat.component';
import { PatientdashboardComponent } from './patient/patientdashboard/patientdashboard.component';
import { ProfilesettingsComponent } from './patient/profilesettings/profilesettings.component';
import { ChangepasswordComponent } from './patient/changepassword/changepassword.component';
import { ViewinvoiceComponent } from './patient/viewinvoice/viewinvoice.component';
import { DoctordashboardComponent } from './doctor/doctordashboard/doctordashboard.component';
import { AppointmentsComponent } from './doctor/appointments/appointments.component';
import { BlogComponent } from './doctor/blog/blog.component';
import { DoctorprofilesettingsComponent } from './doctor/doctorprofilesettings/doctorprofilesettings.component';
import { DoctorregisterComponent } from 'src/app/auth/doctorregister/doctorregister.component';
import { DrchangepasswordComponent } from './doctor/drchangepassword/drchangepassword.component';
import { InvoicesComponent } from './doctor/invoices/invoices.component';
import { MypatientsComponent } from './doctor/mypatients/mypatients.component';
import { PatientprofileComponent } from './doctor/patientprofile/patientprofile.component';
import { ReviewsComponent } from './doctor/reviews/reviews.component';
import { ScheduletimingsComponent } from './doctor/scheduletimings/scheduletimings.component';
import { SocialmediaComponent } from './doctor/socialmedia/socialmedia.component';
import { LoginComponent } from 'src/app/auth/login/login.component';
import { SignupComponent } from 'src/app/auth/signup/signup.component';
import { OtpComponent } from 'src/app/auth/otp/otp.component';
import { GridviewComponent } from './patient/gridview/gridview.component'
import { VoicecallComponent } from './voicecall/voicecall.component';
import { VideocallingComponent } from './videocalling/videocalling.component';
const routes: Routes = [

           {
             path:'', component:HomeComponent
           },

           {
            path:'login', component:LoginComponent
          },
          {
            path:'signup', component:SignupComponent
          },
          {
            path:'otp', component:OtpComponent
          },
          {
            path:'voicecall', component:VoicecallComponent
          },
          {
            path:'videocalling', component:VideocallingComponent
          },
            {
              path:'patient/gridview', component:GridviewComponent
            },
           {
            path:'patient/doctorview', component:DoctorviewComponent
          },

          {
            path:'patient/searchdoctor', component:SearchdoctorComponent
          },

          {
            path:'patient/doctorprofile', component:DoctorprofileComponent
          },

          {
            path:'patient/booking', component:BookingComponent
          },

          {
            path:'patient/checkout', component:CheckoutComponent
          },

          {
            path:'patient/bookingsuccess', component:BookingsuccessComponent
          },

          {
            path:'patient/viewinvoice', component:ViewinvoiceComponent
          },

          {
            path:'patient/patientdashboard', component:PatientdashboardComponent
          },


          {
            path:'patient/favourites', component:FavouritesComponent
          },

          {
            path:'patient/chat', component:ChatComponent
          },


          {
            path:'patient/profilesettings', component:ProfilesettingsComponent
          },

          {
            path:'patient/changepassword', component:ChangepasswordComponent
          },









          {
            path:'doctor/doctorregister', component:DoctorregisterComponent
          },

                    {
                      path:'doctor/appointments', component:AppointmentsComponent
                    },

                    {
                      path:'doctor/blog', component:BlogComponent
                    },


                    {
                      path:'doctor/doctordashboard', component: DoctordashboardComponent
                    },

                    {
                      path:'doctor/doctorprofilesettings', component:DoctorprofilesettingsComponent
                    },


                    {
                      path:'doctor/drchangepassword', component:DrchangepasswordComponent
                    },





                    {
                      path:'doctor/invoices', component: InvoicesComponent
                    },

                    {
                      path:'doctor/mypatients', component:MypatientsComponent
                    },


                    {
                      path:'doctor/patientprofile', component:PatientprofileComponent
                    },



                    {
                      path:'doctor/reviews', component: ReviewsComponent
                    },

                    {
                      path:'doctor/scheduletimings', component:ScheduletimingsComponent
                    },


                    {
                      path:'doctor/socialmedia', component:SocialmediaComponent
                    },

                   {
                    path:'**', component:PageNotFoundComponent
                  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
