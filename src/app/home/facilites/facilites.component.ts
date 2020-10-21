import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { NovitaService } from '../../services/novita.service';
@Component({
  selector: 'app-facilites',
  templateUrl: './facilites.component.html',
  styleUrls: ['./facilites.component.css']
})
export class FacilitesComponent implements OnInit {

  constructor(private novitaservice:NovitaService) { }
  
  pharmacies:any 
  ngOnInit(): void {
    this.novitaservice.getAll_pharmacy().subscribe((response)=>{
      console.log(response);
      this.pharmacies = response
    })
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }

}
