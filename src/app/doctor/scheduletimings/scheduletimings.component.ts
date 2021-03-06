import { Component, OnInit } from '@angular/core';
import { EventSettingsModel, View } from '@syncfusion/ej2-angular-schedule';
declare var $:any;

@Component({
  selector: 'app-scheduletimings',
  templateUrl: './scheduletimings.component.html',
  styleUrls: ['./scheduletimings.component.css']
})
export class ScheduletimingsComponent implements OnInit {
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
    $(".hours-info").on('click','.trash', function () {
      $(this).closest('.hours-cont').remove();
      return false;
      });

      $(".add-hours").on('click', function () {

      var hourscontent = '<div class="row form-row hours-cont">' +
        '<div class="col-12 col-md-10">' +
          '<div class="row form-row">' +
            '<div class="col-12 col-md-6">' +
              '<div class="form-group">' +
                '<label>Start Time</label>' +
                '<select class="form-control">' +
                  '<option>-</option>' +
                  '<option>12.00 am</option>' +
                  '<option>12.30 am</option>' +
                  '<option>1.00 am</option>' +
                  '<option>1.30 am</option>' +
                '</select>' +
              '</div>' +
            '</div>' +
            '<div class="col-12 col-md-6">' +
              '<div class="form-group">' +
                '<label>End Time</label>' +
                '<select class="form-control">' +
                  '<option>-</option>' +
                  '<option>12.00 am</option>' +
                  '<option>12.30 am</option>' +
                  '<option>1.00 am</option>' +
                  '<option>1.30 am</option>' +
                '</select>' +
              '</div>' +
            '</div>' +
          '</div>' +
        '</div>' +
        '<div class="col-12 col-md-2"><label class="d-md-block d-sm-none d-none">&nbsp;</label><a href="#" class="btn btn-danger trash"><i class="far fa-trash-alt"></i></a></div>' +
      '</div>';

          $(".hours-info").append(hourscontent);
          return false;
      });

  }

}
