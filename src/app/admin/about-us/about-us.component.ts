import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../../authentication.service";
import {Router} from '@angular/router';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  constructor(private authenticationsService:AuthenticationService,private router:Router) { }

  ngOnInit() {
  }
logout(){
  this.authenticationsService.logout();
  console.log("in________logout");
  // this.router.navigate(['/admin/login']);
}
}
