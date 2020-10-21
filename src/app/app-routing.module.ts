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
import { PharmacyhomeComponent } from './pharmacy/pharmacyhome/pharmacyhome.component';
import { PharmacyDetailsComponent} from './pharmacy/pharmacy-details/pharmacy-details.component';
import { PharmacysearchComponent} from './pharmacy/pharmacysearch/pharmacysearch.component';
import { ProductallComponent } from './pharmacy/productall/productall.component';
import { ProductviewComponent } from './pharmacy/productview/productview.component';
import { AddtocartComponent } from './pharmacy/addtocart/addtocart.component';
import { PaymentsuccessComponent } from './pharmacy/paymentsuccess/paymentsuccess.component';
import { LabsComponent } from './lab/labs/labs.component';
import { LablistComponent } from './lab/lablist/lablist.component';
import { LabdescriptionComponent } from './lab/labdescription/labdescription.component';
import { BooktestComponent } from './lab/booktest/booktest.component';
import { LabcheckoutComponent } from './lab/labcheckout/labcheckout.component';
import { PaysuccessComponent } from './lab/paysuccess/paysuccess.component';
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
            path:'pharmacy/pharmacyhome', component:PharmacyhomeComponent
          },
          {
            path:'pharmacy/pharmacy-details/:id', component:PharmacyDetailsComponent
          },
          {
            path:'pharmacy/pharmacysearch', component:PharmacysearchComponent
          },
          {
            path:'pharmacy/productall', component:ProductallComponent
          },
          {
            path:'pharmacy/productview/:itemid/:pharmaid', component:ProductviewComponent
          },
          {
            path:'pharmacy/addtocart', component:AddtocartComponent
          },
          {
            path:'pharmacy/paymentsuccess', component:PaymentsuccessComponent
          },
          {
            path:'lab/labs', component:LabsComponent
          },
          {
            path:'doctor/doctorregister', component:DoctorregisterComponent
          },
          {
            path:'doctor/doctorregister', component:DoctorregisterComponent
          },
          {
            path:'lab/lablist', component:LablistComponent
          },
          {
            path:'lab/booktest', component:BooktestComponent
          },
          {
            path:'lab/labdescription/:diagnosticid', component:LabdescriptionComponent
          },
          {
            path:'lab/labcheckout', component:LabcheckoutComponent
          },
          {
            path:'lab/paysuccess', component:PaysuccessComponent
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