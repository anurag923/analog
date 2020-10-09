import { toBase64String } from '@angular/compiler/src/output/source_map';
import { Component, OnInit } from '@angular/core';
declare var $:any;


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

      $('.btn1').click(function(){
        $('.btn1').removeClass('active1').addClass('inactive1');
         $(this).removeClass('inactive1').addClass('active1');
        });

  }

}
