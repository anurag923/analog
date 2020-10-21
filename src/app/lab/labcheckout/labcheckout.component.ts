import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;


@Component({
  selector: 'app-labcheckout',
  templateUrl: './labcheckout.component.html',
  styleUrls: ['./labcheckout.component.css']
})
export class LabcheckoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
function(){
    $('input[type="radio"]').click(function(){
        var inputValue = $(this).attr("value");
        var targetBox = $("." + inputValue);
        $(".box").not(targetBox).hide();
        $(targetBox).show();
    });
};

}
