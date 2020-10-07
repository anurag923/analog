import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-gridview',
  templateUrl: './gridview.component.html',
  styleUrls: ['./gridview.component.css']
})
export class GridviewComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  go(){
    this.route.navigate(['/patient/gridview']);
  }
  gotodoc(){
    this.route.navigate(['/patient/doctorview']);
  }
}
