import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-doctorview',
  templateUrl: './doctorview.component.html',
  styleUrls: ['./doctorview.component.css']
})
export class DoctorviewComponent implements OnInit {

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
