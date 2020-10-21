import { Component, OnInit } from '@angular/core';
import { NovitaService } from '../../services/novita.service';

@Component({
  selector: 'app-lablist',
  templateUrl: './lablist.component.html',
  styleUrls: ['./lablist.component.css']
})
export class LablistComponent implements OnInit {

  constructor(private novitaservice:NovitaService) { }
  diagnostics:any;
  ngOnInit(): void {
    this.novitaservice.getAll_diagnostic().subscribe((response)=>{
      console.log(response);
      this.diagnostics = response
    })
  }

}
