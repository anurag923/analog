import { Component, AfterViewInit, ElementRef, ViewChild,OnInit  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NovitaService } from '../../services/novita.service';
declare var $:any;

@Component({
  selector: 'app-productview',
  templateUrl: './productview.component.html',
  styleUrls: ['./productview.component.css']
})
export class ProductviewComponent implements OnInit {

  @ViewChild("itemName") elementView: ElementRef;
  @ViewChild("productId") elementViewproduct: ElementRef;
  @ViewChild("pharmaId") elementViewpharma: ElementRef;
  @ViewChild("quantity") elementViewquantity: ElementRef;
  @ViewChild("price") elementViewprice: ElementRef;
  @ViewChild("total") elementViewtotal: ElementRef;
  @ViewChild("medid") elementViewmed : ElementRef;
  constructor(private novitaservice:NovitaService, private route:ActivatedRoute) { }
  individualProduct = null;
  userDisplayName = '';
  
  ngOnInit(): void {
    //Increment Decrement Numberes
    this.userDisplayName = sessionStorage.getItem('loggedUser');
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
addToCart(): void {
  this.userDisplayName = sessionStorage.getItem('loggedUser');
  
  const data = {
    user : this.userDisplayName,
    productid : this.elementViewproduct.nativeElement.value,
    pharmaid : this.elementViewpharma.nativeElement.value,
    quantity : +this.elementViewquantity.nativeElement.value
    // price : +this.elementViewprice.nativeElement.innerHTML,
    // total : +this.elementViewtotal.nativeElement.innerHTML,
  };
  
  // alert(data.user);
  // alert(data.productid);
  // alert(data.pharmaid);
  // alert(data.quantity);
  // alert(data.total);
  this.novitaservice.addItemToCart(data)
    .subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
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
ngAfterViewInit(){
  // console.log(this.elementView);
  console.log(this.userDisplayName);
  console.log(this.elementViewproduct.nativeElement.value);
  console.log(this.elementViewpharma.nativeElement.value);
  console.log(this.elementViewquantity.nativeElement.value);
  console.log(this.elementViewprice.nativeElement.innerHTML);
  console.log(this.elementViewtotal.nativeElement.innerHTML);
  console.log(this.elementViewmed.nativeElement.innerHTML);
  // console.log(this.elementViewpharma.nativeElement.innerHTML);
  // console.log(this.elementViewqty.nativeElement.innerHTML);
  // console.log(this.userDisplayName);

}

}
