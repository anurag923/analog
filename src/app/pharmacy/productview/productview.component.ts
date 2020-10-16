import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-productview',
  templateUrl: './productview.component.html',
  styleUrls: ['./productview.component.css']
})
export class ProductviewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //Increment Decrement Numberes
	var quantitiy=0;
  $('.quantity-right-plus').click(function(e){
       e.preventDefault();
       var quantity = parseInt($('#quantity').val());
           $('#quantity').val(quantity + 1);
   });

    $('.quantity-left-minus').click(function(e){
       e.preventDefault();
       var quantity = parseInt($('#quantity').val());
           if(quantity>0){
             $('#quantity').val(quantity - 1);
           }
   });

  }

}
