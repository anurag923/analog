import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NovitaService } from '../../services/novita.service';

@Component({
  selector: 'app-pharmacy-details',
  templateUrl: './pharmacy-details.component.html',
  styleUrls: ['./pharmacy-details.component.css']
})
export class PharmacyDetailsComponent implements OnInit {
  
  constructor(private novitaservice:NovitaService, private route:ActivatedRoute) { }
  ngOnInit(): void {
    this.getPharmacy(this.route.snapshot.paramMap.get('id'));
  }
  individualpharmacy =  null;
  getPharmacy(id): void {
    this.novitaservice.getbyid_pharmacy(id)
      .subscribe(
        data => {
          this.individualpharmacy = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
