import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabsComponent } from './labs/labs.component';
import { LabdescriptionComponent } from './labdescription/labdescription.component';
import { LablistComponent } from './lablist/lablist.component';
import { BooktestComponent } from './booktest/booktest.component';



@NgModule({
  declarations: [LabsComponent, LabdescriptionComponent, LablistComponent, BooktestComponent],
  imports: [
    CommonModule
  ]
})
export class LabModule { }
