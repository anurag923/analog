import { toBase64String } from '@angular/compiler/src/output/source_map';
import { Component, OnInit } from '@angular/core';
import { EventSettingsModel, View } from '@syncfusion/ej2-angular-schedule';
declare var $:any;


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  public setView:any;
  View = 'month';
  public setDate: Date = new Date(2020, 9, 15);
  public eventObject: EventSettingsModel =
  {
      dataSource: [{
        EventTitle: "",
        EventStart: new Date(2020,9,15,4,0), EventEnd: new Date(2020,9,15,6,0),
        RecurrenceRule: "FREQ=DAILY;INTERVAL=1,COUNT=10"
      }],
      fields:
      {
        subject: {name : 'EventTitle', default:'Hellow world', title:'Enter Title'},
        startTime: {name: 'EventTime'},
        endTime: {name: 'EndTime'}
      }
    }

  constructor() { }

  ngOnInit(): void {

      $('.btn1').click(function(){
        $('.btn1').removeClass('active1').addClass('inactive1');
         $(this).removeClass('inactive1').addClass('active1');
        });

  }

}
