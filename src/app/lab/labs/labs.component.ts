import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { NovitaService } from '../../services/novita.service';

@Component({
  selector: 'app-labs',
  templateUrl: './labs.component.html',
  styleUrls: ['./labs.component.css']
})
export class LabsComponent implements OnInit {

  constructor(private novitaservice:NovitaService) { }
  diagnostics:any;
  ngOnInit(): void {
    this.novitaservice.getAll_diagnostic().subscribe((response)=>{
      console.log(response);
      this.diagnostics = response
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
          items: 2
        },
        740: {
          items: 4
        },
        940: {
          items: 5
        }
      },
      nav: true
    }
  }

