import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NovitaService } from 'src/app/services/novita.service';

@Component({
  selector: 'app-booktest',
  templateUrl: './booktest.component.html',
  styleUrls: ['./booktest.component.css']
})
export class BooktestComponent implements OnInit {

  constructor(private novitaservice:NovitaService , private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getTest(this.route.snapshot.paramMap.get('labid'),this.route.snapshot.paramMap.get('testid'));
  }
  individualtest = null;
  getTest(labid,testid): void {
    this.novitaservice.getIndTest(labid,testid)
      .subscribe(
        data => {
          this.individualtest = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
