import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NovitaService } from 'src/app/services/novita.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private novitaservice:NovitaService , private router:Router) { }
  userDisplayName = '';
  ngOnInit(): void {
    this.userDisplayName = sessionStorage.getItem('loggedUser');
  }

  logout(){
    this.novitaservice.logout().subscribe((response)=>{
      console.log(response);
      this.userDisplayName = null;
      this.router.navigateByUrl('/');
    })
  }
}
