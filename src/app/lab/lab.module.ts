import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabsComponent } from './labs/labs.component';
import { LabdescriptionComponent } from './labdescription/labdescription.component';
import { LablistComponent } from './lablist/lablist.component';
import { BooktestComponent } from './booktest/booktest.component';
import { LabcheckoutComponent } from './labcheckout/labcheckout.component';
import { PaysuccessComponent } from './paysuccess/paysuccess.component';
import { LabcartComponent } from './labcart/labcart.component';




@NgModule({
  declarations: [LabsComponent, LabdescriptionComponent, LablistComponent, BooktestComponent, LabcheckoutComponent, PaysuccessComponent, LabcartComponent],
  imports: [
    CommonModule
  ]
})
export class LabModule { }
