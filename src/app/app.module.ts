import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from 'src/app/config/header/header.component';
import { FooterComponent } from 'src/app/config/footer/footer.component';
import { SearchbannerComponent } from 'src/app/home/searchbanner/searchbanner.component';
import { FacilitesComponent } from 'src/app/home//facilites/facilites.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BookdoctorComponent } from 'src/app/home/bookdoctor/bookdoctor.component';
import { FeaturesComponent } from 'src/app/home/features/features.component';
import { BlognewsComponent } from 'src/app/home/blognews/blognews.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { BookingComponent } from './patient/booking/booking.component';
import { BookingsuccessComponent } from './patient/bookingsuccess/bookingsuccess.component';
import { ChangepasswordComponent } from './patient/changepassword/changepassword.component';
import { ChatComponent } from './patient/chat/chat.component';
import { CheckoutComponent } from './patient/checkout/checkout.component';
import { DoctorprofileComponent } from './patient/doctorprofile/doctorprofile.component';
import { DoctorviewComponent } from './patient/doctorview/doctorview.component';
import { FavouritesComponent } from './patient/favourites/favourites.component';
import { PatientdashboardComponent} from './patient/patientdashboard/patientdashboard.component';
import { ProfilesettingsComponent } from './patient/profilesettings/profilesettings.component';
import { SearchdoctorComponent } from './patient/searchdoctor/searchdoctor.component';
import { HomeComponent } from './home/home.component';
import { ViewinvoiceComponent } from './patient/viewinvoice/viewinvoice.component';
import { DashboardleftsectionComponent } from './patient/dashboardleftsection/dashboardleftsection.component';
import { DoctorregisterComponent } from 'src/app/auth/doctorregister/doctorregister.component';
import { AppointmentsComponent } from './doctor/appointments/appointments.component';
import { BlogComponent } from './doctor/blog/blog.component';
import { DoctordashboardComponent } from './doctor/doctordashboard/doctordashboard.component';
import { DoctorprofilesettingsComponent } from './doctor/doctorprofilesettings/doctorprofilesettings.component';
import { DrchangepasswordComponent} from './doctor/drchangepassword/drchangepassword.component';
import { InvoicesComponent } from './doctor/invoices/invoices.component';
import { MypatientsComponent } from './doctor/mypatients/mypatients.component';
import { PatientprofileComponent } from './doctor/patientprofile/patientprofile.component'
import { SocialmediaComponent } from './doctor/socialmedia/socialmedia.component';
import { ReviewsComponent } from './doctor/reviews/reviews.component';
import { ScheduletimingsComponent } from './doctor/scheduletimings/scheduletimings.component';
import { DoctorsidebarComponent } from './doctor/doctorsidebar/doctorsidebar.component';
import { LoginComponent } from 'src/app/auth/login/login.component';
import { SignupComponent } from 'src/app/auth/signup/signup.component';
import { OtpComponent } from './auth/otp/otp.component';
import { GridviewComponent } from './patient/gridview/gridview.component';
import { VideocallingComponent } from './videocalling/videocalling.component';
import { VoicecallComponent } from './voicecall/voicecall.component';
import { PharmacyhomeComponent } from './pharmacy/pharmacyhome/pharmacyhome.component';
import { ScheduleModule, RecurrenceEditorModule, DayService, WeekService, WorkWeekService, MonthService, MonthAgendaService } from '@syncfusion/ej2-angular-schedule'
import { PharmacyDetailsComponent } from './pharmacy/pharmacy-details/pharmacy-details.component';
import { PharmacysearchComponent } from './pharmacy/pharmacysearch/pharmacysearch.component';
import { ProductallComponent } from './pharmacy/productall/productall.component';
import { ProductviewComponent } from './pharmacy/productview/productview.component';
import { AddtocartComponent } from './pharmacy/addtocart/addtocart.component';
import { PaymentsuccessComponent } from './pharmacy/paymentsuccess/paymentsuccess.component';
import { LabsComponent } from "./lab/labs/labs.component";
import { LablistComponent } from './lab/lablist/lablist.component';
import { BooktestComponent } from './lab/booktest/booktest.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SearchbannerComponent,
    FacilitesComponent,
    BookdoctorComponent,
    FeaturesComponent,
    BlognewsComponent,
    PageNotFoundComponent,
    BookingComponent,
    BookingsuccessComponent,
    ChangepasswordComponent,
    ChatComponent,
    CheckoutComponent,
    DoctorprofileComponent,
    DoctorviewComponent,
    FavouritesComponent,
    PatientdashboardComponent,
    ProfilesettingsComponent,
    SearchdoctorComponent,
    HomeComponent,
    ViewinvoiceComponent,
    DashboardleftsectionComponent,
    DoctorregisterComponent,
    AppointmentsComponent,
    BlogComponent,
    DoctordashboardComponent,
    DoctorprofilesettingsComponent,
    DrchangepasswordComponent,
    InvoicesComponent,
    MypatientsComponent,
    PatientprofileComponent,
    SocialmediaComponent,
    ReviewsComponent,
    ScheduletimingsComponent,
    DoctorsidebarComponent,
    LoginComponent,
    SignupComponent,
    OtpComponent,
    GridviewComponent,
    VideocallingComponent,
    VoicecallComponent,
    PharmacyhomeComponent,
    PharmacyDetailsComponent,
    PharmacysearchComponent,
    ProductallComponent,
    ProductviewComponent,
    AddtocartComponent,
    PaymentsuccessComponent,
    LabsComponent,
    LablistComponent,
    BooktestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    ScheduleModule, RecurrenceEditorModule,


],
  providers: [DayService, WeekService, WorkWeekService, MonthService, MonthAgendaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
