import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NovitaService } from '../../services/novita.service';
declare var $:any;

@Component({
  selector: 'app-productview',
  templateUrl: './productview.component.html',
  styleUrls: ['./productview.component.css']
})
export class ProductviewComponent implements OnInit {

  constructor(private novitaservice:NovitaService, private route:ActivatedRoute) { }
  individualProduct = null;
  ngOnInit(): void {
    //Increment Decrement Numberes
    this.getProduct(this.route.snapshot.paramMap.get('itemid'),this.route.snapshot.paramMap.get('pharmaid'));
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

getProduct(itemid,pharmaid): void {
  this.novitaservice.getPharmaProduct(itemid,pharmaid)
    .subscribe(
      data => {
        this.individualProduct = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
}

}
