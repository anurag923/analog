import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NovitaService } from '../../services/novita.service';

@Component({
  selector: 'app-labdescription',
  templateUrl: './labdescription.component.html',
  styleUrls: ['./labdescription.component.css']
})
export class LabdescriptionComponent implements OnInit {

  constructor(private novitaservice:NovitaService , private route:ActivatedRoute) { }
  individualdiagnostic =  null;
  
  ngOnInit(): void {
    this.getDiagnostic(this.route.snapshot.paramMap.get('diagnosticid'));
  }

  getDiagnostic(id): void {
    this.novitaservice.getbyid_diagnostic(id)
      .subscribe(
        data => {
          this.individualdiagnostic = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
