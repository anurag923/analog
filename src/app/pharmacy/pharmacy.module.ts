import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PharmacyhomeComponent } from './pharmacyhome/pharmacyhome.component';
import { PharmacyDetailsComponent } from './pharmacy-details/pharmacy-details.component';
import { PharmacysearchComponent } from './pharmacysearch/pharmacysearch.component';
import { ProductallComponent } from './productall/productall.component';
import { ProductviewComponent } from './productview/productview.component';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { PaymentsuccessComponent } from './paymentsuccess/paymentsuccess.component';



@NgModule({
  declarations: [PharmacyhomeComponent, PharmacyDetailsComponent, PharmacysearchComponent, ProductallComponent, ProductviewComponent, AddtocartComponent, PaymentsuccessComponent],
  imports: [
    CommonModule
  ]
})
export class PharmacyModule { }
